// =======================================================
// View
// =======================================================

import React, { useContext } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import r from '../../macro'
import OIOContext from '../OIOProvider/context'
import applyMultiplier from '../utils/applyMultiplier'
import forwardRefToWrappedComponent from '../utils/forwardRef'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'
import ZoomContext from '../ZoomProvider/context'

import generateResponsiveObject from '../utils/generateResponsiveObject'

// ============================================================================
// Constants
// ============================================================================

const zoomableProps = [
   'top', 'left', 'right', 'bottom',
   'height', 'width', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth',
   'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop',
   'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop',
   'border', 'borderBottom', 'borderLeft', 'borderRight', 'borderTop',
   'borderRadius'
]

// ============================================================================
// Decorators
// ============================================================================

const compose = (...fns) => (
   fns.reduceRight((prevFn, nextFn) => (...args) => nextFn(
      prevFn(...args)
   ), value => value)
)

// @forwardRefToWrappedComponent
// @withOIOContext
// @withZoomContext
// @withResponsiveObjectProps(
const responsiveObjectProps = [
   'display', 'float', 'position', 'top', 'left', 'right', 'bottom', 'scroll',
   'flex', 'flexFlow', 'justifyContent', 'alignItems', 'order',
   'height', 'width', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth',
   'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop',
   'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop',
   'paddingHorizontal', 'paddingVertical',
   'border', 'borderBottom', 'borderLeft', 'borderRight', 'borderTop',
   'backgroundColor', 'backgroundImage', 'backgroundPosition', 'backgroundSize',
   'borderRadius', 'boxShadow', 'opacity', 'textAlign', 'transform', 'transition', 'zIndex'
]

// @withDynamicResponsiveProps(
const dynamicResponsiveProps = (props, breakpoint) => {
   const { paddingHorizontal, paddingVertical, scroll, zoomContext } = props
   const { zoom } = zoomContext

   // Handle Zoom
   const zoomProps = {}
   if (zoom !== 1) {
      zoomableProps.forEach((prop) => {
         const propBreakpointValue = props[prop]?.[breakpoint]
         zoomProps[prop] = applyMultiplier(propBreakpointValue, zoom)
      })
   }

   const styleObject = {
      ...zoomProps
   }

   if (scroll && scroll[breakpoint] === 'on') {
      styleObject.overflow = 'auto'
      styleObject.WebkitOverflowScrolling = 'touch'
   }

   if (paddingHorizontal?.[breakpoint]) {
      styleObject.paddingLeft = applyMultiplier(paddingHorizontal[breakpoint], zoom)
      styleObject.paddingRight = applyMultiplier(paddingHorizontal[breakpoint], zoom)
   }

   if (paddingVertical?.[breakpoint]) {
      styleObject.paddingTop = applyMultiplier(paddingVertical[breakpoint], zoom)
      styleObject.paddingBottom = applyMultiplier(paddingVertical[breakpoint], zoom)
   }

   return styleObject
}

// ============================================================================
// Component
// ============================================================================

const View = (props) => {

   const oioContext = useContext(OIOContext)
   const zoomContext = useContext(ZoomContext)

   const responsiveProps = {}
   responsiveObjectProps.forEach((responsivePropKey) => {
      if (typeof props[responsivePropKey] !== 'undefined' && props[responsivePropKey] !== null) {
         const isResponsiveObject = typeof props[responsivePropKey] === 'object' &&
            props[responsivePropKey].breakpointsWereSet

         responsiveProps[responsivePropKey] = isResponsiveObject
            ? props[responsivePropKey]
            : props[responsivePropKey] // generateResponsiveObject(props[responsivePropKey])
      }
   })

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
      onClick, onDoubleClick, onKeyDown, onKeyPress, onKeyUp,
      onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onScroll,
      onTouchCancel, onTouchEnd, onTouchMove, onTouchStart, onTransitionEnd,
      onAnimationEnd, onAnimationStart, onAnimationIteration,
      tabIndex,
      style
   } = { ...props, ...responsiveProps }

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
      onClick, onDoubleClick, onKeyDown, onKeyPress, onKeyUp,
      onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onScroll,
      onTouchCancel, onTouchEnd, onTouchMove, onTouchStart, onTransitionEnd,
      onAnimationEnd, onAnimationStart, onAnimationIteration
   }
   /* eslint-enable object-property-newline */

   return (
      <div
         {...eventHandlers}
         id={id}
         css={{
            ...style,
            ...responsiveStyles
         }}
         className={className}
         tabIndex={tabIndex}>
         {children}
      </div>
   )
}

View.propTypes = {
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
   onAnimationEnd: PropTypes.func,
   onAnimationStart: PropTypes.func,
   onAnimationIteration: PropTypes.func,
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
   tabIndex: PropTypes.string,
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

View.defaultProps = {
   className: '',
   display: r`block`,
   id: undefined,
   onAnimationEnd: undefined,
   onAnimationStart: undefined,
   onAnimationIteration: undefined,
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
   position: r`static`,
   style: {},
   tabIndex: undefined
}

export default compose(
   // withOIOContext,
   // withZoomContext,
   // withResponsiveObjectProps(responsiveObjectProps)
   // withDynamicResponsiveProps(dynamicResponsiveProps)
)(View)
