import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import PropTypes from 'prop-types'
import { OIOContext } from './context'
import normalize from './normalize'

// Normalize
injectGlobal`${normalize}` // eslint-disable-line no-unused-expressions

export default class OIO extends Component {
   static propTypes = {
      buttonTextSize: PropTypes.object,
      buttonTextUppercase: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      elementBorderRadius: PropTypes.object,
      elementHeights: PropTypes.object,
      fontFamily: PropTypes.string,
      fontSize: PropTypes.string,
      fontWeights: PropTypes.object,
      highlightColor: PropTypes.string,
      style: PropTypes.object,
      textSizeScaleRatio: PropTypes.number,
      textSizeMultiplier: PropTypes.number
   }

   static defaultProps = {
      buttonTextSize: {
         lg: '3',
         md: '1.5',
         sm: '0.9',
         xs: '0.8'
      },
      buttonTextUppercase: false,
      children: null,
      className: '',
      elementBorderRadius: {
         lg: '4px',
         md: '4px',
         sm: '4px',
         xs: '4px'
      },
      elementHeights: {
         lg: '54px',
         md: '42px',
         sm: '36px',
         xs: '24px'
      },
      fontFamily: 'sans-serif',
      fontSize: '16px',
      fontWeights: {
         light: '300',
         normal: '400',
         medium: '500',
         semibold: '600',
         bold: '700'
      },
      highlightColor: '#2a383e',
      style: {},
      textSizeScaleRatio: 1.125,
      textSizeMultiplier: 1
   }

   render() {
      const {
         buttonTextSize,
         buttonTextUppercase,
         children,
         className,
         elementBorderRadius,
         elementHeights,
         fontFamily,
         fontSize,
         fontWeights,
         highlightColor,
         style,
         textSizeScaleRatio,
         textSizeMultiplier
      } = this.props

      const contextProps = {
         buttonTextSize,
         buttonTextUppercase,
         elementBorderRadius,
         elementHeights,
         fontFamily,
         fontSize,
         fontWeights,
         highlightColor,
         textSizeScaleRatio,
         textSizeMultiplier
      }

      return (
         <OIOContext.Provider value={contextProps}>
            <div
               className={className}
               style={{ fontFamily, fontSize, ...style }}>
               {children}
            </div>
         </OIOContext.Provider>
      )
   }
}
