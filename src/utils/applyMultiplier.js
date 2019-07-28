// eslint-disable-next-line max-len
const cssNumValRegex = /(\D*)(-?[0-9]+(?:\.[0-9]+)?)(cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%|deg|rad)?(\D*)/gi
const unitsToIgnore = ['%', 'deg', 'rad']

export default (value, multiplier, round = false) => {
   if (typeof multiplier !== 'number') {
      throw new Error('Scale multiplier must be a number')
   }

   if (multiplier === 1) return value
   if (typeof value === 'number') return value * multiplier
   if (typeof value !== 'string') return value

   return value.replace(cssNumValRegex, (match, prefix, amount, unit = '', suffix) => {
      if (unitsToIgnore.includes(unit)) return match

      // Kinda hacky way to check if it was a negative number.
      // Ideally, we would use a regex negative lookbehind assertion, but
      // that's not supported in babel or by most browsers (yet), though it
      // is a stage 4 tc39 proposal.
      const isNegative = prefix.endsWith('-')
      let number = parseFloat(amount) * multiplier
      if (isNegative) number *= -1
      if (round) number = Math.round(number)

      return `${isNegative ? prefix.slice(0, -1) : prefix}${number}${unit}${suffix}`
   })
}
