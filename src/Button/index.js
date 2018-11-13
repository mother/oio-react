// =======================================================
// Button
// Rating: 2
// TODO:
// - needs lots of field testing
// - button modes
// - plain version
// - Ability to use icon
// =======================================================

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { css, cx } from 'emotion'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'
import { withOIOContext } from '../OIO/context'
import generateStyleObject from '../utils/generateStyleObject'
import Text from '../Text'

@withOIOContext
@generateStyleObject(({
   borderRadius,
   color,
   fontFamily,
   OIOContext,
   outline,
   rounded,
   size,
   sizeMultiplier,
   textColor,
   width
}) => {
   const primaryButtonColor = color || OIOContext.highlightColor
   const buttonStyle = {
      fontFamily,
      width,
      backgroundColor: primaryButtonColor,
      border: 'none',
      borderRadius: borderRadius || OIOContext.elementBorderRadius[size],
      color: textColor,
      minHeight: OIOContext.elementHeights[size],
      minWidth: OIOContext.elementHeights[size],
      padding: `0px ${OIOContext.elementHeights[size]}`,
      '&:hover': {
         backgroundColor: tinycolor(primaryButtonColor).lighten(7).toString()
      }
   }

   if (rounded) {
      buttonStyle.borderRadius = parseInt(OIOContext.elementHeights[size], 10) / 2
   }

   if (outline) {
      buttonStyle.border = `2px solid ${tinycolor(primaryButtonColor).setAlpha(0.5).toString()}`
      buttonStyle.backgroundColor = 'transparent'
      buttonStyle['&:hover'].backgroundColor = 'transparent'
      buttonStyle['&:hover'].border = `2px solid ${tinycolor(primaryButtonColor).setAlpha(0.8).toString()}`
      buttonStyle.color = primaryButtonColor
   }

   return buttonStyle
})

export default class Button extends Component {
   /* eslint-disable */
   static propTypes = {
      borderRadius: PropTypes.string,
      className: PropTypes.string,
      color: PropTypes.string,
      fontFamily: PropTypes.string,
      generatedStyleObject: PropTypes.object.isRequired,
      link: PropTypes.node,
      name: PropTypes.node,
      OIOContext: PropTypes.object.isRequired,
      onClick: PropTypes.func,
      size: PropTypes.string,
      sizeMultiplier: PropTypes.number,
      style: PropTypes.object,
      textColor: PropTypes.string,
      textUppercase: PropTypes.bool,
      type: PropTypes.oneOf(['button', 'clear', 'submit']),
      width: PropTypes.string
   }
   /* eslint-enable */

   static defaultProps = {
      autoScale: false,
      onClick: () => {},
      size: 'md',
      style: {},
      textColor: '#fff',
      textUppercase: false,
      type: 'button',
      width: 'auto'
   }

   render() {
      const {
         className, generatedStyleObject, name, link,
         OIOContext, onClick, size, style, textUppercase
      } = this.props

      const styles = {
         alignItems: 'center',
         cursor: 'pointer',
         display: 'flex',
         float: 'left',
         justifyContent: 'center',
         transition: '200ms',
         outline: 'none',
         ...style,
         ...generatedStyleObject,
         '&:active': {
            transform: 'translateY(1px)'
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
            className={cx(css(styles), className)}
            onClick={onClick}>
            <Text
               size={OIOContext.buttonTextSize[size]}
               weight="medium"
               uppercase={textUppercase ? 'uppercase' : OIOContext.buttonTextUppercase}>
               {name}
            </Text>
         </ButtonElement>
      )
   }
}
