import applyMultiplier from '../../../src/utils/applyMultiplier'

test('It will throw an error if valid scale multiplier is not passed in', () => {
   expect(() => applyMultiplier(10)).toThrowError('multiplier must be a number')
   expect(() => applyMultiplier(10, false)).toThrowError('multiplier must be a number')
   expect(() => applyMultiplier(10, '1.5')).toThrowError('multiplier must be a number')
})

test('It will scale a number correctly', () => {
   expect(applyMultiplier(100, 1.5)).toBe(150)
   expect(applyMultiplier(100, -1.5)).toBe(-150)
   expect(applyMultiplier(-100, 1.5)).toBe(-150)
   expect(applyMultiplier(-100, -1.5)).toBe(150)
   expect(applyMultiplier(25, 0.5)).toBe(12.5)
})

test('It will not apply to booleans, null, undefined, empty strings', () => {
   expect(applyMultiplier(true, -1)).toBe(true)
   expect(applyMultiplier(null, -1.5)).toBe(null)
   expect(applyMultiplier(undefined, 5)).toBe(undefined)
   expect(applyMultiplier('', -1)).toBe('')
})

test('It will throw an error if valid scale multiplier is not passed in', () => {
   expect(() => applyMultiplier(10)).toThrowError('multiplier must be a number')
   expect(() => applyMultiplier(10, false)).toThrowError('multiplier must be a number')
   expect(() => applyMultiplier(10, '1.5')).toThrowError('multiplier must be a number')
})

test('It correctly scales a simple numeric string measured absolutely', () => {
   expect(applyMultiplier('10px', 0.5)).toBe('5px')
   expect(applyMultiplier('10', 0.5)).toBe('5')
   expect(applyMultiplier('2.5', 0.5)).toBe('1.25')
   expect(applyMultiplier('10.5px', 0.5)).toBe('5.25px')
   expect(applyMultiplier('10vmax', 0.5)).toBe('5vmax')
   expect(applyMultiplier('100px', -1.5)).toBe('-150px')
   expect(applyMultiplier('-100', 1.5)).toBe('-150')
   expect(applyMultiplier('-100em', -1.5)).toBe('150em')
   expect(applyMultiplier('-25px', 0.5)).toBe('-12.5px')
})

test('It correctly skips numeric strings measured proportionally', () => {
   expect(applyMultiplier('10%', 0.5)).toBe('10%')
   expect(applyMultiplier('10.5%', 0.5)).toBe('10.5%')
   expect(applyMultiplier('-10.5%', 0.5)).toBe('-10.5%')
   expect(applyMultiplier('5deg', 0.5)).toBe('5deg')
   expect(applyMultiplier('5rad', 0.5)).toBe('5rad')
})

test('It optionally rounds resulting values', () => {
   expect(applyMultiplier('2.9px solid red', 0.5, true)).toBe('1px solid red')
   expect(applyMultiplier('-5px solid red', 0.5, true)).toBe('-2px solid red')
})

test('It correctly scales CSS border-like values', () => {
   expect(applyMultiplier('10px solid red', 0.5)).toBe('5px solid red')
   expect(applyMultiplier('10 solid red', 0.5)).toBe('5 solid red')
   expect(applyMultiplier('10% solid #fff', 0.5)).toBe('10% solid #fff')
})

test('It correctly scales CSS padding-like values', () => {
   expect(applyMultiplier('10px 10px', 0.5)).toBe('5px 5px')
   expect(applyMultiplier('10px -10px', 0.5)).toBe('5px -5px')
   expect(applyMultiplier('10pt -10 10% 5em', 0.5)).toBe('5pt -5 10% 2.5em')
   expect(applyMultiplier('10px !important', 0.5)).toBe('5px !important')
   expect(applyMultiplier('10 auto', 0.5)).toBe('5 auto')
})

test('It correctly scales CSS calc-like values', () => {
   expect(applyMultiplier('calc(100% - 10px)', 0.5)).toBe('calc(100% - 5px)')
   expect(applyMultiplier('calc(100px + 10%)', 0.5)).toBe('calc(50px + 10%)')
   expect(applyMultiplier('calc(100px + 100)', 0.5)).toBe('calc(50px + 50)')
   expect(applyMultiplier('calc(100px + 100px)', 0.5)).toBe('calc(50px + 50px)')
})

test('It correctly scales CSS transform-like values', () => {
   expect(applyMultiplier('skewX(25deg)', 0.5)).toBe('skewX(25deg)')
   expect(applyMultiplier('translate(20px, 10px)', 0.5)).toBe('translate(10px, 5px)')
   expect(applyMultiplier('scale(20) skew(-20deg)', 0.5)).toBe('scale(10) skew(-20deg)')
   expect(applyMultiplier('scale(20) translate(20px,10px)', 0.5)).toBe('scale(10) translate(10px,5px)')
})
