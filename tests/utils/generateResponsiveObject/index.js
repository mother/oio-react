import r from '../../../src/utils/generateResponsiveObject'

beforeEach(() => {
   jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
   jest.restoreAllMocks()
})

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

test('Input breakpoint strings with mixed spacing are parsed correctly', () => {
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

test('Breakpoint strings with an invalid range fails (no end bound)', () => {
   const result = r('500px[a-]')
   expect(result).toEqual({
      a: '500px[a-]',
      b: '500px[a-]',
      c: '500px[a-]',
      d: '500px[a-]',
      e: '500px[a-]',
      f: '500px[a-]',
      breakpointsWereSet: false
   })

   // eslint-disable-next-line no-console
   expect(console.error).toHaveBeenCalledTimes(1)
})

test('Breakpoint strings with an invalid range fails (no start bound)', () => {
   const result = r('500px[-f]')
   expect(result).toEqual({
      a: '500px[-f]',
      b: '500px[-f]',
      c: '500px[-f]',
      d: '500px[-f]',
      e: '500px[-f]',
      f: '500px[-f]',
      breakpointsWereSet: false
   })

   // eslint-disable-next-line no-console
   expect(console.error).toHaveBeenCalledTimes(1)
})

test('Breakpoint string without valid breakpoints are not transformed (stuff in brackets)', () => {
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

test('Breakpoint string without valid breakpoints are not transformed (empty brackets)', () => {
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

test('Breakpoint values can be overridden by successive breakpoint fragments', () => {
   const result = r('100[a] 200[ab] 300[b-d]')
   expect(result).toEqual({
      a: '200',
      b: '300',
      c: '300',
      d: '300',
      e: undefined,
      f: undefined,
      breakpointsWereSet: true
   })
})

test('Unparsed literal goes in to an `extra` param', () => {
   const result = r('100[a] 200[bc] 200 px ', { trim: false })
   expect(result).toEqual({
      a: '100',
      b: ' 200',
      c: ' 200',
      d: undefined,
      e: undefined,
      f: undefined,
      breakpointsWereSet: true,
      extra: ' 200 px '
   })
})

test('It works with input strings where breakpoint keys are specified but no values', () => {
   const result = r('[cd]')
   expect(result).toEqual({
      a: undefined,
      b: undefined,
      c: '',
      d: '',
      e: undefined,
      f: undefined,
      breakpointsWereSet: true
   })
})

test('Parses breakpoints in the correct order', () => {
   const result = r('1[cd] 2[ae] 3[fb]', { returnParsePath: true })
   expect(result).toEqual({
      a: '2',
      b: '3',
      c: '1',
      d: '1',
      e: '2',
      f: '3',
      breakpointsWereSet: true,
      parsePath: ['cd', 'ae', 'fb']
   })
})
