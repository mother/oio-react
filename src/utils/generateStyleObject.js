// =======================================================
// Generators used as decorators that create covver common
// patterns across all OIO components
// Rating: 3
// Action Items:
// - generateStyleObject can be optmized, especially to ensure
// smallest footprint object created as possible
// =======================================================

import React from 'react'
import { breakpoints, getAttributeValueForCurrentBreakpoint } from './breakpoints'

const generateStyleObject = calculateStyleProps => WrappedComponent => (props) => {
   const propsIncludingDefaults = {
      ...WrappedComponent.defaultProps,
      ...props
   }

   // object to store all prop values by breakpoint regardless of
   // css style applicability
   const breakpointProps = { a: {}, b: {}, c: {}, d: {}, e: {}, f: {} }

   // object to store actual style props. This object will be passed to
   // the WrappedComponent as calculatedStyleProps
   const styleObj = {
      [breakpoints.a]: {},
      [breakpoints.b]: {},
      [breakpoints.c]: {},
      [breakpoints.d]: {},
      [breakpoints.e]: {},
      [breakpoints.f]: {}
   }

   // Determine applicable prop values for each breakpoint
   Object.keys(breakpoints).forEach((breakpoint) => {
      // Sort attribute values by breakpoint to breakpointProps object
      // regardless of prop keys (this means we will assign even none-css related
      // props like children - this does not make an opinion about how to use
      // any of the corresponding component's values)
      Object.keys(propsIncludingDefaults).forEach((attribute) => {
         const attributeValue = propsIncludingDefaults[attribute]

         // If attribute value exists and is a string,
         // check for [a-f] attribute values specific to a breakpoint
         breakpointProps[breakpoint][attribute] = attributeValue && typeof attributeValue === 'string'
            ? getAttributeValueForCurrentBreakpoint(breakpoint, attributeValue)
            : attributeValue
      })

      // For each breakpoint, calculate real ACTUAL css Style props
      // Calculation is based on args passed from WrappedComponent
      styleObj[breakpoints[breakpoint]] = calculateStyleProps(breakpointProps[breakpoint])

      // Remove any redundant fields with values of null or undefined or auto
      Object.keys(styleObj[breakpoints[breakpoint]]).forEach((a) => {
         const attribute = styleObj[breakpoints[breakpoint]][a]
         if (!attribute || attribute === 'auto') {
            delete styleObj[breakpoints[breakpoint]][attribute]
         }
      })
   })

   return (
      <WrappedComponent {...props} generatedStyleObject={styleObj} />
   )
}

export default generateStyleObject
