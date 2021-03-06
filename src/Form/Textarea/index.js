import React, { useContext } from 'react'
import PropTypes from 'prop-types'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import { Label, View } from '../../../src'
import OIOContext from '../../OIOProvider/context'
import { OIOFormContext } from '..'

// ============================================================================
// Size Specific Styles
// ============================================================================

const sizeStyles = {
   inherit: {
      fontSize: 'inherit'
   },
   lg: {
      fontSize: '17px'
   },
   md: {
      fontSize: '16px'
   },
   sm: {
      fontSize: '14px'
   },
   xs: {
      fontSize: '14px'
   }
}

// ============================================================================
// Component
// ============================================================================

const Textarea = React.forwardRef(({
   appearance,
   id,
   label,
   required,
   size,
   ...props
}, ref) => {
   const oioContext = useContext(OIOContext)
   const formContext = useContext(OIOFormContext)

   const textareaAppearance = appearance || formContext.elementAppearance
   const appearanceStyles = {
      outline: {
         border: '2px solid #ddd',
         padding: '9px',
         '&:focus': {
            borderColor: '#888',
            backgroundColor: 'rgba(0,0,0,0.01)'
         }
      },
      plain: {
         padding: '9px'
      }
   }

   // TODO: Bring this back later
   // const resizeTextarea = useCallback(() => {
   //    const textarea = textareaRef.current
   //    textarea.style.height = 'auto'
   //    textarea.style.height = `${textarea.scrollHeight}px`
   // }, [textareaRef])
   //
   // const handleChange = useCallback((e) => {
   //    if (autoresize) {
   //       resizeTextarea()
   //    }
   //
   //    if (onChange) {
   //       onChange(e)
   //    }
   // }, [autoresize, onChange])
   //
   // useEffect(() => resizeTextarea(), [autoresize, textareaRef])

   return (
      <View width="100%">
         {label && <Label htmlFor={id} required={required}>{label}</Label>}
         <textarea
            {...props}
            id={id}
            ref={ref}
            required={required}
            css={{
               ...appearanceStyles[textareaAppearance],
               ...sizeStyles[size],
               backgroundColor: formContext.elementBackgroundColor,
               borderRadius: formContext.elementBorderRadius,
               color: formContext.elementTextColor,
               fontFamily: oioContext.fontFamily,
               fontWeight: 'inherit',
               letterSpacing: 'inherit',
               width: '100%',
               transition: '200ms',
               resize: 'none',
               '&:focus': {
                  borderColor: formContext.elementFocusBorderColor,
                  backgroundColor: formContext.elementFocusBackgroundColor
               }
            }}
         />
      </View>
   )
})

// ============================================================================
// PropTypes + Export
// ============================================================================

Textarea.propTypes = {
   appearance: PropTypes.string,
   id: PropTypes.string,
   label: PropTypes.string,
   required: PropTypes.bool,
   size: PropTypes.string
}

Textarea.defaultProps = {
   appearance: undefined,
   id: undefined,
   label: undefined,
   required: false,
   size: 'sm'
}

export default React.memo(Textarea)
