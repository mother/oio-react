import React from 'react'

const GridContext = React.createContext()

const withGridContext = WrappedComponent => props => (
   <GridContext.Consumer>
      {theme => (
         <WrappedComponent {...props} gridContext={theme} />
      )}
   </GridContext.Consumer>
)

export { GridContext, withGridContext }
