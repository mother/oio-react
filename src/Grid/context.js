import React from 'react'

const GridContext = React.createContext()

const withGridContext = WrappedComponent => props => (
   <GridContext.Consumer>
      {context => (
         <WrappedComponent {...props} gridContext={context} />
      )}
   </GridContext.Consumer>
)

export { GridContext, withGridContext }
