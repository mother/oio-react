// ============================================================================
// GridCell
// ============================================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { withGridContext } from '../Grid/context'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import r from '../../macro'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'

// ============================================================================
// Decorators
// ============================================================================

@withGridContext
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
   const { paddingHorizontal, paddingVertical, gridContext } = props

   const colspan = props.colspan[breakpoint]
   const numGridColumns = gridContext.columns[breakpoint]
   const spacing = gridContext.spacing[breakpoint]
   const cellWidth = (colspan / numGridColumns) * 100

   const styleObject = {
      marginLeft: spacing,
      marginTop: spacing,
      width: `calc(${cellWidth}% - ${spacing})`
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
