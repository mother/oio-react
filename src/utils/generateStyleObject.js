// =======================================================
// Generators used as decorators that create covver common
// patterns across all OIO components
// Rating: 3
// Action Items:
// - generateStyleObject can be optmized, especially to ensure
// smallest footprint object created as possible and optimize performance
// too many loops right now
// =======================================================

import React from 'react'
import { breakpoints, getAttributeValueForCurrentBreakpoint } from './breakpoints'

const generateStyleObject = options => WrappedComponent => (props) => {
   // ============================================================================
   // Props
   // ============================================================================

   const OIOBreakpoints = ['a', 'b', 'c', 'd', 'e', 'f']
   const propsIncludingDefaults = {
      ...WrappedComponent.defaultProps,
      ...props
   }

   // Props that are not needed in any way for calculating the style
   const excludeProps = options.excludeProps || []
   const propsToCalculate = Object.keys(propsIncludingDefaults).filter(p => (
      !excludeProps.includes(p)
   ))

   // object to store all prop values by breakpoint
   const allPropsByBreakpoint = { a: {}, b: {}, c: {}, d: {}, e: {}, f: {} }
   // object to store actual style props. This object will be passed to
   // the WrappedComponent as generatedStyleObject
   const generatedStyleObject = {
      [breakpoints.a]: {},
      [breakpoints.b]: {},
      [breakpoints.c]: {},
      [breakpoints.d]: {},
      [breakpoints.e]: {},
      [breakpoints.f]: {}
   }

   // ============================================================================
   // Context
   // ============================================================================
   // Only context props that are specified are used
   // (so we don't loop through all the props)
   const contextProps = options.contextProps || {}
   // object to store all context values by breakpoint (such as OIO context)
   const contextPropsByBreakpoint = { a: {}, b: {}, c: {}, d: {}, e: {}, f: {} }

   Object.keys(contextProps).forEach((context) => {
      const contextObject = props[context]
      const contextObjectProps = contextProps[context]

      OIOBreakpoints.forEach((breakpoint) => {
         contextPropsByBreakpoint[breakpoint][context] = {}

         contextObjectProps.forEach((prop) => {
            const propValue = contextObject[prop]
            const getBreakpointValue = isResponsiveStringValue(propValue)

            contextPropsByBreakpoint[breakpoint][context][prop] = getBreakpointValue
               ? getAttributeValueForCurrentBreakpoint(breakpoint, propValue)
               : propValue
         })
      })
   })

   // ============================================================================
   // Style by Breakpoint
   // ============================================================================
   // Determine applicable prop values for each breakpoint
   OIOBreakpoints.forEach((breakpoint) => {
      // Sort attribute values by breakpoint to allPropsByBreakpoint object
      propsToCalculate.forEach((attribute) => {
         const attributeValue = propsIncludingDefaults[attribute]

         allPropsByBreakpoint[breakpoint][attribute] = isResponsiveStringValue(attributeValue)
            ? getAttributeValueForCurrentBreakpoint(breakpoint, attributeValue)
            : attributeValue
      })

      // For each breakpoint, calculate real ACTUAL css Style props
      // Calculation is based on args passed from WrappedComponent decorator
      const calculatedBreakpointProps = options.calculatedProps({
         ...allPropsByBreakpoint[breakpoint],
         ...contextPropsByBreakpoint[breakpoint]
      })

      generatedStyleObject[breakpoints[breakpoint]] = calculatedBreakpointProps
   })

   return (
      <WrappedComponent {...props} generatedStyleObject={generatedStyleObject} />
   )
}

// Is Value a OIO Responsive string ie: 100%[a-d] 50%[e-f]
function isResponsiveStringValue(value) {
   if (value && typeof value === 'string' && value.match(/(.+?)\[([abcdef,-]+)\]/ig)) {
      return true
   }
}

export default generateStyleObject
