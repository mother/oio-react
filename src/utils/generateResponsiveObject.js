// {
//    a: String,
//    b: String,
//    c: String,
//    d: String,
//    e: String,
//    f: String,
//    breakpointsWereSet: Boolean
// }

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
            // TODO: HANDLE BOUNDARY ISSUES
            const startCharCode = breakpointChars.charCodeAt(j - 1)
            const endCharCode = breakpointChars.charCodeAt(j + 1)
            if (isNaN(startCharCode) || isNaN(endCharCode)) {
               throw new Error('Improperly bounded input')
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
