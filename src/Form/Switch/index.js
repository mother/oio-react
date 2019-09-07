import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { View } from '../../../src'
import OIOContext from '../../OIOProvider/context'

// ============================================================================
// Component
// ============================================================================

const Switch = React.forwardRef(({ highlightColor, ...props }, ref) => {
   const oioContext = useContext(OIOContext)
   const inputHighlightColor = highlightColor || oioContext.highlightColor

   return (
      <View
         display="flex"
         alignItems="center"
         float="left"
         width="54px"
         height="30px"
         borderRadius="15px"
         marginBottom="6px">
         <input
            {...props}
            ref={ref}
            type="checkbox"
            css={{
               position: 'relative',
               flex: '0 0 auto',
               float: 'left',
               borderRadius: '15px',
               fontSize: '14px',
               width: '54px',
               height: '30px',
               transition: '300ms',
               backgroundColor: '#ddd',
               '&:checked + span': {
                  marginLeft: '24px'
               },
               '&:checked': {
                  backgroundColor: inputHighlightColor
               }
            }}
         />
         <span
            css={{
               position: 'absolute',
               top: '3px',
               left: '3px',
               height: '24px',
               width: '24px',
               borderRadius: '50%',
               background: 'white',
               boxShadow: '2px 2px 3px rgba(0,0,0,0.1)',
               transition: '200ms',
               pointerEvents: 'none'
            }}
         />
      </View>
   )
})

// ============================================================================
// PropTypes + Export
// ============================================================================

Switch.propTypes = {
   highlightColor: PropTypes.string
}

Switch.defaultProps = {
   highlightColor: undefined
}

export default React.memo(Switch)
