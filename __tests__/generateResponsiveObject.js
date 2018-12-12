import r from '../src/utils/generateResponsiveObject'

test('It will parse correctly if a non-breakpoint string is passed in', () => {
   const result = r('500px')
   expect(result).toEqual({
      a: '500px',
      b: '500px',
      c: '500px',
      d: '500px',
      e: '500px',
      f: '500px',
      breakpointsWereSet: false
   })
})

test('It will parse correctly if a mixture of breakpoint formats are passed in', () => {
   const result = r('500px[a] 600px[bc] 700px[d-f]')
   expect(result).toEqual({
      a: '500px',
      b: '600px',
      c: '600px',
      d: '700px',
      e: '700px',
      f: '700px',
      breakpointsWereSet: true
   })
})

test('It will only parse breakpoints that were set', () => {
   const result = r('500px[acf]')
   expect(result).toEqual({
      a: '500px',
      b: undefined,
      c: '500px',
      d: undefined,
      e: undefined,
      f: '500px',
      breakpointsWereSet: true
   })
})

// test('Improperly bounded breakpoint strings fail', () => {
//    const result = r('500px[a-]')
//    expect(result).toEqual({
//       a: '500px',
//       b: undefined,
//       c: undefined,
//       d: undefined,
//       e: undefined,
//       f: undefined,
//       breakpointsWereSet: true
//    })
// })
//
// test('Improperly bounded breakpoint strings fail', () => {
//    const result = r('500px[-f]')
//    expect(result).toEqual({
//       a: undefined,
//       b: undefined,
//       c: undefined,
//       d: undefined,
//       e: undefined,
//       f: '500px',
//       breakpointsWereSet: true
//    })
// })

test('Input breakpoint strings with mixed spacing is parsed corectly', () => {
   const result = r(`
      100px  500px  [c]
      25 pt  [d-e]
   `)

   expect(result).toEqual({
      a: undefined,
      b: undefined,
      c: '100px  500px',
      d: '25 pt',
      e: '25 pt',
      f: undefined,
      breakpointsWereSet: true
   })
})

test('Invalid breakpoint strings are not parsed as a breakpoint string', () => {
   const result = r('500px[boogieboogie]')
   expect(result).toEqual({
      a: '500px[boogieboogie]',
      b: '500px[boogieboogie]',
      c: '500px[boogieboogie]',
      d: '500px[boogieboogie]',
      e: '500px[boogieboogie]',
      f: '500px[boogieboogie]',
      breakpointsWereSet: false
   })
})

test('Invalid breakpoint strings are not parsed as a breakpoint string', () => {
   const result = r('500px[]')
   expect(result).toEqual({
      a: '500px[]',
      b: '500px[]',
      c: '500px[]',
      d: '500px[]',
      e: '500px[]',
      f: '500px[]',
      breakpointsWereSet: false
   })
})

test('Numbers are parsed as strings', () => {
   const result = r(500)
   expect(result).toEqual({
      a: '500',
      b: '500',
      c: '500',
      d: '500',
      e: '500',
      f: '500',
      breakpointsWereSet: false
   })
})

test('Booleans are parsed as strings', () => {
   const result = r(true)
   expect(result).toEqual({
      a: 'true',
      b: 'true',
      c: 'true',
      d: 'true',
      e: 'true',
      f: 'true',
      breakpointsWereSet: false
   })
})
