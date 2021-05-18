import generateResponsiveObject from '../../src/utils/generateResponsiveObject'
import generateResponsiveStyles from '../../src/utils/generateResponsiveStyles'

const numCycles = 500
const numProps = 15

test('generateResponsiveObject Performance', () => {
   const t0 = performance.now()
   for (let i = 0; i < numCycles; i += 1) {
      for (let j = 0; j < numProps; j += 1) {
         generateResponsiveObject('500px[a-c] 600px[d] 900px[e] 1200px[f]')
      }
   }

   const t1 = performance.now()
   console.log(t1 - t0)
})

test('generateResponsiveStyles Performance', () => {
   const responsiveObject = {
      fontFamily: {
         a: 'Arial',
         b: 'Helvetica'
      },
      color: {
         a: 'red',
         c: 'blue'
      }
   }

   const t0 = performance.now()
   for (let i = 0; i < numCycles; i += 1) {
      for (let j = 0; j < numProps; j += 1) {
         generateResponsiveStyles(responsiveObject)
      }
   }

   const t1 = performance.now()
   console.log(t1 - t0)
})
