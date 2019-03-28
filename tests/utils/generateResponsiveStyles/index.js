import generateResponsiveStyles from '../../../src/utils/generateResponsiveStyles'

test('It will correctly transform responsive objects in to responsive styles', () => {
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

   const result = generateResponsiveStyles(responsiveObject)
   expect(result).toEqual({
      '@media (min-width: 0px) and (max-width: 475px)': {
         fontFamily: 'Arial',
         color: 'red'
      },
      '@media (min-width: 475px) and (max-width: 675px)': {
         fontFamily: 'Helvetica'
      },
      '@media (min-width: 675px) and (max-width: 1000px)': {
         color: 'blue'
      }
   })
})

test('It should provide an empty responsive style if no object is provided', () => {
   const result = generateResponsiveStyles()
   expect(result).toEqual({})
})

test('It should ignore non POJOs', () => {
   const result = generateResponsiveStyles({
      fontFamily: undefined,
      color: null,
      c: new Map()
   })

   expect(result).toEqual({})
})

test('It should optimize transforming responsive objects where no breakpoints were set', () => {
   const result = generateResponsiveStyles({
      fontFamily: {
         a: 'Arial',
         b: 'Helvetica'
      },
      size: {
         a: '100',
         b: '100',
         c: '100',
         d: '100',
         e: '100',
         f: '100',
         breakpointsWereSet: false
      }
   })

   expect(result).toEqual({
      size: '100',
      '@media (min-width: 0px) and (max-width: 475px)': {
         fontFamily: 'Arial'
      },
      '@media (min-width: 475px) and (max-width: 675px)': {
         fontFamily: 'Helvetica'
      }
   })
})
