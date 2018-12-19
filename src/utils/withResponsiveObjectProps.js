import React, { forwardRef } from 'react'
import generateResponsiveObject from './generateResponsiveObject'

const withResponsiveObjectProps = responsivePropKeys => Component => forwardRef((props, ref) => {
   const responsiveProps = {}
   responsivePropKeys.forEach((responsivePropKey) => {
      if (typeof props[responsivePropKey] !== 'undefined' && props[responsivePropKey] !== null) {
         const isResponsiveObject = typeof props[responsivePropKey] === 'object' &&
            props[responsivePropKey].breakpointsWereSet

         responsiveProps[responsivePropKey] = isResponsiveObject
            ? props[responsivePropKey]
            : generateResponsiveObject(props[responsivePropKey])
      }
   })

   return (
      <Component {...props} {...responsiveProps} ref={ref} />
   )
})

export default withResponsiveObjectProps
