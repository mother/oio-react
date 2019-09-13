import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Text, View } from '../../../src'
import OIOContext from '../../OIOProvider/context'
import { OIOFormContext } from '..'

// ============================================================================
// Component
// ============================================================================

const Radio = React.forwardRef(({
   appearance,
   highlightColor,
   id,
   label,
   ...props
}, ref) => {
   const oioContext = useContext(OIOContext)
   const formContext = useContext(OIOFormContext)

   const inputHighlightColor = highlightColor || oioContext.highlightColor
   const inputAppearance = appearance || formContext.elementAppearance

   const appearanceStyles = {
      outline: {
         borderColor: formContext.elementBorderColor,
         borderStyle: 'solid',
         borderWidth: formContext.elementBorderWidth
      },
      plain: {}
   }

   return (
      <View
         display="flex"
         alignItems="center"
         width="100%"
         margin="5px 0px">
         <input
            {...props}
            id={id}
            ref={ref}
            type="radio"
            css={{
               ...appearanceStyles[inputAppearance],
               backgroundColor: formContext.elementBackgroundColor,
               borderRadius: '50%',
               flex: '0 0 auto',
               float: 'left',
               fontSize: '14px',
               width: '20px',
               height: '20px',
               transition: '100ms',
               zIndex: '2',
               '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  borderColor: '#aaa'
               },
               '&:checked': {
                  backgroundColor: '#fff',
                  border: `7px solid ${inputHighlightColor}`
               }
            }}
         />
         {label && (
            <View
               flex="1 1 auto"
               float="left"
               padding="0 15px">
               <Text size="2" color={formContext.elementTextColor}>
                  {label}
               </Text>
            </View>
         )}
      </View>
   )
})

// ============================================================================
// PropTypes + Export
// ============================================================================

Radio.propTypes = {
   appearance: PropTypes.oneOf(['outline', 'plain']),
   highlightColor: PropTypes.string,
   id: PropTypes.string,
   label: PropTypes.string
}

Radio.defaultProps = {
   appearance: undefined,
   highlightColor: undefined,
   id: undefined,
   label: undefined
}

export default React.memo(Radio)
