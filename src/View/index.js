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
   'borderRadius', 'boxShadow', 'textAlign', 'zIndex'
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
      onKeyUp: PropTypes.func,
      onScroll: PropTypes.func,
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
      onClick: () => {},
      onKeyUp: () => {},
      onScroll: () => {},
      position: r`relative`,
      style: {}
   }

   render() {
      const {
         children, className,
         display, float, position, top, left, right, bottom,
         flex, flexFlow, justifyContent, alignItems, order,
         height, width, maxHeight, maxWidth, minHeight, minWidth,
         margin, marginBottom, marginLeft, marginRight, marginTop,
         padding, paddingBottom, paddingLeft, paddingRight, paddingTop,
         border, borderBottom, borderLeft, borderRight, borderTop,
         backgroundColor, backgroundImage, backgroundPosition, backgroundSize,
         borderRadius, boxShadow, textAlign, zIndex,
         overflow, WebkitOverflowScrolling,
         onClick, onKeyUp, onScroll
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
         borderRadius, boxShadow, textAlign, zIndex,
         overflow, WebkitOverflowScrolling
      })
      /* eslint-enable */

      return (
         <div
            ref={this.props.forwardedRef}
            css={{
               ...this.props.style,
               ...responsiveStyles
            }}
            className={className}
            onClick={onClick}
            onKeyUp={onKeyUp}
            onScroll={onScroll}>
            {children}
         </div>
      )
   }
}
