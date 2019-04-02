// =======================================================
// View
// =======================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import forwardRefToWrappedComponent from '../utils/forwardRef'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import r from '../../macro'
import OIOResponsiveObjectPropType from '../utils/PropType'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'

@forwardRefToWrappedComponent
@withResponsiveObjectProps([
   'display', 'float', 'position', 'top', 'left', 'right', 'bottom', 'scroll',
   'flex', 'flexFlow', 'justifyContent', 'alignItems', 'order',
   'height', 'width', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth',
   'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop',
   'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop',
   'paddingHorizontal', 'paddingVertical',
   'border', 'borderBottom', 'borderLeft', 'borderRight', 'borderTop',
   'backgroundColor', 'backgroundImage', 'backgroundPosition', 'backgroundSize',
   'borderRadius', 'boxShadow', 'opacity', 'textAlign', 'transform', 'transition', 'zIndex'
])

@withDynamicResponsiveProps((props, breakpoint) => {
   const { paddingHorizontal, paddingVertical, scroll } = props
   const styleObject = {}

   if (scroll && scroll[breakpoint] === 'on') {
      styleObject.overflow = 'auto'
      styleObject.WebkitOverflowScrolling = 'touch'
   }

   if (paddingHorizontal && paddingHorizontal[breakpoint]) {
      styleObject.paddingLeft = paddingHorizontal[breakpoint]
      styleObject.paddingRight = paddingHorizontal[breakpoint]
   }

   if (paddingVertical && paddingVertical[breakpoint]) {
      styleObject.paddingTop = paddingVertical[breakpoint]
      styleObject.paddingBottom = paddingVertical[breakpoint]
   }

   return styleObject
})

export default class View extends React.Component {
   static propTypes = {
      alignItems: OIOResponsiveObjectPropType,
      backgroundColor: OIOResponsiveObjectPropType,
      backgroundImage: OIOResponsiveObjectPropType,
      backgroundPosition: OIOResponsiveObjectPropType,
      backgroundSize: OIOResponsiveObjectPropType,
      border: OIOResponsiveObjectPropType,
      borderTop: OIOResponsiveObjectPropType,
      borderRadius: OIOResponsiveObjectPropType,
      borderRight: OIOResponsiveObjectPropType,
      borderBottom: OIOResponsiveObjectPropType,
      borderLeft: OIOResponsiveObjectPropType,
      boxShadow: OIOResponsiveObjectPropType,
      children: PropTypes.node,
      className: PropTypes.string,
      display: OIOResponsiveObjectPropType,
      flex: OIOResponsiveObjectPropType,
      flexFlow: OIOResponsiveObjectPropType,
      float: OIOResponsiveObjectPropType,
      height: OIOResponsiveObjectPropType,
      id: PropTypes.string,
      justifyContent: OIOResponsiveObjectPropType,
      margin: OIOResponsiveObjectPropType,
      marginTop: OIOResponsiveObjectPropType,
      marginLeft: OIOResponsiveObjectPropType,
      marginRight: OIOResponsiveObjectPropType,
      marginBottom: OIOResponsiveObjectPropType,
      minHeight: OIOResponsiveObjectPropType,
      maxHeight: OIOResponsiveObjectPropType,
      minWidth: OIOResponsiveObjectPropType,
      maxWidth: OIOResponsiveObjectPropType,
      onClick: PropTypes.func,
      onCopy: PropTypes.func,
      onCut: PropTypes.func,
      onPaste: PropTypes.func,
      onDoubleClick: PropTypes.func,
      onKeyDown: PropTypes.func,
      onKeyPress: PropTypes.func,
      onKeyUp: PropTypes.func,
      onMouseDown: PropTypes.func,
      onMouseMove: PropTypes.func,
      onMouseOut: PropTypes.func,
      onMouseOver: PropTypes.func,
      onMouseUp: PropTypes.func,
      onScroll: PropTypes.func,
      onTouchCancel: PropTypes.func,
      onTouchEnd: PropTypes.func,
      onTouchMove: PropTypes.func,
      onTouchStart: PropTypes.func,
      onTransitionEnd: PropTypes.func,
      opacity: OIOResponsiveObjectPropType,
      order: OIOResponsiveObjectPropType,
      overflow: OIOResponsiveObjectPropType,
      padding: OIOResponsiveObjectPropType,
      paddingTop: OIOResponsiveObjectPropType,
      paddingLeft: OIOResponsiveObjectPropType,
      paddingRight: OIOResponsiveObjectPropType,
      paddingBottom: OIOResponsiveObjectPropType,
      paddingHorizontal: OIOResponsiveObjectPropType,
      paddingVertical: OIOResponsiveObjectPropType,
      position: OIOResponsiveObjectPropType,
      scroll: OIOResponsiveObjectPropType,
      style: PropTypes.object,
      textAlign: OIOResponsiveObjectPropType,
      top: OIOResponsiveObjectPropType,
      transform: OIOResponsiveObjectPropType,
      transition: OIOResponsiveObjectPropType,
      left: OIOResponsiveObjectPropType,
      right: OIOResponsiveObjectPropType,
      bottom: OIOResponsiveObjectPropType,
      WebkitOverflowScrolling: OIOResponsiveObjectPropType,
      width: OIOResponsiveObjectPropType,
      zIndex: OIOResponsiveObjectPropType
   }

