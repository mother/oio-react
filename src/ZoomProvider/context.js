import React from 'react'

const ZoomContext = React.createContext({
   zoom: 1
})

const withZoomContext = WrappedComponent => React.forwardRef((props, ref) => (
   <ZoomContext.Consumer>
      {context => (
         <WrappedComponent {...props} zoomContext={context} ref={ref} />
      )}
   </ZoomContext.Consumer>
))

export { ZoomContext as default, withZoomContext }
