import { getBreakpoint } from '../../../src/utils/useWindowResizeSensor'

test('It correctly parses current breakpoint', () => {
   expect(getBreakpoint(3000)).toBe('f')
   expect(getBreakpoint(1700)).toBe('e')
   expect(getBreakpoint(1350)).toBe('d')
   expect(getBreakpoint(1000)).toBe('c')
   expect(getBreakpoint(675)).toBe('b')
   expect(getBreakpoint(475)).toBe('a')
   expect(getBreakpoint(0)).toBe('a')
   expect(getBreakpoint('blue cheese')).toBe(undefined)
})
