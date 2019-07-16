import PropTypes from 'prop-types'
import React from 'react'

const InfoIcon = ({
   className,
   color,
   width,
   height
}) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24">
      <g
         className={className}
         fill={color}>
         <path
            fill={color}
            d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M14.658,18.284 c-0.661,0.26-2.952,1.354-4.272,0.191c-0.394-0.346-0.59-0.785-0.59-1.318c0-0.998,0.328-1.868,0.919-3.957 c0.104-0.395,0.231-0.907,0.231-1.313c0-0.701-0.266-0.887-0.987-0.887c-0.352,0-0.742,0.125-1.095,0.257l0.195-0.799 c0.787-0.32,1.775-0.71,2.621-0.71c1.269,0,2.203,0.633,2.203,1.837c0,0.347-0.06,0.955-0.186,1.375l-0.73,2.582 c-0.151,0.522-0.424,1.673-0.001,2.014c0.416,0.337,1.401,0.158,1.887-0.071L14.658,18.284z M13.452,8c-0.828,0-1.5-0.672-1.5-1.5 s0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5S14.28,8,13.452,8z"
         />
      </g>
   </svg>
)

InfoIcon.propTypes = {
   className: PropTypes.string,
   color: PropTypes.string,
   height: PropTypes.string,
   width: PropTypes.string
}

InfoIcon.defaultProps = {
   className: undefined,
   color: '#444',
   height: '24px',
   width: '24px'
}

export default React.memo(InfoIcon)
