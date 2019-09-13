import PropTypes from 'prop-types'
import useWindowResizeSensor from '../../src/utils/useWindowResizeSensor'

// =======================================================
// Component
// =======================================================

const OIOTransformer = ({ render, ...commonProps }) => {
   const { currentBreakpoint } = useWindowResizeSensor()
   const hydratedRenderObject = render(commonProps, currentBreakpoint)

   // Identify which object key be used
   const currentBreakpointRange = Object.keys(hydratedRenderObject)
      .find(breakpointKeys => breakpointKeys.includes(currentBreakpoint))

   // Render appropriate element
   return hydratedRenderObject[currentBreakpointRange]
}

OIOTransformer.propTypes = {
   render: PropTypes.object.isRequired
}

export default OIOTransformer
