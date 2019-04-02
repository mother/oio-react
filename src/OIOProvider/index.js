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
      fontWeightLight: PropTypes.string.isRequired,
      fontWeightNormal: PropTypes.string.isRequired,
      fontWeightMedium: PropTypes.string.isRequired,
      fontWeightSemibold: PropTypes.string.isRequired,
      fontWeightBold: PropTypes.string.isRequired,
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
      className: undefined,
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
      fontWeightLight: '300',
      fontWeightNormal: '400',
      fontWeightMedium: '500',
      fontWeightSemibold: '600',
      fontWeightBold: '700',
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
         fontWeightLight,
         fontWeightNormal,
         fontWeightMedium,
         fontWeightSemibold,
         fontWeightBold,
         highlightColor,
         style,
         textSizeMultiplier,
         textSizeScaleRatio
      } = this.props

      // Props available to OIO Context Consumer
      const contextProps = {
         buttonTextSize,
         buttonTextUppercase,
         elementBorderRadius,
         elementHeights,
         fontFamily,
         fontSize,
         fontWeightLight,
         fontWeightNormal,
         fontWeightMedium,
         fontWeightSemibold,
         fontWeightBold,
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
