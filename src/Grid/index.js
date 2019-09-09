// ============================================================================
// Grid
// ============================================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import r from '../../macro'
import applyMultiplier from '../utils/applyMultiplier'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'
import { withZoomContext } from '../ZoomProvider/context'
import { GridContext } from './context'

// ============================================================================
// Decorators
// ============================================================================

@withZoomContext
@withResponsiveObjectProps(['columns', 'spacing'])
@withDynamicResponsiveProps((props, breakpoint) => {
   const spacing = applyMultiplier(props.spacing[breakpoint], props.zoomContext.zoom)

   return ({
      width: `calc(100% + ${spacing})`,
      marginTop: `-${spacing}`,
      marginLeft: `-${spacing}`
   })
})

// ============================================================================
// Component
// ============================================================================

export default class Grid extends React.Component {
   static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      columns: OIOResponsiveObjectPropType,
      id: PropTypes.string,
      spacing: OIOResponsiveObjectPropType,
      style: PropTypes.object
   }

   static defaultProps = {
      className: '',
      columns: r`12`,
      id: undefined,
      spacing: r`18px`,
      style: {}
   }

   render() {
      const { children, className, columns, id, marginLeft, marginTop, spacing, width } = this.props
      const contextProps = { columns, spacing }
      const responsiveStyles = generateResponsiveStyles({ marginLeft, marginTop, width })

      const style = {
         display: 'flex',
         flexWrap: 'wrap',
         ...this.props.style,
         ...responsiveStyles
      }

      return (
         <GridContext.Provider value={contextProps}>
            <div id={id} css={style} className={className}>
               {children}
            </div>
         </GridContext.Provider>
      )
   }
}
