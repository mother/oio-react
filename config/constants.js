const breakpointKeys = ['a', 'b', 'c', 'd', 'e', 'f']
const responsiveStrFragmentRegexPattern = `(.*?)\\[([${breakpointKeys.join('')}-]+)\\]`

module.exports = {
   breakpointKeys,
   responsiveStrFragmentRegexPattern
}
