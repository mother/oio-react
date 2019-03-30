import React, { forwardRef } from 'react'

const forwardRefToWrappedComponent = WrappedComponent => (
   forwardRef((props, ref) => <WrappedComponent forwardedRef={ref} {...props} />)
)

export default forwardRefToWrappedComponent
