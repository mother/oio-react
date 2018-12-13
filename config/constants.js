const breakpointKeys = ['a', 'b', 'c', 'd', 'e', 'f']

module.exports = {
   breakpointKeys,
   responsiveStrFragmentRegexPattern: `(.*?)\\[([${breakpointKeys.join('')}-]+)\\]`
}
