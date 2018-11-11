// =======================================================
// Text
// Foundational component that is used as Root
// component for may other OIO components
// Rating: 3
// Fairly feature-complete, needs to be field-tested
// =======================================================

import React, { Component } from 'react'
import { css, cx } from 'emotion'
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

   return ({
      color,
      fontFamily,
      fontSize: `${baseTextSize * scaledTextSize * multiplier}${autoScale ? 'vw' : 'px'}`,
      fontWeight: OIOContext.fontWeights[weight],
      lineHeight: size > 5 ? '120%' : '130%',
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
      fontFamily: PropTypes.string,
      generatedStyleObject: PropTypes.object.isRequired,
      size: PropTypes.string,
      sizeMultiplier: PropTypes.number,
      style: PropTypes.object,
      uppercase: PropTypes.bool,
      weight: PropTypes.string
   }
   /* eslint-enable */

   static defaultProps = {
      autoScale: false,
      baseFontSize: '16px',
      baseAutoScaleFontSize: '4[a] 2.5[b] 1.75[c] 1.25[d] 1[e] 0.85[f]',
      size: '1',
      sizeMultiplier: 1,
      style: {},
      uppercase: false,
      weight: 'normal'
   }

   render() {
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
