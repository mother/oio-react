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
//    breakpointsWereSet: Boolean
// }

// Possible future enhancements:
// - Ability to change breakpoints
// - Ability to change delimiter chars from [] to something else

const breakpoints = ['a', 'b', 'c', 'd', 'e', 'f']

const generateResponsiveObject = (input) => {
   const inputStr = typeof input === 'string'
      ? input
      : String(input)

   const fragments = inputStr.match(/(.+?)\[([abcdef-]+)\]/ig)
   const result = { breakpointsWereSet: fragments !== null }

   // If no breakpoints were specified, then exit early with
   // the result for all breakpoints the same as the inputStr
   if (fragments === null) {
      for (let i = breakpoints.length - 1; i >= 0; i -= 1) {
         result[breakpoints[i]] = inputStr
      }

      return result
   }

   for (let i = fragments.length - 1; i >= 0; i -= 1) {
      const breakpointStr = fragments[i]
      const breakpointCharMatch = breakpointStr.match(/\[([abcdef-]+)\]/i)
      const breakpointChars = breakpointCharMatch[1]
      const breakpointVal = breakpointStr.replace(breakpointCharMatch[0], '').trim()

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
   }

   return result
}

export default generateResponsiveObject
