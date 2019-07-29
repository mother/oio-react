// ============================================================================
// GridCell
// ============================================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { withGridContext } from '../Grid/context'
import applyMultiplier from '../utils/applyMultiplier'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import r from '../../macro'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'
import { withZoomContext } from '../ZoomProvider/context'

// ============================================================================
// Constants
// ============================================================================

const zoomeableProps = [
   'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop',
   'border', 'borderBottom', 'borderLeft', 'borderRight', 'borderTop', 'borderRadius'
]

// ============================================================================
// Decorators
// ============================================================================

@withGridContext
@withZoomContext
@withResponsiveObjectProps([
   'backgroundColor',
   'backgroundImage',
   'backgroundPosition',
   'backgroundRepeat',
   'backgroundSize',
   'border',
   'borderBottom',
   'borderLeft',
   'borderRadius',
   'borderRight',
   'borderTop',
   'boxShadow',
   'colspan',
   'padding',
   'paddingBottom',
   'paddingLeft',
   'paddingRight',
   'paddingTop',
   'paddingHorizontal',
   'paddingVertical',
   'textAlign'
])

@withDynamicResponsiveProps((props, breakpoint) => {
   const { paddingHorizontal, paddingVertical, gridContext, ZoomContext } = props

   const colspan = props.colspan[breakpoint]
   const numGridColumns = gridContext.columns[breakpoint]
   const spacing = applyMultiplier(gridContext.spacing[breakpoint], ZoomContext.zoom)
   const cellWidth = (colspan / numGridColumns) * 100

   // Handle Zoom
   const zoom = ZoomContext.zoom
   const zoomProps = {}

   if (zoom !== 1) {
      zoomeableProps.forEach(prop => {
         const propBreakpointValue = props[prop]?.[breakpoint]

         if (propBreakpointValue) {
            zoomProps[prop] = applyMultiplier(propBreakpointValue, zoom)
         }
      })
   }

   const styleObject = {
      ...zoomProps,
      marginLeft: spacing,
      marginTop: spacing,
      width: `calc(${cellWidth}% - ${spacing})`
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
})

// ============================================================================
// Component
// ============================================================================

export default class GridCell extends React.Component {
   static propTypes = {
      backgroundColor: OIOResponsiveObjectPropType,
      backgroundImage: OIOResponsiveObjectPropType,
      backgroundPosition: OIOResponsiveObjectPropType,
      backgroundRepeat: OIOResponsiveObjectPropType,
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
      colspan: OIOResponsiveObjectPropType,
      id: PropTypes.string,
      padding: OIOResponsiveObjectPropType,
      paddingTop: OIOResponsiveObjectPropType,
      paddingLeft: OIOResponsiveObjectPropType,
      paddingRight: OIOResponsiveObjectPropType,
      paddingBottom: OIOResponsiveObjectPropType,
      paddingHorizontal: OIOResponsiveObjectPropType,
      paddingVertical: OIOResponsiveObjectPropType,
      style: PropTypes.object,
      textAlign: OIOResponsiveObjectPropType
   }

   static defaultProps = {
      className: '',
      colspan: r`1`,
      id: undefined,
      style: {}
   }

   render() {
      const {
         className, id,
         backgroundColor, backgroundImage, backgroundPosition, backgroundRepeat, backgroundSize,
         border, borderBottom, borderLeft, borderRadius, borderRight, borderTop,
         marginTop, marginLeft,
         padding, paddingBottom, paddingLeft, paddingRight, paddingTop,
         boxShadow, textAlign,
         width
      } = this.props

      /* eslint-disable object-property-newline */
      const responsiveStyles = generateResponsiveStyles({
         backgroundColor, backgroundImage, backgroundPosition, backgroundRepeat, backgroundSize,
         border, borderBottom, borderLeft, borderRadius, borderRight, borderTop,
         marginTop, marginLeft,
         padding, paddingBottom, paddingLeft, paddingRight, paddingTop,
         boxShadow, textAlign,
         width
      })
      /* eslint-enable object-property-newline */

      const style = {
         ...this.props.style,
         ...responsiveStyles
      }

      return (
         <div id={id} css={style} className={className}>
            {this.props.children}
         </div>
      )
   }
}
