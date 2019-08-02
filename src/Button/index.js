import React from 'react'
/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'
import r from '../../macro'
import { withOIOContext } from '../OIOProvider/context'
import applyMultiplier from '../utils/applyMultiplier'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'
import { withZoomContext } from '../ZoomProvider/context'
import Spinner from '../Spinner'
import Text from '../Text'
import View from '../View'

// ============================================================================
// Button Constants and Defaults
// ============================================================================

const buttonStyleDefaults = {
   cursor: 'pointer',
   display: 'inline-block',
   outline: 'none',
   position: 'relative',
   transition: '200ms'
}

const buttonSizeDefaults = {
   xl: {
      height: '54px',
      textSize: '3'
   },
   lg: {
      height: '42px',
      textSize: '1.5'
   },
   md: {
      height: '36px',
      textSize: '0.9'
   },
   sm: {
      height: '30px',
      textSize: '0.9'
   },
   xs: {
      height: '24px',
      textSize: '0.8'
   }
}

const pulsingAnimation = keyframes`
   0% { opacity: 0.5; }
   50% { opacity: 1; }
   100% { opacity: 0.5; }
`

// ============================================================================
// Decorators
// ============================================================================

@withOIOContext
@withZoomContext
@withResponsiveObjectProps([
   'borderRadius',
   'color',
   'fontFamily',
   'padding',
   'size',
   'sizeMultiplier',
   'textColor',
   'textSize',
   'textTransform',
   'textWeight',
   'width'
])

@withDynamicResponsiveProps((props, breakpoint) => {
   const {
      OIOContext,
      outline,
      rounded,
      zoomContext
   } = props

   // Zoom Context
   const { zoom } = zoomContext

   // Responsive Props
   const borderRadius = applyMultiplier(props.borderRadius?.[breakpoint], zoom)
   const color = props.color?.[breakpoint]
   const fontFamily = props.fontFamily?.[breakpoint]
   const padding = applyMultiplier(props.padding?.[breakpoint], zoom)
   const size = props.size?.[breakpoint]

   // If user passes invalid button 'size'
   const sizeOptions = Object.keys(buttonSizeDefaults)
   if (!sizeOptions.includes(size)) {
      throw new Error(`OIO Button: Invalid size prop provided. Valid values include: ${sizeOptions.join(', ')}`)
   }

   const height = applyMultiplier(buttonSizeDefaults[size].height, zoom)
   const width = applyMultiplier(props.width[breakpoint], zoom)

   const textColor = props.textColor?.[breakpoint]
   const textSize = props.textSize?.[breakpoint]
   const textTransform = props.textTransform?.[breakpoint]
   const textWeight = props.textWeight?.[breakpoint]

   const primaryButtonColor = color || OIOContext.highlightColor
   const defaultButtonPadding = width === 'auto' ? `0px ${height}` : '0px'

   const buttonStyle = {
      borderRadius,
      fontFamily,
      height,
      textColor,
      textTransform,
      textWeight,
      width,
      backgroundColor: primaryButtonColor,
      borderColor: 'none',
      borderStyle: 'none',
      borderWidth: 'none',
      textSize: textSize || buttonSizeDefaults[size].textSize,
      hoverBackgroundColor: tinycolor(primaryButtonColor).lighten(7).toString(),
      hoverBorder: '',
      minWidth: height,
      padding: padding ? `0px ${padding}` : defaultButtonPadding
   }

   if (rounded) {
      buttonStyle.borderRadius = `${parseInt(height, 10) / 2}px`
   }

   if (outline) {
      buttonStyle.borderWidth = applyMultiplier('2px', zoom)
      buttonStyle.borderStyle = 'solid'
      buttonStyle.borderColor = tinycolor(primaryButtonColor).setAlpha(0.5).toString()
      buttonStyle.backgroundColor = 'transparent'
      buttonStyle.hoverBackgroundColor = 'transparent'
      buttonStyle.hoverBorderColor = tinycolor(primaryButtonColor).setAlpha(0.8).toString()
      buttonStyle.textColor = primaryButtonColor
   }

   return buttonStyle
})

// ============================================================================
// Component
// ============================================================================

