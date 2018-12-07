// =======================================================
// Breakpoint-related config/functions
// Rating: 4
// Action Items: getAttributeValueForCurrentBreakpoint
// function can likely be optimized
// =======================================================

export const breakpoints = {
   a: '@media (min-width: 0px) and (max-width: 475px)',
   b: '@media (min-width: 475px) and (max-width: 675px)',
   c: '@media (min-width: 675px) and (max-width: 1000px)',
   d: '@media (min-width: 1000px) and (max-width: 1350px)',
   e: '@media (min-width: 1350px) and (max-width: 1700px)',
   f: '@media (min-width: 1700px)'
}

// The following was copied from original oio
/* eslint-disable */
export const getAttributeValueForCurrentBreakpoint = (currentSize, attributeValue) => {
   let fragments = attributeValue.match(/(.+?)\[([abcdef,-]+)\]/ig)
   if (fragments === null) {
      fragments = [attributeValue]
   }

   for (let fragment of fragments) {
      fragment = fragment.trim()
      const charSet = fragment.match(/\[([abcdef,-]+)\]/i)
      if (Array.isArray(charSet) && charSet.length === 2) {
         const charRegexp = new RegExp(`[${charSet[1]}]`, 'i')
         const match = currentSize.match(charRegexp)
         if (Array.isArray(match)) {
            return fragment.replace(charSet[0], '').trim()
         }
      } else {
         return fragment.trim()
      }
   }

   return null
}
/* eslint-enable */
