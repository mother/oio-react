// NOTE: This utility is currently considered EXPERIMENTAL, and is not
// ready for production yet. Likely to change significantly in following PRs.

// TODO: Move this to a constants file
const breakpoints = {
   a: '@media (min-width: 0px) and (max-width: 475px)',
   b: '@media (min-width: 475px) and (max-width: 675px)',
   c: '@media (min-width: 675px) and (max-width: 1000px)',
   d: '@media (min-width: 1000px) and (max-width: 1350px)',
   e: '@media (min-width: 1350px) and (max-width: 1700px)',
   f: '@media (min-width: 1700px)'
}

// responsiveObjects = {
//    fontFamily: {
//       a: 'Arial',
//       b: 'Helvtica'
//    },
//    color: {
//       a: 'red',
//       c: 'blue'
//    }
// }

const generateStyles = (responsiveObjects) => {
   const result = {
      [breakpoints.a]: {},
      [breakpoints.b]: {},
      [breakpoints.c]: {},
      [breakpoints.d]: {},
      [breakpoints.e]: {},
      [breakpoints.f]: {}
   }

   // TODO: Handle strings
   Object.keys(responsiveObjects).forEach((styleKey) => {
      if (responsiveObjects[styleKey]) {
         Object.keys(responsiveObjects[styleKey]).forEach((breakpointKey) => {
            // TODO: Optimize responsiveObjects where `breakpointsWereSet === false`
            if (typeof responsiveObjects[styleKey][breakpointKey] !== 'boolean') {
               result[breakpoints[breakpointKey]][styleKey] =
               responsiveObjects[styleKey][breakpointKey]
            }
         })
      }
   })

   return result
}

module.exports = generateStyles
