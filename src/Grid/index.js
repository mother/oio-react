// ============================================================================
// Grid
// ============================================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { GridContext } from './context'
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
@withResponsiveObjectProps(['columns', 'spacing'])
@withDynamicResponsiveProps((props, breakpoint) => {
   const spacing = parseInt(props.spacing[breakpoint], 10) * props.OIOContext.zoom

   return ({
      width: `calc(100% + ${spacing}px)`,
      marginLeft: `-${spacing}px`
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
      const { children, className, columns, id, marginLeft, spacing, width } = this.props
      const contextProps = { columns, spacing }
      const responsiveStyles = generateResponsiveStyles({ width, marginLeft })

      const style = {
         float: 'left',
         width: '100%',
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
