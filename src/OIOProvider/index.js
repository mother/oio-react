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
      children: PropTypes.node,
      className: PropTypes.string,
      fontFamily: PropTypes.string,
      fontSize: PropTypes.string,
      fontWeightLight: PropTypes.string,
      fontWeightNormal: PropTypes.string,
      fontWeightMedium: PropTypes.string,
      fontWeightSemibold: PropTypes.string,
      fontWeightBold: PropTypes.string,
      formElementAppearance: PropTypes.oneOf(['outline', 'plain']),
      formElementBorderColor: PropTypes.string,
      formElementBorderRadius: PropTypes.string,
      formElementBorderWidth: PropTypes.string,
      formElementBackgroundColor: PropTypes.string,
      formElementFocusBackgroundColor: PropTypes.string,
      formElementFocusBorderColor: PropTypes.string,
      formElementTextColor: PropTypes.string,
      formLabelTextColor: PropTypes.string,
      formLabelTextSize: PropTypes.string,
      formLabelTextTransform: PropTypes.string,
      formLabelTextWeight: PropTypes.string,
      highlightColor: PropTypes.string,
      style: PropTypes.object,
      textSizeScaleRatio: PropTypes.number,
      textSizeMultiplier: PropTypes.number
   }

   static defaultProps = {
      children: null,
      className: undefined,
      fontFamily: 'sans-serif',
      fontSize: '16px',
      fontWeightLight: '300',
      fontWeightNormal: '400',
      fontWeightMedium: '500',
      fontWeightSemibold: '600',
      fontWeightBold: '700',
      formElementAppearance: 'outline',
      formElementBorderColor: '#ddd',
      formElementBorderRadius: '3px',
      formElementBorderWidth: '2px',
      formElementBackgroundColor: 'transparent',
      formElementFocusBackgroundColor: 'rgba(0,0,0,0.01)',
      formElementFocusBorderColor: '#888',
      formElementTextColor: '#333',
      formLabelTextColor: '#444',
      formLabelTextSize: '0.8',
      formLabelTextTransform: 'uppercase',
      formLabelTextWeight: 'bold',
      highlightColor: '#2a383e',
      style: {},
      textSizeScaleRatio: 1.125,
      textSizeMultiplier: 1
   }

   render() {
      const {
         children,
         className,
         fontFamily,
         fontSize,
         fontWeightLight,
         fontWeightNormal,
         fontWeightMedium,
         fontWeightSemibold,
         fontWeightBold,
         formElementAppearance,
         formElementBorderColor,
         formElementBorderRadius,
         formElementBorderWidth,
         formElementBackgroundColor,
         formElementFocusBackgroundColor,
         formElementFocusBorderColor,
         formElementTextColor,
         formLabelTextColor,
         formLabelTextSize,
         formLabelTextTransform,
         formLabelTextWeight,
         highlightColor,
         style,
         textSizeMultiplier,
         textSizeScaleRatio
      } = this.props

      // Props available to OIO Context Consumer
      const contextProps = {
         fontFamily,
         fontSize,
         fontWeightLight,
         fontWeightNormal,
         fontWeightMedium,
         fontWeightSemibold,
         fontWeightBold,
         formElementAppearance,
         formElementBorderColor,
         formElementBorderRadius,
         formElementBorderWidth,
         formElementBackgroundColor,
         formElementFocusBackgroundColor,
         formElementFocusBorderColor,
         formElementTextColor,
         formLabelTextColor,
         formLabelTextSize,
         formLabelTextTransform,
         formLabelTextWeight,
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