export default class Button extends React.Component {
   static propTypes = {
      borderRadius: OIOResponsiveObjectPropType,
      children: PropTypes.node,
      className: PropTypes.string,
      color: OIOResponsiveObjectPropType,
      fontFamily: OIOResponsiveObjectPropType,
      id: PropTypes.string,
      mode: PropTypes.oneOf(['disabled', 'normal', 'pulsing', 'loading']),
      name: PropTypes.node,
      onClick: PropTypes.func,
      outline: PropTypes.bool,
      padding: OIOResponsiveObjectPropType,
      rounded: PropTypes.bool,
      size: OIOResponsiveObjectPropType,
      style: PropTypes.object,
      tagName: PropTypes.oneOf(['button', 'div', 'span']),
      textColor: OIOResponsiveObjectPropType,
      textSize: OIOResponsiveObjectPropType,
      textTransform: OIOResponsiveObjectPropType,
      textWeight: OIOResponsiveObjectPropType,
      type: PropTypes.oneOf(['button', 'clear', 'submit']),
      width: OIOResponsiveObjectPropType
   }

   static defaultProps = {
      borderRadius: r`4px`,
      children: undefined,
      id: undefined,
      mode: 'normal',
      onClick: undefined,
      outline: false,
      rounded: false,
      size: r`sm`,
      style: {},
      tagName: 'button',
      textColor: r`#fff`,
      textSize: undefined,
      textTransform: r`none`,
      textWeight: r`medium`,
      type: 'button',
      width: r`auto`
   }

   render() {
      const {
         children, className, id, mode, name, tagName, type,
         textColor, textSize, textTransform, textWeight, onClick,
         backgroundColor, borderColor, borderRadius, borderStyle, borderWidth, color, fontFamily,
         height, padding, minWidth, width,
         hoverBackgroundColor, hoverBorderColor
      } = this.props

      /* eslint-disable object-property-newline */
      const responsiveStyles = generateResponsiveStyles({
         backgroundColor, borderColor, borderRadius, borderStyle, borderWidth, color, fontFamily,
         height, padding, minWidth, width
      })

      const hoverResponsiveStyles = generateResponsiveStyles({
         backgroundColor: hoverBackgroundColor,
         borderColor: hoverBorderColor
      })
      /* eslint-enable object-property-newline */

      const buttonStyle = {
         ...buttonStyleDefaults,
         ...this.props.style,
         ...responsiveStyles
      }

      // ====================================================
      // Element
      // ====================================================

      // Abilty to use custom tag (div, button, span)
      const ButtonElement = tagName
      const buttonProps = {}

      // If Button component has tagName button, ie: <button>, add type attribute
      if (tagName === 'button') {
         buttonProps.type = type
      }

      if (onClick) {
         buttonProps.onClick = onClick
      }

      // ====================================================
      // Mode
      // ====================================================

      if (mode === 'disabled') {
         buttonStyle.opacity = '0.3'
         buttonStyle.cursor = 'default'
         buttonProps.disabled = true
      } else if (mode === 'loading') {
         buttonStyle.cursor = 'default'
         buttonProps.disabled = true
      } else if (mode === 'pulsing') {
         buttonStyle.animation = `${pulsingAnimation} 2000ms infinite linear`
      }

      // Enable hover and active styles for normal and pulsing button modes
      // No hover/active styles for modes: loading or disabled
      if (['normal', 'pulsing'].includes(mode)) {
         buttonStyle['&:hover'] = {
            ...hoverResponsiveStyles
         }
         buttonStyle['&:active'] = {
            transform: 'translateY(3px)'
         }
      }

      return (
         <ButtonElement
            {...buttonProps}
            id={id}
            css={buttonStyle}
            className={className}>
            <View
               display="flex"
               justifyContent="center"
               alignItems="center"
               opacity={mode === 'loading' ? 0 : 1}>
               {children}
               {name && (
                  <Text
                     color={textColor}
                     size={textSize}
                     transform={textTransform}
                     weight={textWeight}>
                     {name}
                  </Text>
               )}
            </View>
            {mode === 'loading' && (
               <View
                  position="absolute"
                  top="calc(50% - 7px)"
                  left="calc(50% - 9px)"
                  width="18px"
                  height="18px">
                  <Spinner width="80%" height="80%" />
               </View>
            )}
         </ButtonElement>
      )
   }
}
