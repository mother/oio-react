// =======================================================
// OIOProvider
// All OIO components must be nested inside an OIOProvider
// You can nest OIOProvider inside other OIOProvider
// This component will be a Context provider in future PR
// =======================================================

import React from 'react'
/** @jsx jsx */
import { Global, jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import OIOContext from './context'
import normalizationStyles from './normalizationStyles'

export default class OIOProvider extends React.Component {
   static propTypes = {
      buttonTextSize: PropTypes.object,
      buttonTextUppercase: PropTypes.bool,
      children: PropTypes.node,
      className: PropTypes.string,
      elementBorderRadius: PropTypes.object,
      elementHeights: PropTypes.object,
      fontFamily: PropTypes.string,
      fontSize: PropTypes.string,
      fontWeights: PropTypes.shape({
         light: PropTypes.string.isRequired,
         normal: PropTypes.string.isRequired,
         medium: PropTypes.string.isRequired,
         semibold: PropTypes.string.isRequired,
         bold: PropTypes.string.isRequired
      }),
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
         textSizeMultiplier,
         textSizeScaleRatio
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
         textSizeMultiplier,
         textSizeScaleRatio
      }

      return (
         <OIOContext.Provider value={contextProps}>
            <Global styles={normalizationStyles} />
            <div
               className={className}
               css={{ fontFamily, fontSize, ...style }}>
               {children}
            </div>
         </OIOContext.Provider>
      )
   }
}
