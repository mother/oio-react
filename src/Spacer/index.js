// =======================================================
// Spacer
// =======================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import r from '../../macro'
import { withOIOContext } from '../OIOProvider/context'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'

// ============================================================================
// Decorators
// ============================================================================

@withOIOContext
@withResponsiveObjectProps([
   'orientation',
   'size'
])

@withDynamicResponsiveProps((props, breakpoint) => {
   const orientation = props.orientation[breakpoint]
   if (!['horizontal', 'vertical'].includes(orientation)) {
      throw new Error(`Invalid Orientation value: ${orientation}`)
   }

   const zoom = props.OIOContext.zoom
   const size = parseInt(props.size[breakpoint], 10) * zoom
   const calculatedSpacerSize = `${size * 6}px`

   return ({
      display: orientation === 'horizontal' ? 'block' : 'inline-block',
      height: orientation === 'vertical' ? '100%' : calculatedSpacerSize,
      width: orientation === 'horizontal' ? '100%' : calculatedSpacerSize
   })
})

// ============================================================================
// Component
// ============================================================================

export default class Spacer extends React.Component {
   static propTypes = {
      display: OIOResponsiveObjectPropType,
      height: OIOResponsiveObjectPropType.isRequired,
      orientation: OIOResponsiveObjectPropType,
      size: OIOResponsiveObjectPropType.isRequired,
      style: PropTypes.object,
      width: OIOResponsiveObjectPropType.isRequired
   }

   static defaultProps = {
      display: undefined,
      orientation: r`horizontal`,
      style: {}
   }

   render() {
      const {
         className,
         display,
         height,
         style,
         width
      } = this.props

      const responsiveStyles = generateResponsiveStyles({
         display,
         height,
         width
      })

      return (
         <div
            css={{
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
