// =======================================================
// Button
// Rating: 2
// TODO:
// - needs lots of field testing
// - button modes
// - plain version
// - Ability to use icon
// =======================================================

import React from 'react'
import { Link } from 'react-router-dom'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'
import { withOIOContext } from '../OIOProvider/context'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import r from '../../macro'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'
import Text from '../Text'

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

export default class Button extends React.Component {
   static propTypes = {
      borderRadius: OIOResponsiveObjectPropType,
      buttonTextSize: OIOResponsiveObjectPropType,
      className: PropTypes.string,
      color: OIOResponsiveObjectPropType,
      fontFamily: OIOResponsiveObjectPropType,
      link: PropTypes.node,
      name: PropTypes.node,
      onClick: PropTypes.func,
      outline: PropTypes.bool,
      padding: OIOResponsiveObjectPropType,
      rounded: PropTypes.bool,
      size: OIOResponsiveObjectPropType,
      style: PropTypes.object,
      textColor: OIOResponsiveObjectPropType,
      textUppercase: PropTypes.bool,
      type: PropTypes.oneOf(['button', 'clear', 'submit']),
      width: OIOResponsiveObjectPropType
   }

   static defaultProps = {
      onClick: () => {},
      outline: false,
      rounded: false,
      size: r`md`,
      style: {},
      textColor: r`#fff`,
      textUppercase: false,
      type: 'button',
      width: r`auto`
   }

   render() {
      const {
         className, name, link,
         buttonTextSize, OIOContext, onClick, textUppercase,
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

      const style = {
         alignItems: 'center',
         cursor: 'pointer',
         display: 'flex',
         float: 'left',
         justifyContent: 'center',
         transition: '200ms',
         outline: 'none',
         ...this.props.style,
         ...responsiveStyles,
         '&:hover': {
            ...hoverResponsiveStyles
         },
         '&:active': {
            transform: 'translateY(3px)'
         }
      }

      let ButtonElement = 'button'
      let buttonLinkObj = null

      // Buttons might be used as a html <button> or <Link>
      if (link) {
         ButtonElement = Link
         buttonLinkObj = { to: link }
      }

      return (
         <ButtonElement
            {...buttonLinkObj}
            css={style}
            className={className}
            onClick={onClick}>
            <Text
               size={buttonTextSize}
               weight="semibold"
               uppercase={textUppercase ? true : OIOContext.buttonTextUppercase}>
               {name}
            </Text>
         </ButtonElement>
      )
   }
}
