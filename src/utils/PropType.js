import PropTypes from 'prop-types'

const OIOResponsiveObjectPropType = PropTypes.shape({
   a: PropTypes.string,
   b: PropTypes.string,
   c: PropTypes.string,
   d: PropTypes.string,
   e: PropTypes.string,
   f: PropTypes.string,
   breakpointsWereSet: PropTypes.bool.isRequired,
   extra: PropTypes.string,
   parsePath: PropTypes.arrayOf(PropTypes.string)
})

export default OIOResponsiveObjectPropType
