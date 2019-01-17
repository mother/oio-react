// =======================================================
// Grid
// Rating: 3
// Fairly feature-complete, needs to be field-tested
// =======================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { GridContext } from './context'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import r from '../../macro'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'

// ============================================================================
// Decorators
// ============================================================================

@withResponsiveObjectProps(['columns', 'spacing'])
@withDynamicResponsiveProps((props, breakpoint) => {
   const spacing = props.spacing[breakpoint]

   return ({
      width: `calc(100% + ${spacing})`,
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
      spacing: OIOResponsiveObjectPropType,
      style: PropTypes.object
   }

   static defaultProps = {
      className: '',
      columns: r`12`,
      spacing: r`18px`,
      style: {}
   }

   render() {
      const { children, className, columns, marginLeft, spacing, width } = this.props
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
            <div css={style} className={className}>
               {children}
            </div>
         </GridContext.Provider>
      )
   }
}
