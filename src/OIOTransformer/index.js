import PropTypes from 'prop-types'
import useWindowResizeSensor from '../../src/utils/useWindowResizeSensor'

// =======================================================
// Component
// =======================================================

const OIOTransformer = ({ render, ...commonProps }) => {
   const { currentBreakpoint } = useWindowResizeSensor()
   const rendered = render(commonProps, currentBreakpoint)
   const currentBreakpointRange = Object.keys(rendered).find(breakpointKeys =>
      breakpointKeys.includes(currentBreakpoint))

   const result = rendered[currentBreakpointRange]
   return result
}

OIOTransformer.propTypes = {
   render: PropTypes.object.isRequired
}

export default OIOTransformer
