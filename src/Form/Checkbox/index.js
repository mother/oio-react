import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Text, View } from '../../../src'
import OIOContext from '../../OIOProvider/context'
import { OIOFormContext, formContextDefaults } from '..'
import checkboxIcon from './checkboxIcon.svg'

// ============================================================================
// Component
// ============================================================================

const Checkbox = ({
   appearance,
   highlightColor,
   id,
   label,
   ...props
}) => {
   const oioContext = useContext(OIOContext)
   const formContext = useContext(OIOFormContext)
   const formProps = {
      ...formContextDefaults,
      ...formContext
   }

   const inputAppearance = appearance || formProps.formElementAppearance
   const inputHighlightColor = highlightColor || oioContext.highlightColor

   const appearanceStyles = {
      outline: {
         borderColor: formProps.formElementBorderColor,
         borderStyle: 'solid',
         borderWidth: formProps.formElementBorderWidth
      },
      plain: {}
   }

   return (
      <View
         display="flex"
         alignItems="center"
         float="left"
         width="100%"
         margin="5px 0px">
         <input
            {...props}
            id={id}
            type="checkbox"
            css={{
               ...appearanceStyles[inputAppearance],
               flex: '0 0 auto',
               float: 'left',
               borderRadius: '50%',
               fontSize: '14px',
               width: '20px',
               height: '20px',
               transition: '100ms',
               zIndex: '2',
               backgroundColor: formProps.formElementBackgroundColor,
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
               padding="0 15px">
               <Text size="2" color={formProps.formElementTextColor}>
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
   id: PropTypes.string,
   label: PropTypes.string
}

Checkbox.defaultProps = {
   appearance: undefined,
   highlightColor: undefined,
   id: undefined,
   label: undefined
}

export default React.memo(Checkbox)
