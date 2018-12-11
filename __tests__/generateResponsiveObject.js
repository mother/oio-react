import r from '../src/generateResponsiveObject'

test('it will be fine if a non-responsive string format is passed in', () => {
   const result = r('500px')
   expect(result).toEqual({
      a: '500px',
      b: '500px',
      c: '500px',
      d: '500px',
      e: '500px',
      f: '500px',
      isResponsiveObject: false
   })
})

test('it will be fine if responsive string format is passed in', () => {
   const result = r('500px[a] 600px[bc]  700px[d-f]')
   expect(result).toEqual({
      a: '500px',
      b: '600px',
      c: '600px',
      d: '700px',
      e: '700px',
      f: '700px',
      isResponsiveObject: true
   })
})
