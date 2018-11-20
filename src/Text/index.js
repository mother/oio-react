// =======================================================
// Text
// Foundational component that is used as Root
// component for may other OIO components
// Rating: 3
// Fairly feature-complete, needs to be field-tested
// =======================================================

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withOIOContext } from '../OIO/context'
import generateStyleObject from '../utils/generateStyleObject'

@withOIOContext
@generateStyleObject(({
   autoScale,
   baseFontSize,
   baseAutoScaleFontSize,
   color,
   fontFamily,
   lineHeight,
   OIOContext,
   size,
   sizeMultiplier,
   uppercase,
   weight
}) => {
   // CALCULATE REAL FONT SIZE
   // Dynamically calculate font size - this is a number based on a combination of
   // text size, scaling ratios and multipliers (multipliers are useful for theming)
   const textSizeScaleRatio = OIOContext.textSizeScaleRatio
   const scaledTextSize = size > 1 ? textSizeScaleRatio ** size : textSizeScaleRatio * size
   const multiplier = sizeMultiplier * OIOContext.textSizeMultiplier * (uppercase ? 0.9 : 1)
   const baseTextSize = autoScale ? parseFloat(baseAutoScaleFontSize) : parseFloat(baseFontSize)
   let calculatedLineHeight = '120%'

   if (size > 9) {
      calculatedLineHeight = '100%'
   } else if (size > 5) {
      calculatedLineHeight = '110%'
   }

   return ({
      color,
      fontFamily,
      fontSize: `${baseTextSize * scaledTextSize * multiplier}${autoScale ? 'vw' : 'px'}`,
      fontWeight: OIOContext.fontWeights[weight],
      lineHeight: lineHeight || calculatedLineHeight,
      textTransform: uppercase && 'uppercase'
   })
})

export default class Text extends Component {
   /* eslint-disable */
   static propTypes = {
      autoScale: PropTypes.bool,
      baseFontSize: PropTypes.string,
      baseAutoScaleFontSize: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      color: PropTypes.string,
      // TODO: USE REAL EMOTION INSTANCE
      emotion: PropTypes.object.isRequired,
      fontFamily: PropTypes.string,
      generatedStyleObject: PropTypes.object.isRequired,
      lineHeight: PropTypes.string,
      size: PropTypes.string,
      sizeMultiplier: PropTypes.number,
      style: PropTypes.object,
      uppercase: PropTypes.bool,
      weight: PropTypes.string
   }
   /* eslint-enable */

   static defaultProps = {
      autoScale: false,
      baseFontSize: '11px',
      baseAutoScaleFontSize: '2.5[a] 1.8[b] 1.5[c] 1[d] 0.75[e] 0.625[f]',
      className: '',
      size: '3',
      sizeMultiplier: 1,
      style: {},
      uppercase: false,
      weight: 'normal'
   }

   render() {
      const { css, cx } = this.props.emotion
      const styles = {
         ...this.props.style,
         ...this.props.generatedStyleObject
      }

      return (
         <div className={cx(css(styles), this.props.className)}>
            {this.props.children}
         </div>
      )
   }
}
