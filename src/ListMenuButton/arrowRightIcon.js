import PropTypes from 'prop-types'
import React from 'react'

const ArrowRightIcon = ({
   color,
   width,
   height,
   strokeWidth
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <g fill={color}>
         <polyline
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="square"
            strokeMiterlimit="10"
            points="7,2 17,12 7,22 "
            transform="translate(0, 0)"
            strokeLinejoin="miter"
         />
      </g>
   </svg>
)

ArrowRightIcon.propTypes = {
   color: PropTypes.string,
   height: PropTypes.string,
   strokeWidth: PropTypes.string,
   width: PropTypes.string
}

ArrowRightIcon.defaultProps = {
   color: '#444',
   height: '24px',
   strokeWidth: '1',
   width: '24px'
}

export default React.memo(ArrowRightIcon)
