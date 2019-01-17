import PropTypes from 'prop-types'
import { breakpointKeys } from '../../config/constants'

const breakpointPropTypes = {}
breakpointKeys.forEach((key) => {
   breakpointPropTypes[key] = PropTypes.string
})

const OIOResponsiveObjectPropType = PropTypes.shape({
   ...breakpointPropTypes,
   breakpointsWereSet: PropTypes.bool.isRequired,
   extra: PropTypes.string,
   parsePath: PropTypes.arrayOf(PropTypes.string)
})

export default OIOResponsiveObjectPropType
