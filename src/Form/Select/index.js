import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Label, View } from '../../../src'
import OIOContext from '../../OIOProvider/context'
import { OIOFormContext } from '..'
import selectArrowIcon from './selectArrowIcon.svg'

// ============================================================================
// Size Specific Styles
// ============================================================================

const sizeSpecificStyles = {
   inherit: {
      fontSize: 'inherit',
      backgroundPosition: 'calc(100% - 9px) 50%',
      backgroundSize: '9px 9px',
      padding: '0 9px'
   },
   xl: {
      height: '54px',
      fontSize: '17px',
      backgroundPosition: 'calc(100% - 18px) 50%',
      backgroundSize: '12px 12px',
      padding: '0 18px'
   },
   lg: {
      height: '42px',
      fontSize: '16px',
      backgroundPosition: 'calc(100% - 12px) 50%',
      backgroundSize: '9px 9px',
      padding: '0 12px'
   },
   md: {
      height: '36px',
      fontSize: '14px',
      backgroundPosition: 'calc(100% - 12px) 50%',
      backgroundSize: '9px 9px',
      padding: '0 9px'
   },
   sm: {
      height: '30px',
      fontSize: '13px',
      backgroundPosition: 'calc(100% - 9px) 50%',
      backgroundSize: '9px 9px',
      padding: '0 6px'
   },
   xs: {
      height: '24px',
      fontSize: '12px',
      backgroundPosition: 'calc(100% - 9px) 50%',
      backgroundSize: '9px 9px',
      padding: '0 6px'
   }
}

// ============================================================================
// Component
// ============================================================================

const Select = React.forwardRef(({
   appearance,
   id,
   label,
   size,
   ...props
}, ref) => {
   const oioContext = useContext(OIOContext)
   const formContext = useContext(OIOFormContext)

   const inputAppearance = appearance || formContext.elementAppearance
   const appearanceStyles = {
      outline: {
         borderColor: formContext.elementBorderColor,
         borderStyle: 'solid',
         borderWidth: formContext.elementBorderWidth,
         '&:focus': {
            borderColor: formContext.elementFocusBorderColor,
            backgroundColor: formContext.elementFocusBackgroundColor
         }
      },
      plain: {
         border: '0px'
      }
   }

   return (
      <View width="100%">
         {label && <Label htmlFor={id}>{label}</Label>}
         <select
            {...props}
            id={id}
            ref={ref}
            css={{
               ...sizeSpecificStyles[size],
               ...appearanceStyles[inputAppearance],
               backgroundColor: formContext.elementBackgroundColor,
               borderRadius: formContext.elementBorderRadius,
               backgroundRepeat: 'no-repeat',
               backgroundImage: `url('data:image/svg+xml;utf8,${selectArrowIcon}')`,
               color: formContext.elementTextColor,
               outline: 'none',
               fontFamily: oioContext.fontFamily,
               width: '100%',
               transition: '200ms',
               WebkitAppearance: 'none'
            }}
         />
      </View>
   )
})

// ============================================================================
// PropTypes + Export
// ============================================================================

Select.propTypes = {
   appearance: PropTypes.oneOf(['outline', 'plain']),
   id: PropTypes.string,
   label: PropTypes.string,
   size: PropTypes.string
}

Select.defaultProps = {
   appearance: undefined,
   id: undefined,
   label: undefined,
   size: 'sm'
}

export default React.memo(Select)
