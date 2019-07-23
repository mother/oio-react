import React from 'react'
import PropTypes from 'prop-types'

const CheckmarkCircledIcon = ({
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
            d="M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0ZM10,17.414,4.586,12,6,10.586l4,4,8-8L19.414,8Z"
            fill={color}
         />
      </g>
   </svg>
)

CheckmarkCircledIcon.propTypes = {
   className: PropTypes.string,
   color: PropTypes.string,
   height: PropTypes.string,
   width: PropTypes.string
}

CheckmarkCircledIcon.defaultProps = {
   className: undefined,
   color: '#444',
   height: '24px',
   width: '24px'
}

export default React.memo(CheckmarkCircledIcon)
