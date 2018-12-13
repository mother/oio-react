// This utility takes a string as an input, and creates
// an object from it based on the breakpoint fragments
// specified in the string.

// Format of object returned is:
// {
//    a: String,
//    b: String,
//    c: String,
//    d: String,
//    e: String,
//    f: String,
//    breakpointsWereSet: Boolean,
//    extra: String,
//    parsePath: Array[String]
// }

// Possible future enhancements:
// - Ability to change breakpoints
// - Ability to change delimiter chars from [] to something else

const { breakpointKeys, responsiveStrFragmentRegexPattern } = require('../../config/constants')

const generateResponsiveObject = (input, {
   trim: shouldTrim = true,
   returnParsePath = false
} = {}) => {
   const inputStrUntrimmed = typeof input === 'string'
      ? input
      : String(input)

   const inputStr = shouldTrim
      ? inputStrUntrimmed.trim()
      : inputStrUntrimmed

   const fragmentRegex = new RegExp(responsiveStrFragmentRegexPattern, 'g')
   let fragments = fragmentRegex.exec(inputStr)

   const result = { breakpointsWereSet: fragments !== null }
   if (returnParsePath) {
      result.parsePath = []
   }

   // If no breakpoints were specified, then exit early with
   // the result for all breakpoints the same as the inputStr
   if (fragments === null) {
      for (let i = 0; i < breakpointKeys.length; i += 1) {
         result[breakpointKeys[i]] = inputStr
      }

      return result
   }

   do {
      let fragmentParsePath = ''
      let breakpointVal = fragments[1]
      const breakpointChars = fragments[2].trim()

      if (shouldTrim) {
         breakpointVal = breakpointVal.trim()
      }

      for (let j = 0; j < breakpointChars.length; j += 1) {
         if (breakpointChars[j] === '-') {
            const startCharCode = breakpointChars.charCodeAt(j - 1)
            const endCharCode = breakpointChars.charCodeAt(j + 1)
            if (isNaN(startCharCode) || isNaN(endCharCode)) {
               // eslint-disable-next-line no-console
               console.error('Warning: Responsive breakpoint string improperly formatted')
               result.breakpointsWereSet = false
               for (let k = 0; k < breakpointKeys.length; k += 1) {
                  result[breakpointKeys[k]] = inputStr
               }

               return result
            }

            for (let k = startCharCode + 1; k < endCharCode; k += 1) {
               result[String.fromCharCode(k)] = breakpointVal
               fragmentParsePath += String.fromCharCode(k)
            }
         } else {
            result[breakpointChars[j]] = breakpointVal
            fragmentParsePath += breakpointChars[j]
         }
      }

      // Commit the parse path for this fragment/iteration
      if (returnParsePath) {
         result.parsePath.push(fragmentParsePath)
      }

      // Match the next fragment
      // But if there is no next fragment, check if there's
      // anything remaining in the input string that went unparsed
      // and add it to the `extra` param of the result.
      const lastMatchEndIndex = fragmentRegex.lastIndex
      fragments = fragmentRegex.exec(inputStr)
      if (fragments === null) {
         let extra = inputStr.substring(lastMatchEndIndex)
         if (shouldTrim) {
            extra = extra.trim()
         }

         if (lastMatchEndIndex < inputStr.length) {
            result.extra = extra
         }
      }
   } while (fragments !== null)

   return result
}

module.exports = generateResponsiveObject
