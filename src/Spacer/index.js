// =======================================================
// Spacer
// =======================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import r from '../../macro'
import OIOResponsiveObjectPropType from '../utils/PropType'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'

// ============================================================================
// Decorators
// ============================================================================

@withResponsiveObjectProps([
   'float',
   'orientation',
   'size'
])

@withDynamicResponsiveProps((props, breakpoint) => {
   const { float, orientation } = props
   const size = parseInt(props.size[breakpoint], 10)
   const convertedSize = `${size * 6}px`

   return ({
      float,
      height: orientation === 'vertical' ? '100%' : convertedSize,
      width: orientation === 'horizontal' ? '100%' : convertedSize
   })
})

// ============================================================================
// Component
// ============================================================================

export default class Spacer extends React.Component {
   static propTypes = {
      float: OIOResponsiveObjectPropType,
      height: OIOResponsiveObjectPropType.isRequired,
      orientation: PropTypes.oneOf(['horizontal', 'vertical']),
      size: OIOResponsiveObjectPropType.isRequired,
      style: PropTypes.object,
      width: OIOResponsiveObjectPropType.isRequired
   }

   static defaultProps = {
      float: r``,
      orientation: 'horizontal',
      style: {}
   }

   render() {
      const {
         className,
         float,
         height,
         style,
         width
      } = this.props

      const responsiveStyles = generateResponsiveStyles({
         float,
         height,
         width
      })

      return (
         <div
            css={{
               display: 'block',
               minWidth: '1px',
               minHeight: '1px',
               ...style,
               ...responsiveStyles
            }}
            className={className}
         />
      )
   }
}
