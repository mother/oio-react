// =======================================================
// Breakpoint Keys
// =======================================================

const breakpointKeys = ['a', 'b', 'c', 'd', 'e', 'f']

// =======================================================
// Breakpoints with Values
// =======================================================

const breakpoints = {
   a: 475,
   b: 675,
   c: 1000,
   d: 1350,
   e: 1700,
   f: 3000
}

// =======================================================
// Breakpoints in Media Query Format
// =======================================================

const breakpointMediaQueries = {
   a: `@media (min-width: 0px) and (max-width: ${breakpoints.a}px)`,
   b: `@media (min-width: ${breakpoints.a}px) and (max-width: ${breakpoints.b}px)`,
   c: `@media (min-width: ${breakpoints.b}px) and (max-width: ${breakpoints.c}px)`,
   d: `@media (min-width: ${breakpoints.c}px) and (max-width: ${breakpoints.d}px)`,
   e: `@media (min-width: ${breakpoints.d}px) and (max-width: ${breakpoints.e}px)`,
   f: `@media (min-width: ${breakpoints.e}px)`
}

// =======================================================
// Responsive String Regex Pattern
// =======================================================

const responsiveStrFragmentRegexPattern = `(.*?)\\[([${breakpointKeys.join('')}-]+)\\]`

module.exports = {
   breakpoints,
   breakpointKeys,
   breakpointMediaQueries,
   responsiveStrFragmentRegexPattern
}
