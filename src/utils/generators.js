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

   const styleObj = {
      [breakpoints.a]: {},
      [breakpoints.b]: {},
      [breakpoints.c]: {},
      [breakpoints.d]: {},
      [breakpoints.e]: {},
      [breakpoints.f]: {}
   }

   // object to store all prop values by breakpoint regardless of
   // css style applicability
   const breakpointProps = { a: {}, b: {}, c: {}, d: {}, e: {}, f: {} }

   Object.keys(breakpoints).forEach((name) => {
      // Sort attribute values by breakpoint, regardless of prop keys
      Object.keys(propsIncludingDefaults).forEach((attribute) => {
         const attributeValue = propsIncludingDefaults[attribute]
         breakpointProps[name][attribute] = attributeValue && typeof attributeValue === 'string'
            ? getAttributeValueForCurrentBreakpoint(name, attributeValue)
            : attributeValue
      })

      // For each breakpoint, calculate real ACTUAL css Style props
      styleObj[breakpoints[name]] = calculateStyleProps(breakpointProps[name])

      // Remove any redundant fields that are null or undefined
      Object.keys(styleObj[breakpoints[name]]).forEach((attribute) => {
         if (!styleObj[breakpoints[name]][attribute]) {
            delete styleObj[breakpoints[name]][attribute]
         }
      })
   })

   return (
      <WrappedComponent {...props} calculatedStyleProps={styleObj} />
   )
}

export default generateStyleObject
