// ============================================================================
// GridCell
// ============================================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { withGridContext } from '../Grid/context'
import { withOIOContext } from '../OIOProvider/context'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import r from '../../macro'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'

// ============================================================================
// Decorators
// ============================================================================

@withOIOContext
@withGridContext
@withResponsiveObjectProps(['colspan'])
@withDynamicResponsiveProps((props, breakpoint) => {
   const { gridContext, OIOContext } = props

   const colspan = props.colspan[breakpoint]
   const numGridColumns = gridContext.columns[breakpoint]
   const spacing = `calc(${gridContext.spacing[breakpoint]} * ${OIOContext.zoom})`
   const cellWidth = (colspan / numGridColumns) * 100

   return ({
      width: `calc(${cellWidth}% - ${spacing})`,
      marginBottom: spacing,
      marginLeft: spacing
   })
})

// ============================================================================
// Component
// ============================================================================

export default class GridCell extends React.Component {
   static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      colspan: OIOResponsiveObjectPropType,
      id: PropTypes.string,
      style: PropTypes.object
   }

   static defaultProps = {
      className: '',
      colspan: r`1`,
      id: undefined,
      style: {}
   }

   render() {
      const { className, id, marginBottom, marginLeft, width } = this.props
      const responsiveStyles = generateResponsiveStyles({
         marginBottom,
         marginLeft,
         width
      })

      const style = {
         float: 'left',
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
