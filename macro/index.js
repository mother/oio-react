const { createMacro } = require('babel-plugin-macros')
const generateResponsiveObject = require('../src/utils/generateResponsiveObject')

module.exports = createMacro(oioResponsiveStringMacro)

function oioResponsiveStringMacro({ references, state, babel }) {
   // See https://babeljs.io/docs/en/babel-types
   // Also see TemplateElement spec:
   // https://github.com/babel/babel/blob/master/packages/babel-parser/ast/spec.md#templateelement
   const t = babel.types

   references.default.forEach((path) => {
      if (path.parentPath.type === 'TaggedTemplateExpression') {
         const templateLiteralQuasi = path.parentPath.node.quasi

         // Structure of a template literal is that `expressions` (which are the variable parts)
         // are sandwhiched between `quasis` (the stringy literal parts). Therefore,
         // quasis.length === expressions.length + 1 all the time.

         if (templateLiteralQuasi.expressions.length === 0) {
            const responsiveStr = templateLiteralQuasi.quasis[0].value.raw
            const responsiveObj = generateResponsiveObject(responsiveStr)
            const ast = transformSimpleResponsiveObjToAST(responsiveObj, t)
            return path.parentPath.replaceWith(
               t.objectExpression(ast)
            )
         }

         // TODO: YES NEEDED
         // eg. r`a ${x} b`
         // 1. Form a string just using the quasis so that we know what are the breakpoints upfront
         // (Breakpoint keys must always be in the quasis, never the expressions!)

         // const incompleteResponsiveStr =
         //   templateLiteralQuasi.quasis.map(q => q.value.raw).join('')
         // const incompleteResponsiveObj = generateResponsiveObject(incompleteResponsiveStr)
         //
         // if (!incompleteResponsiveObj.breakpointsWereSet) {
         //    return incompleteResponsiveObj
         // }

         // We will be generating responsive object fragments for each of the quasis,
         // while leaving the expressions as they are. As we loop through the quasis
         // and expressions, we will progressively build our responsive object. Each
         // responsive object fragment will give us a bit of information about the
         // previous and next breakpoints.

         const result = {}

         // Since we are parsing from left-to-right, we may have quasis and
         // expressions that have been parsed but not associated with a breakpoint
         // just yet. Those quasis and expressions will be stored in this array until
         // a breakpoint has been parsed, at which point our queue will be emptied, and
         // the process will be repeated for the next breakpoint.

         let unassociatedQueue = []

         templateLiteralQuasi.quasis.forEach((quasi, i) => {
            // console.log('quasi', i, quasi.value)
            const responsiveStringFragment = quasi.value.raw
            const responsiveObjFragment = generateResponsiveObject(
               responsiveStringFragment,
               { trim: false, returnParsePath: true }
            )

            if (responsiveObjFragment.breakpointsWereSet === true) {
               // Go through the breakpoint keys set in this string, in
               // the order that they appeared in the string (the parsePath)
               // eg: ['ab', 'c', 'def']
               for (let j = 0; j < responsiveObjFragment.parsePath.length; j += 1) {
                  // Since multiple breakpoint keys can be set at once, we want to apply
                  // the same actions to all breakpoints that were set together
                  // eg: ['a', 'b']
                  for (let k = 0; k < responsiveObjFragment.parsePath[j].length; k += 1) {
                     const breakpointKey = responsiveObjFragment.parsePath[j][k]

                     if (typeof result[breakpointKey] === 'undefined') {
                        result[breakpointKey] = []
                     }

                     // Fold in expressions and unparsed extras (if applicable)
                     // in to the first breakpoint(s) specified in the current
                     // responsive string fragment
                     // TODO: DON'T USE SPREAD OPERATOR
                     if (j === 0 && unassociatedQueue.length > 0) {
                        result[breakpointKey].push(...unassociatedQueue)
                     }

                     result[breakpointKey].push(t.templateElement({
                        raw: responsiveObjFragment[breakpointKey],
                        cooked: responsiveObjFragment[breakpointKey]
                     }))
                  }

                  // Since our unused quasis and expressions have now been associated
                  // with a breakpoint, we can clear the queue
                  if (j === 0 && unassociatedQueue.length > 0) {
                     unassociatedQueue = []
                  }
               }
            } else {
               // This quasi value has not been associated with a breakpoint yet,
               // so just propagate it forward until a breakpoint key has between
               // specified
               unassociatedQueue.push(t.templateElement({
                  raw: responsiveStringFragment,
                  cooked: responsiveStringFragment
               }))
            }

            if (i < templateLiteralQuasi.quasis.length - 1) {
               // TODO: HANDLE OTHER EXPRESSIONS (eg. MemberExpression)
               // May be able to just use existing one rather than creating a new one
               // console.log('expresion', i, templateLiteralQuasi.expressions[i])
               unassociatedQueue.push(t.identifier(templateLiteralQuasi.expressions[i].name))
            }
         })

         // It's gotta be a quasi/expression/quasi sandwich
         Object.keys(result).forEach((key) => {
            if (!t.isTemplateElement(result[key][0])) {
               result[key].unshift(t.templateElement({
                  raw: '',
                  cooked: ''
               }))
            }

            if (!t.isTemplateElement(result[key][result[key].length - 1])) {
               result[key].push(t.templateElement({
                  raw: '',
                  cooked: ''
               }, true))
            }
         })

         // console.log('Boogie Time', require('util').inspect(result, null, null))

         // Our result object is already made up of a bunch of quasis and expressions,
         // we just need to create proper AST constructs from this result object.
         const breakpointObjASTExpressions = Object.keys(result).map((key) => {
            const templateLiteral = t.templateLiteral(
               result[key].filter(n => t.isTemplateElement(n)), // quasis
               result[key].filter(n => !t.isTemplateElement(n)) // expressions
            )

            return t.objectProperty(
               t.identifier(key),
               templateLiteral
            )
         })

         // Replace the entire function call with our responsive object
         path.parentPath.replaceWith(
            t.objectExpression(breakpointObjASTExpressions)
         )
      }

      // TODO: REMOVE

      // Find where the macro was invoked as a function
      // if (path.parentPath.type === 'CallExpression') {
      //    // Get the input string that was passed in to our macro
      //
      //    const arg = path.parentPath.node.arguments[0]
      //    let breakpointObjASTExpressions = []
      //
      //    // TODO: Handle TemplateLiteral expressions
      //    if (t.isTemplateLiteral(arg)) {
      //
      //    // String Literal
      //    } else if (t.isStringLiteral(arg)) {
      //       const responsiveString = arg.value
      //       // Convert it to a responsive object using our trusty
      //       // and well-tested utility
      //       const responsiveObj = generateResponsiveObject(responsiveString)
      //
      //       // Turn our humble plain ol' OIO responsive object in to an AST,
      //       // starting with transforming each responsive object key/value pair
      //       breakpointObjASTExpressions = Object.keys(responsiveObj).map(key => (
      //          t.objectProperty(
      //             t.identifier(key),
      //             typeof responsiveObj[key] === 'boolean'
      //                ? t.booleanLiteral(responsiveObj[key]) // `breakpointsWereSet`
      //                : t.stringLiteral(responsiveObj[key]) // breakpoint str values
      //          )
      //       ))
      //    }
      //
      //    // Replace the entire function call with our responsive object
      //    path.parentPath.replaceWith(
      //       t.objectExpression(breakpointObjASTExpressions)
      //    )
      // }
   })
}

// A small utility to turn a humble plain ol' OIO responsive object in to an AST.
// This is only used for simple objects - none that have template literal
// expressions in them.

function transformSimpleResponsiveObjToAST(responsiveObj, t) {
   return Object.keys(responsiveObj).map(key => (
      t.objectProperty(
         t.identifier(key),
         typeof responsiveObj[key] === 'boolean'
            ? t.booleanLiteral(responsiveObj[key]) // `breakpointsWereSet`
            : t.stringLiteral(responsiveObj[key]) // breakpoint str values
      )
   ))
}