   static defaultProps = {
      className: '',
      display: r`block`,
      id: undefined,
      onClick: undefined,
      onCopy: undefined,
      onCut: undefined,
      onPaste: undefined,
      onDoubleClick: undefined,
      onKeyDown: undefined,
      onKeyPress: undefined,
      onKeyUp: undefined,
      onMouseDown: undefined,
      onMouseMove: undefined,
      onMouseOut: undefined,
      onMouseOver: undefined,
      onMouseUp: undefined,
      onScroll: undefined,
      onTouchCancel: undefined,
      onTouchEnd: undefined,
      onTouchMove: undefined,
      onTouchStart: undefined,
      onTransitionEnd: undefined,
      position: r`relative`,
      style: {}
   }

   render() {
      const {
         children, className, id,
         display, float, position, top, left, right, bottom,
         flex, flexFlow, justifyContent, alignItems, order,
         height, width, maxHeight, maxWidth, minHeight, minWidth,
         margin, marginBottom, marginLeft, marginRight, marginTop,
         padding, paddingBottom, paddingLeft, paddingRight, paddingTop,
         border, borderBottom, borderLeft, borderRight, borderTop,
         backgroundColor, backgroundImage, backgroundPosition, backgroundSize,
         borderRadius, boxShadow, opacity, textAlign, transform, transition, zIndex,
         overflow, WebkitOverflowScrolling,
         onClick, onCopy, onCut, onPaste, onDoubleClick, onKeyDown, onKeyPress, onKeyUp,
         onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onScroll,
         onTouchCancel, onTouchEnd, onTouchMove, onTouchStart, onTransitionEnd
      } = this.props

      // Generate CSS responsive styles with Emotion
      /* eslint-disable object-property-newline */
      const responsiveStyles = generateResponsiveStyles({
         display, float, position, top, left, right, bottom,
         flex, flexFlow, justifyContent, alignItems, order,
         height, width, maxHeight, maxWidth, minHeight, minWidth,
         margin, marginBottom, marginLeft, marginRight, marginTop,
         padding, paddingBottom, paddingLeft, paddingRight, paddingTop,
         border, borderBottom, borderLeft, borderRight, borderTop,
         backgroundColor, backgroundImage, backgroundPosition, backgroundSize,
         borderRadius, boxShadow, opacity, textAlign, transform, transition, zIndex,
         overflow, WebkitOverflowScrolling
      })

      const eventHandlers = {
         onClick, onCopy, onCut, onPaste, onDoubleClick, onKeyDown, onKeyPress, onKeyUp,
         onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onScroll,
         onTouchCancel, onTouchEnd, onTouchMove, onTouchStart, onTransitionEnd
      }

      /* eslint-enable object-property-newline */

      return (
         <div
            {...eventHandlers}
            id={id}
            ref={this.props.forwardedRef}
            css={{
               ...this.props.style,
               ...responsiveStyles
            }}
            className={className}>
            {children}
         </div>
      )
   }
}
