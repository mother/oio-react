// NOTE: This utility is currently considered EXPERIMENTAL, and is not
// ready for production yet. Likely to change significantly in following PRs.
import { breakpointMediaQueries } from '../../config/constants'

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
      [breakpointMediaQueries.a]: {},
      [breakpointMediaQueries.b]: {},
      [breakpointMediaQueries.c]: {},
      [breakpointMediaQueries.d]: {},
      [breakpointMediaQueries.e]: {},
      [breakpointMediaQueries.f]: {}
   }

   // TODO: Handle strings
   Object.keys(responsiveObjects).forEach((styleKey) => {
      Object.keys(responsiveObjects[styleKey]).forEach((breakpointKey) => {
         // TODO: Optimize responsiveObjects where `breakpointMediaQueriesWereSet === false`
         if (typeof responsiveObjects[styleKey][breakpointKey] !== 'boolean') {
            result[breakpointMediaQueries[breakpointKey]][styleKey] =
               responsiveObjects[styleKey][breakpointKey]
         }
      })
   })

   return result
}

module.exports = generateStyles
