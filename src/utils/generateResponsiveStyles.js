// Transforms responsive objects into responsive styles

// eg.
// responsiveObjects = {
//    fontFamily: {
//       a: 'Arial',
//       b: 'Helvetica'
//    },
//    color: {
//       a: 'red',
//       c: 'blue'
//    }
// }
//
// becomes
//
// '@media (min-width: 0px) and (max-width: 475px)': {
//    fontFamily: 'Arial',
//    color: 'red'
// },
// '@media (min-width: 475px) and (max-width: 675px)': {
//    fontFamily: 'Helvetica'
// },
// '@media (min-width: 675px) and (max-width: 1000px)': {
//    color: 'blue'
// }

const { breakpointMediaQueries } = require('../../config/constants')

// Plain Javascript Object Check

const objPrototype = Object.prototype
const getObjPrototype = Object.getPrototypeOf
const isPOJO = obj => (
   typeof obj !== 'object' || obj === null
      ? false
      : getObjPrototype(obj) === objPrototype
)

// Main Util

const generateStyles = (responsiveObjects = {}) => {
   const result = {}

   // TODO: Handle strings
   Object.keys(responsiveObjects).forEach((styleKey) => {
      const responsiveObject = responsiveObjects[styleKey]
      if (isPOJO(responsiveObject)) {
         // Optimize responsiveObjects where `breakpointsWereSet === false`
         if (responsiveObject.breakpointsWereSet === false) {
            result[styleKey] = responsiveObject.a
         } else {
            Object.keys(responsiveObject).forEach((breakpointKey) => {
               if (typeof responsiveObject[breakpointKey] !== 'boolean') {
                  // If the breakpoint key doesn't exist in our result object, initialize it
                  if (typeof result[breakpointMediaQueries[breakpointKey]] === 'undefined') {
                     result[breakpointMediaQueries[breakpointKey]] = {}
                  }

                  result[breakpointMediaQueries[breakpointKey]][styleKey] =
                     responsiveObject[breakpointKey]
               }
            })
         }
      }
   })

   return result
}

module.exports = generateStyles
