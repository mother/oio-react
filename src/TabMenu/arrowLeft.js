import PropTypes from 'prop-types'
import React from 'react'

const ArrowLeftIcon = ({
   color,
   width,
   height,
   strokeWidth
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <g
         strokeLinecap="square"
         strokeLinejoin="miter"
         strokeWidth={strokeWidth}
         fill={color}
         stroke={color}>
         <polyline
            fill="none"
            stroke={color}
            strokeMiterlimit="10"
            points="17,2 7,12 17,22 "
            transform="translate(0, 0)"
         />
      </g>
   </svg>
)

ArrowLeftIcon.propTypes = {
   color: PropTypes.string,
   height: PropTypes.string,
   strokeWidth: PropTypes.string,
   width: PropTypes.string
}

ArrowLeftIcon.defaultProps = {
   color: '#444',
   height: '24px',
   strokeWidth: '1',
   width: '24px'
}

export default React.memo(ArrowLeftIcon)
