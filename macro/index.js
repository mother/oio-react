const { createMacro } = require('babel-plugin-macros')
const generateResponsiveObject = require('../src/utils/generateResponsiveObject')

module.exports = createMacro(oioResponsiveStringMacro)

function oioResponsiveStringMacro({ references, state, babel }) {
   // See https://babeljs.io/docs/en/babel-types
   const t = babel.types

   references.default.forEach((path) => {
      // Find where the macro was invoked as a function
      if (path.parentPath.type === 'CallExpression') {
         // Get the input string that was passed in to our macro
         const responsiveString = path.parentPath.node.arguments[0].value

         // Convert it to a responsive object using our trusty
         // and well-tested utility
         const responsiveObj = generateResponsiveObject(responsiveString)

         // Turn our humble plain ol' OIO responsive object in to an AST,
         // starting with transforming each responsive object key/value pair
         const breakpointObjASTExpressions = Object.keys(responsiveObj).map(key => (
            t.objectProperty(
               t.identifier(key),
               typeof responsiveObj[key] === 'boolean'
                  ? t.booleanLiteral(responsiveObj[key]) // `breakpointsWereSet`
                  : t.stringLiteral(responsiveObj[key]) // breakpoint str values
            )
         ))

         // Replace the entire function call with our responsive object
         path.parentPath.replaceWith(
            t.objectExpression(breakpointObjASTExpressions)
         )
      }
   })
}
