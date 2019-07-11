import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import OIOContext from '../../OIOProvider/context'
import { Text, View } from '../../../src'
import checkboxIcon from './checkboxIcon.svg'

// ============================================================================
// Component
// ============================================================================

const Checkbox = ({
   appearance,
   highlightColor,
   label,
   ...props
}) => {
   const oioContext = useContext(OIOContext)
   const inputAppearance = appearance || oioContext.formElementAppearanceStyle
   const inputHighlightColor = highlightColor || oioContext.highlightColor

   const appearanceStyleOptions = {
      outline: {
         borderColor: oioContext.formElementBorderColor,
         borderStyle: 'solid',
         borderWidth: oioContext.formElementBorderWidth
      },
      plain: {}
   }

   return (
      <View
         display="flex"
         alignItems="center"
         float="left"
         width="100%"
         margin="6px 0px">
         <input
            {...props}
            type="checkbox"
            css={{
               ...appearanceStyleOptions[inputAppearance],
               flex: '0 0 auto',
               float: 'left',
               borderRadius: '50%',
               fontSize: '14px',
               width: '20px',
               height: '20px',
               transition: '100ms',
               zIndex: '2',
               backgroundColor: oioContext.formElementBackgroundColor,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center center',
               '&:hover': {
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  borderColor: '#aaa'
               },
               '&:checked': {
                  backgroundColor: `${inputHighlightColor}`,
                  backgroundImage: `url('data:image/svg+xml;utf8,${checkboxIcon}')`,
                  backgroundSize: '50%',
                  borderColor: inputHighlightColor
               }
            }}
         />
         {label && (
            <View
               flex="1 1 auto"
               float="left"
               padding="0 18px">
               <Text size="2.5" color="#555">
                  {label}
               </Text>
            </View>
         )}
      </View>
   )
}

// ============================================================================
// PropTypes + Export
// ============================================================================

Checkbox.propTypes = {
   appearance: PropTypes.oneOf(['outline', 'plain']),
   highlightColor: PropTypes.string,
   label: PropTypes.string
}

Checkbox.defaultProps = {
   appearance: undefined,
   highlightColor: undefined,
   label: undefined
}

export default React.memo(Checkbox)
