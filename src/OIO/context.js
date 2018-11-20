import React from 'react'

const OIOContext = React.createContext()

// TODO: CLEAN THIS UP
const withOIOContext = WrappedComponent => props => (
   <OIOContext.Consumer>
      {({ emotion, ...theme }) => (
         <WrappedComponent {...props} emotion={emotion} OIOContext={theme} />
      )}
   </OIOContext.Consumer>
)

export { OIOContext, withOIOContext }
