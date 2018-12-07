// =======================================================
// OIOProvider
// All OIO components must be nested inside an OIOProvider
// You can nest OIOProvider inside other OIOProvider
// This component will be a Context provider in future PR
// =======================================================

import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import PropTypes from 'prop-types'
import { OIOContext } from './context'
import resetStyles from './resetStyles'

// Reset Styles
injectGlobal`${resetStyles}` // eslint-disable-line no-unused-expressions

export default class OIOProvider extends Component {
   static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      fontFamily: PropTypes.string,
      fontSize: PropTypes.string,
      fontWeights: PropTypes.object,
      style: PropTypes.object,
      textSizeScaleRatio: PropTypes.number,
      textSizeMultiplier: PropTypes.number
   }

   static defaultProps = {
      children: null,
      className: '',
      fontFamily: 'sans-serif',
      fontSize: '16px',
      fontWeights: {
         light: '300',
         normal: '400',
         medium: '500',
         semibold: '600',
         bold: '700'
      },
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
         fontWeights,
         style,
         textSizeScaleRatio,
         textSizeMultiplier
      } = this.props

      const contextProps = {
         fontFamily,
         fontSize,
         fontWeights,
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
