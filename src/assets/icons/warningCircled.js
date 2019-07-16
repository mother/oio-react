import PropTypes from 'prop-types'
import React from 'react'

const WarningIcon = ({
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
            d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12s12-5.383,12-12S18.617,0,12,0z M13.645,5L13,14h-2l-0.608-9 H13.645z M12,20c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2c1.105,0,2,0.895,2,2C14,19.105,13.105,20,12,20z"
         />
      </g>
   </svg>
)

WarningIcon.propTypes = {
   className: PropTypes.string,
   color: PropTypes.string,
   height: PropTypes.string,
   width: PropTypes.string
}

WarningIcon.defaultProps = {
   className: undefined,
   color: '#444',
   height: '24px',
   width: '24px'
}

export default React.memo(WarningIcon)
