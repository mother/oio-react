import React, { forwardRef } from 'react'
import { breakpointKeys } from '../../config/constants'

const withDynamicResponsiveProps = iteratorFn => Component => forwardRef((props, ref) => {
   const newResponsiveProps = breakpointKeys.reduce((result, breakpointKey) => {
      const newPropsAtBreakpoint = iteratorFn(props, breakpointKey)
      Object.keys(newPropsAtBreakpoint).forEach((newPropKey) => {
         if (typeof result[newPropKey] !== 'object') {
            result[newPropKey] = { breakpointsWereSet: true }
         }

         result[newPropKey][breakpointKey] = String(newPropsAtBreakpoint[newPropKey])
      })

      return result
   }, {})

   return (
      <Component {...props} {...newResponsiveProps} ref={ref} />
   )
})

export default withDynamicResponsiveProps
