import React from 'react'

const OIOContext = React.createContext()

const withOIOContext = WrappedComponent => props => (
   <OIOContext.Consumer>
      {context => (
         <WrappedComponent {...props} OIOContext={context} />
      )}
   </OIOContext.Consumer>
)

export { OIOContext as default, withOIOContext }
