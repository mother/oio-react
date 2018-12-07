import React from 'react'

const OIOContext = React.createContext()

const withOIOContext = WrappedComponent => props => (
   <OIOContext.Consumer>
      {theme => (
         <WrappedComponent {...props} OIOContext={theme} />
      )}
   </OIOContext.Consumer>
)

export { OIOContext, withOIOContext }
