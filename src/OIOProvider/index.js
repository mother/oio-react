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
      fontWeights: PropTypes.shape({
         light: PropTypes.string.isRequired,
         normal: PropTypes.string.isRequired,
         medium: PropTypes.string.isRequired,
         semibold: PropTypes.string.isRequired,
         bold: PropTypes.string.isRequired
      }),
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
         textSizeMultiplier,
         textSizeScaleRatio
      } = this.props

      const contextProps = {
         fontFamily,
         fontSize,
         fontWeights,
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
