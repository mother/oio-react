import React from 'react'
import PropTypes from 'prop-types'
import ZoomContext from './context'

const ZoomProvider = ({ children, zoom }) => (
   <ZoomContext.Provider value={{ zoom }}>
      {children}
   </ZoomContext.Provider>
)

ZoomProvider.propTypes = {
   children: PropTypes.node.isRequired,
   zoom: PropTypes.number.isRequired
}

export default ZoomProvider
