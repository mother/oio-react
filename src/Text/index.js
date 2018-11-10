import React, { Component } from 'react'
import { css, cx } from 'emotion'
import PropTypes from 'prop-types'
import generateStyleObject from '../utils/generators'

@generateStyleObject(({
   autoScale,
   baseFontSize,
   baseAutoScaleFontSize,
   color,
   fontFamily,
   scaleRatio,
   size,
   uppercase,
   weight
}) => {
   // Dynamically calculate font size
   const floatScaleRatio = parseFloat(scaleRatio)
   const adjustedTextSize = size < 1 ? floatScaleRatio * size : floatScaleRatio ** size
   let textSizeCoefficient = autoScale ? baseAutoScaleFontSize : baseFontSize
   textSizeCoefficient = uppercase ? textSizeCoefficient *= 0.9 : textSizeCoefficient

   return ({
      color,
      fontFamily,
      fontSize: `${textSizeCoefficient * adjustedTextSize}${autoScale ? 'vw' : 'px'}`,
      fontWeight: weight,
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
      calculatedStyleProps: PropTypes.object.isRequired,
      children: PropTypes.node,
      className: PropTypes.string,
      color: PropTypes.string,
      fontFamily: PropTypes.string,
      scaleRatio: PropTypes.string,
      size: PropTypes.string,
      style: PropTypes.object,
      uppercase: PropTypes.bool,
      weight: PropTypes.string
   }
   /* eslint-enable */

   static defaultProps = {
      autoScale: false,
      baseFontSize: '16',
      baseAutoScaleFontSize: '4[a] 2.5[b] 1.75[c] 1.25[d] 1[e] 0.9[f]',
      scaleRatio: '1.125',
      size: '1',
      style: {},
      uppercase: false,
      weight: 'normal'
   }

   render() {
      const styles = {
         ...this.props.style,
         ...this.props.calculatedStyleProps
      }

      return (
         <div className={cx(css(styles), this.props.className)}>
            {this.props.children}
         </div>
      )
   }
}
