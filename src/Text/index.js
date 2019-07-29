// =======================================================
// Text
// Foundational component that is used as Root
// component for may other OIO components
// =======================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { withOIOContext } from '../OIOProvider/context'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import r from '../../macro'
import OIOResponsiveObjectPropType from '../utils/PropType'
import withResponsiveObjectProps from '../utils/withResponsiveObjectProps'
import withDynamicResponsiveProps from '../utils/withDynamicResponsiveProps'
import { withZoomContext } from '../ZoomProvider/context'

// ============================================================================
// Decorators
// ============================================================================

@withOIOContext
@withZoomContext
@withResponsiveObjectProps([
   'baseAutoScaleFontSize',
   'baseFontSize',
   'color',
   'fontFamily',
   'letterSpacing',
   'lineHeight',
   'size',
   'sizeMultiplier',
   'transform',
   'weight'
])

@withDynamicResponsiveProps((props, breakpoint) => {
   const { autoScale, OIOContext, ZoomContext } = props

   const size = props.size[breakpoint]
   const weight = props.weight[breakpoint]

   // Dynamically calculate actual CSS font size
   // 1. Get base Text size (depending on static vs autoscaled)
   // (Autoscaled text scales proportionally to screen size - uses vw units)
   // (non-autoscaled text sizes use static px sizes)
   const baseTextSize = autoScale
      ? parseFloat(props.baseAutoScaleFontSize[breakpoint])
      : parseFloat(props.baseFontSize[breakpoint])

   // 2. Calculate Text's size relative to OIOContext.textSizeScaleRatio
   // This assumes Text sizes can be any decimal number
   const scaledTextSize = size > 1
      ? OIOContext.textSizeScaleRatio ** size
      : OIOContext.textSizeScaleRatio * size

   // 3. Calculate Multiplier for text size
   // Multipliers may come from: Text component, OIOContext or ZoomContext
   const sizeMultiplier = parseFloat(props.sizeMultiplier[breakpoint])
   const multiplier = sizeMultiplier * OIOContext.textSizeMultiplier * ZoomContext.zoom

   // 4. Calculate Font Size based on above values
   const calculatedFontSize = parseFloat(baseTextSize * scaledTextSize * multiplier)
   const fontSizeUnit = autoScale ? 'vw' : 'px'
   const fontSize = `${calculatedFontSize}${fontSizeUnit}`

   // Adjust line-height based on text size
   let calculatedLineHeight = '130%'

   if (size > 9) {
      calculatedLineHeight = '100%'
   } else if (size > 5) {
      calculatedLineHeight = '110%'
   }

   return ({
      fontSize,
      fontWeight: OIOContext[`fontWeight${weight.charAt(0).toUpperCase()}${weight.slice(1)}`],
      lineHeight: props.lineHeight[breakpoint] || calculatedLineHeight,
      textTransform: props.transform[breakpoint]
   })
})

// ============================================================================
// Component
// ============================================================================

export default class Text extends React.Component {
   static propTypes = {
      autoScale: PropTypes.bool,
      baseFontSize: OIOResponsiveObjectPropType,
      baseAutoScaleFontSize: OIOResponsiveObjectPropType,
      children: PropTypes.node,
      className: PropTypes.string,
      color: OIOResponsiveObjectPropType,
      fontFamily: OIOResponsiveObjectPropType,
      fontSize: OIOResponsiveObjectPropType.isRequired,
      fontWeight: OIOResponsiveObjectPropType.isRequired,
      letterSpacing: OIOResponsiveObjectPropType,
      lineHeight: OIOResponsiveObjectPropType,
      size: OIOResponsiveObjectPropType,
      sizeMultiplier: OIOResponsiveObjectPropType,
      style: PropTypes.object,
      textTransform: OIOResponsiveObjectPropType.isRequired,
      transform: OIOResponsiveObjectPropType,
      weight: OIOResponsiveObjectPropType.isRequired
   }

   static defaultProps = {
      autoScale: false,
      baseFontSize: r`11px`,
      baseAutoScaleFontSize: r`2.5[a] 1.8[b] 1.5[c] 1[d] 0.75[e] 0.625[f]`,
      children: null,
      className: '',
      color: r``,
      fontFamily: r``,
      letterSpacing: r``,
      lineHeight: '120%',
      size: r`3`,
      sizeMultiplier: r`1`,
      style: {},
      transform: r``,
      weight: r`normal`
   }

   render() {
      const {
         children,
         className,
         color,
         fontFamily,
         fontSize,
         fontWeight,
         letterSpacing,
         lineHeight,
         textTransform
      } = this.props

      const responsiveStyles = generateResponsiveStyles({
         color,
         fontFamily,
         fontSize,
         fontWeight,
         letterSpacing,
         lineHeight,
         textTransform
      })

      const style = {
         ...this.props.style,
         ...responsiveStyles
      }

      return (
         <div css={style} className={className}>
            {children}
         </div>
      )
   }
}
