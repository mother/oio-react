import React from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { View } from '../../../src'

// ============================================================================
// Component
// ============================================================================

const Switch = ({ highlightColor, ...props }) => (
   <View
      display="flex"
      alignItems="center"
      float="left"
      width="54px"
      height="30px"
      borderRadius="15px"
      marginTop="3px"
      marginBottom="6px">
      <input
         {...props}
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
               backgroundColor: highlightColor
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
            boxShadow: '2px 2px 6px rgba(0,0,0,0.2)',
            transition: '200ms',
            pointerEvents: 'none'
         }}
      />
   </View>
)

// ============================================================================
// PropTypes + Export
// ============================================================================

Switch.propTypes = {
   highlightColor: PropTypes.string
}

Switch.defaultProps = {
   highlightColor: '#0087de'
}

export default React.memo(Switch)
