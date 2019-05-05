import React from 'react'
import { Link } from 'react-router-dom'
/** @jsx jsx */
import { jsx, keyframes } from '@emotion/core'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'
import { withOIOContext } from '../OIOProvider/context'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import r from '../../macro'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'
import Spinner from '../Spinner'
import Text from '../Text'
import View from '../View'

const pulsingAnimation = keyframes`
   0% { opacity: 0.5; }
   50% { opacity: 1; }
   100% { opacity: 0.5; }
`

// ============================================================================
// Decorators
// ============================================================================

@withOIOContext
@withResponsiveObjectProps([
   'borderRadius',
   'color',
   'fontFamily',
   'padding',
   'size',
   'sizeMultiplier',
   'textColor',
   'width'
])

@withDynamicResponsiveProps((props, breakpoint) => {
   const {
      OIOContext,
      outline,
      rounded
   } = props

   // Responsive Props
   const borderRadius = props.borderRadius && props.borderRadius[breakpoint]
   const color = props.color && props.color[breakpoint]
   const fontFamily = props.fontFamily && props.fontFamily[breakpoint]
   const padding = props.padding && props.padding[breakpoint]
   const size = props.size && props.size[breakpoint]
   const textColor = props.textColor && props.textColor[breakpoint]
   const width = props.width[breakpoint]

   const primaryButtonColor = color || OIOContext.highlightColor
   const defaultButtonPadding = width === 'auto'
      ? `0px ${OIOContext.elementHeights[size]}`
      : '0px'

   const buttonStyle = {
      fontFamily,
      width,
      backgroundColor: primaryButtonColor,
      border: 'none',
      borderRadius: borderRadius || OIOContext.elementBorderRadius[size],
      buttonTextSize: OIOContext.buttonTextSize[size],
      color: textColor,
      hoverBackgroundColor: tinycolor(primaryButtonColor).lighten(7).toString(),
      hoverBorder: '',
      minHeight: OIOContext.elementHeights[size],
      minWidth: OIOContext.elementHeights[size],
      padding: padding ? `0px ${padding}` : defaultButtonPadding
   }

   if (rounded) {
      buttonStyle.borderRadius = `${parseInt(OIOContext.elementHeights[size], 10) / 2}px`
   }

   if (outline) {
      buttonStyle.border = `2px solid ${tinycolor(primaryButtonColor).setAlpha(0.5).toString()}`
      buttonStyle.backgroundColor = 'transparent'
      buttonStyle.hoverBackgroundColor = 'transparent'
      buttonStyle.hoverBorder = `2px solid ${tinycolor(primaryButtonColor).setAlpha(0.8).toString()}`
      buttonStyle.color = primaryButtonColor
   }

   return buttonStyle
})

// ============================================================================
// Component
// ============================================================================

export default class Button extends React.Component {
   static propTypes = {
      borderRadius: OIOResponsiveObjectPropType,
      buttonTextSize: OIOResponsiveObjectPropType,
      buttonTextTransform: PropTypes.string,
      className: PropTypes.string,
      color: OIOResponsiveObjectPropType,
      fontFamily: OIOResponsiveObjectPropType,
      link: PropTypes.node,
      mode: PropTypes.oneOf(['disabled', 'normal', 'pulsing', 'loading']),
      name: PropTypes.node,
      onClick: PropTypes.func,
      outline: PropTypes.bool,
      padding: OIOResponsiveObjectPropType,
      rounded: PropTypes.bool,
      size: OIOResponsiveObjectPropType,
      style: PropTypes.object,
      textColor: OIOResponsiveObjectPropType,
      type: PropTypes.oneOf(['button', 'clear', 'submit']),
      width: OIOResponsiveObjectPropType
   }

   static defaultProps = {
      buttonTextTransform: 'none',
      mode: 'normal',
      onClick: () => {},
      outline: false,
      rounded: false,
      size: r`md`,
      style: {},
      textColor: r`#fff`,
      type: 'button',
      width: r`auto`
   }

   render() {
      const {
         className, link, mode, name, type,
         buttonTextSize, buttonTextTransform, onClick,
         backgroundColor, border, borderRadius, color, fontFamily,
         padding, minHeight, minWidth, width,
         hoverBackgroundColor, hoverBorder
      } = this.props

      /* eslint-disable object-property-newline */
      const responsiveStyles = generateResponsiveStyles({
         backgroundColor, border, borderRadius, color, fontFamily,
         padding, minHeight, minWidth, width
      })

      const hoverResponsiveStyles = generateResponsiveStyles({
         backgroundColor: hoverBackgroundColor,
         border: hoverBorder
      })
      /* eslint-enable */

      const textStyle = {}
      const style = {
         position: 'relative',
         alignItems: 'center',
         cursor: 'pointer',
         display: 'flex',
         float: 'left',
         justifyContent: 'center',
         transition: '200ms',
         outline: 'none',
         ...this.props.style,
         ...responsiveStyles
      }

      // ====================================================
      // Element
      // ====================================================

      let ButtonElement = 'button'
      let specialButtonProps = null

      // Buttons might be used as a html <button> or <Link>
      if (link) {
         ButtonElement = Link
         specialButtonProps = { to: link }
      } else {
         specialButtonProps = { type }
      }

      // ====================================================
      // Mode
      // ====================================================

      if (mode === 'disabled') {
         style.opacity = '0.3'
         style.cursor = 'default'
         specialButtonProps.disabled = true
      } else if (mode === 'loading') {
         textStyle.opacity = 0
         style.cursor = 'default'
      } else if (mode === 'pulsing') {
         style.animation = `${pulsingAnimation} 2000ms infinite linear`
      }

      // Enable hover and active styles for normal and pulsing button modes
      if (mode === 'normal' || mode === 'pulsing') {
         style['&:hover'] = {
            ...hoverResponsiveStyles
         }
         style['&:active'] = {
            transform: 'translateY(3px)'
         }
      }

      return (
         <ButtonElement
            {...specialButtonProps}
            css={style}
            className={className}
            onClick={onClick}>
            <Text
               size={buttonTextSize}
               weight="semibold"
               transform={buttonTextTransform}
               style={textStyle}>
               {name}
            </Text>
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
