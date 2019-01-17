// =======================================================
// Text
// Foundational component that is used as Root
// component for may other OIO components
// Rating: 4
// Fairly feature-complete, needs to be field-tested
// =======================================================

import React from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
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
@withResponsiveObjectProps([
   'baseAutoScaleFontSize',
   'baseFontSize',
   'color',
   'fontFamily',
   'lineHeight',
   'size',
   'sizeMultiplier',
   'weight'
])

@withDynamicResponsiveProps((props, breakpoint) => {
   const { autoScale, OIOContext, sizeMultiplier } = props

   // Responsive Props
   const baseAutoScaleFontSize = parseFloat(props.baseAutoScaleFontSize[breakpoint])
   const baseFontSize = parseFloat(props.baseFontSize[breakpoint])
   const size = props.size[breakpoint]
   const uppercase = props.uppercase
   const weight = props.weight[breakpoint]

   // Calculate real font size
   // Dynamically calculate font size - this is a number based on a combination of
   // text size, scaling ratios and multipliers (multipliers are useful for theming)
   const textSizeScaleRatio = OIOContext.textSizeScaleRatio
   const scaledTextSize = size > 1 ? textSizeScaleRatio ** size : textSizeScaleRatio * size
   const multiplier = sizeMultiplier * OIOContext.textSizeMultiplier * (uppercase ? 0.9 : 1)
   const baseTextSize = autoScale ? baseAutoScaleFontSize : baseFontSize
   const fontSize = parseFloat(baseTextSize * scaledTextSize * multiplier)
      ? `${baseTextSize * scaledTextSize * multiplier}${autoScale ? 'vw' : 'px'}`
      : undefined

   // Adjust line-height based on text size
   let calculatedLineHeight = '120%'

   if (size > 9) {
      calculatedLineHeight = '100%'
   } else if (size > 5) {
      calculatedLineHeight = '110%'
   }

   return ({
      fontSize,
      fontWeight: OIOContext.fontWeights[weight],
      lineHeight: props.lineHeight[breakpoint] || calculatedLineHeight,
      textTransform: uppercase ? 'uppercase' : undefined
   })
})

// ============================================================================
// Component
// ============================================================================

export default class Text extends React.Component {
   /* eslint-disable react/no-unused-prop-types */
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
      lineHeight: OIOResponsiveObjectPropType,
      size: OIOResponsiveObjectPropType,
      sizeMultiplier: PropTypes.number,
      style: PropTypes.object,
      textTransform: OIOResponsiveObjectPropType.isRequired,
      uppercase: PropTypes.bool,
      weight: OIOResponsiveObjectPropType.isRequired
   }
   /* eslint-enable */

   static defaultProps = {
      autoScale: false,
      baseFontSize: r`11px`,
      baseAutoScaleFontSize: r`2.5[a] 1.8[b] 1.5[c] 1[d] 0.75[e] 0.625[f]`,
      children: null,
      className: '',
      color: r``,
      fontFamily: r``,
      lineHeight: '120%',
      size: r`3`,
      sizeMultiplier: 1,
      style: {},
      uppercase: false,
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
         lineHeight,
         textTransform
      } = this.props

      const responsiveStyles = generateResponsiveStyles({
         color,
         fontFamily,
         fontSize,
         fontWeight,
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