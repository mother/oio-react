import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import OIOContext from '../../OIOProvider/context'
import { Label, View } from '../../../src'

// ============================================================================
// Size Specific Styles
// ============================================================================

const sizeSpecificStyles = {
   inherit: {
      fontSize: 'inherit'
   },
   lg: {
      height: '54px',
      fontSize: '17px'
   },
   md: {
      height: '42px',
      fontSize: '16px'
   },
   sm: {
      height: '36px',
      fontSize: '14px'
   },
   xs: {
      height: '30px',
      fontSize: '14px'
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
   const oioContext = useContext(OIOContext)
   const inputAppearance = appearance || oioContext.formElementAppearanceStyle
   const borderRadius = oioContext.formElementBorderRadius

   const appearanceStyleOptions = {
      outline: {
         borderRadius,
         borderColor: oioContext.formElementBorderColor,
         borderStyle: 'solid',
         borderWidth: oioContext.formElementBorderWidth,
         padding: '0 9px'
      },
      plain: {
         borderRadius,
         padding: '0 9px'
      },
      underline: {
         borderBottomWidth: oioContext.formElementBorderWidth,
         borderColor: oioContext.formElementBorderColor,
         borderStyle: 'solid'
      }
   }

   return (
      <View float="left" width="100%">
         {label && <Label htmlFor={id} required={required}>{label}</Label>}
         <input
            {...props}
            id={id}
            required={required}
            css={{
               ...sizeSpecificStyles[size],
               ...appearanceStyleOptions[inputAppearance],
               backgroundColor: oioContext.formElementBackgroundColor,
               fontFamily: 'inherit',
               fontWeight: 'inherit',
               letterSpacing: 'inherit',
               float: 'left',
               width: '100%',
               transition: '200ms',
               '&:focus': {
                  borderColor: oioContext.formElementFocusBorderColor,
                  backgroundColor: oioContext.formElementFocusBackgroundColor
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
