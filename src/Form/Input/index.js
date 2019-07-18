import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Label, View } from '../../../src'
import { OIOFormContext, formContextDefaults } from '..'

// ============================================================================
// Size Specific Styles
// ============================================================================

const sizeSpecificStyles = {
   inherit: {
      fontSize: 'inherit',
      padding: '0 9px'
   },
   xl: {
      height: '54px',
      fontSize: '17px',
      padding: '0 18px'
   },
   lg: {
      height: '42px',
      fontSize: '16px',
      padding: '0 12px'
   },
   md: {
      height: '36px',
      fontSize: '14px',
      padding: '0 9px'
   },
   sm: {
      height: '30px',
      fontSize: '13px',
      padding: '0 6px'
   },
   xs: {
      height: '24px',
      fontSize: '12px',
      padding: '0 6px'
   }
}

// ============================================================================
// Component
// ============================================================================

const Input = ({
   appearance,
   id,
   label,
   required,
   size,
   ...props
}) => {
   const formContext = useContext(OIOFormContext)
   const formProps = {
      ...formContextDefaults,
      ...formContext
   }

   const inputAppearance = appearance || formProps.formElementAppearance
   const borderRadius = formProps.formElementBorderRadius

   const appearanceStyles = {
      outline: {
         borderRadius,
         borderColor: formProps.formElementBorderColor,
         borderStyle: 'solid',
         borderWidth: formProps.formElementBorderWidth
      },
      plain: {
         borderRadius
      },
      underline: {
         borderBottomWidth: formProps.formElementBorderWidth,
         borderColor: formProps.formElementBorderColor,
         borderStyle: 'solid',
         padding: '0px'
      }
   }

   return (
      <View width="100%">
         {label && <Label htmlFor={id} required={required}>{label}</Label>}
         <input
            {...props}
            id={id}
            required={required}
            css={{
               ...sizeSpecificStyles[size],
               ...appearanceStyles[inputAppearance],
               backgroundColor: formProps.formElementBackgroundColor,
               color: formProps.formElementTextColor,
               fontFamily: formProps.fontFamily,
               fontWeight: 'inherit',
               letterSpacing: 'inherit',
               width: '100%',
               transition: '200ms',
               '&:focus': {
                  borderColor: formProps.formElementFocusBorderColor,
                  backgroundColor: formProps.formElementFocusBackgroundColor
               }
            }}
         />
      </View>
   )
}

// ============================================================================
// PropTypes + Export
// ============================================================================

Input.propTypes = {
   appearance: PropTypes.oneOf(['outline', 'plain', 'underline']),
   id: PropTypes.string,
   label: PropTypes.string,
   required: PropTypes.bool,
   size: PropTypes.string
}

Input.defaultProps = {
   appearance: undefined,
   id: undefined,
   label: undefined,
   required: false,
   size: 'sm'
}

export default React.memo(Input)
