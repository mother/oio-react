import generateResponsiveStyles from '../../../src/utils/generateResponsiveStyles'

beforeEach(() => {
   jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
   jest.restoreAllMocks()
})

test('It will correctly transform a responsive object in to responsive styles', () => {
   const responsiveObject = {
      fontFamily: {
         a: 'Arial',
         b: 'Helvtica'
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
         fontFamily: 'Helvtica'
      },
      '@media (min-width: 675px) and (max-width: 1000px)': {
         color: 'blue'
      },
      '@media (min-width: 1000px) and (max-width: 1350px)': {},
      '@media (min-width: 1350px) and (max-width: 1700px)': {},
      '@media (min-width: 1700px)': {}
   })
})
