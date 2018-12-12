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
//    extra: String
// }

// Possible future enhancements:
// - Ability to change breakpoints
// - Ability to change delimiter chars from [] to something else

const breakpoints = ['a', 'b', 'c', 'd', 'e', 'f']

const generateResponsiveObject = (input, options = { trim: true }) => {
   const inputStrUntrimmed = typeof input === 'string'
      ? input
      : String(input)

   const inputStr = options.trim
      ? inputStrUntrimmed.trim()
      : inputStrUntrimmed

   const fragmentRegex = /(.*?)\[([abcdef-]+)\]/ig
   let fragments = fragmentRegex.exec(inputStr)

   const result = { breakpointsWereSet: fragments !== null }

   // If no breakpoints were specified, then exit early with
   // the result for all breakpoints the same as the inputStr
   if (fragments === null) {
      for (let i = breakpoints.length - 1; i >= 0; i -= 1) {
         result[breakpoints[i]] = inputStr
      }

      return result
   }

   do {
      let breakpointVal = fragments[1]
      const breakpointChars = fragments[2].trim()

      if (options.trim) {
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
               for (let k = breakpoints.length - 1; k >= 0; k -= 1) {
                  result[breakpoints[k]] = inputStr
               }

               return result
            }

            for (let k = startCharCode + 1; k < endCharCode; k += 1) {
               result[String.fromCharCode(k)] = breakpointVal
            }
         } else {
            result[breakpointChars[j]] = breakpointVal
         }
      }

      // Match the next fragment
      // But if there is no next fragment, check if there's
      // anything remaining in the input string that went unparsed
      // and add it to the `extra` param of the result.
      const lastMatchEndIndex = fragmentRegex.lastIndex
      fragments = fragmentRegex.exec(inputStr)
      if (fragments === null) {
         let extra = inputStr.substring(lastMatchEndIndex)
         if (options.trim) {
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
