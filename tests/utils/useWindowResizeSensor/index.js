import { getCurrentBreakpoint } from '../../../src/utils/useWindowResizeSensor'

test('It correctly parses current breakpoint', () => {
   expect(getCurrentBreakpoint(3000)).toBe('f')
   expect(getCurrentBreakpoint(1700)).toBe('e')
   expect(getCurrentBreakpoint(1350)).toBe('d')
   expect(getCurrentBreakpoint(1000)).toBe('c')
   expect(getCurrentBreakpoint(675)).toBe('b')
   expect(getCurrentBreakpoint(475)).toBe('a')
   expect(getCurrentBreakpoint(0)).toBe('a')
   expect(getCurrentBreakpoint('blue cheese')).toBe('f')
})
