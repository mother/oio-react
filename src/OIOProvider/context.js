import React from 'react'

const OIOContext = React.createContext()

const withOIOContext = WrappedComponent => React.forwardRef((props, ref) => (
   <OIOContext.Consumer>
      {context => (
         <WrappedComponent {...props} OIOContext={context} ref={ref} />
      )}
   </OIOContext.Consumer>
))

export { OIOContext as default, withOIOContext }
