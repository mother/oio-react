import React, { forwardRef } from 'react'
import { breakpointKeys } from '../../config/constants'

const withDynamicResponsiveProps = iteratorFn => Component => forwardRef((props, ref) => {
   const newResponsiveProps = breakpointKeys.reduce((result, breakpointKey) => {
      const newPropsAtBreakpoint = iteratorFn(props, breakpointKey)
      Object.keys(newPropsAtBreakpoint).forEach((newPropKey) => {
         if (typeof result[newPropKey] !== 'object') {
            result[newPropKey] = { breakpointsWereSet: true }
         }

         const value = newPropsAtBreakpoint[newPropKey]
         result[newPropKey][breakpointKey] = typeof value !== 'undefined' && value !== null
            ? String(value)
            : value
      })

      return result
   }, {})

   return (
      <Component {...props} {...newResponsiveProps} ref={ref} />
   )
})

export default withDynamicResponsiveProps
