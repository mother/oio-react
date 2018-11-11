import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import PropTypes from 'prop-types'
import { OIOContext } from './context'
import normalize from './normalize'

// Normalize
injectGlobal`${normalize}` // eslint-disable-line no-unused-expressions

export default class OIO extends Component {
   static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      fontFamily: PropTypes.string,
      fontWeights: PropTypes.object,
      style: PropTypes.object,
      textSizeScaleRatio: PropTypes.number,
      textSizeMultiplier: PropTypes.number
   }

   static defaultProps = {
      children: null,
      className: '',
      fontFamily: 'sans-serif',
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
         fontWeights,
         style,
         textSizeScaleRatio,
         textSizeMultiplier
      } = this.props

      const contextProps = {
         fontFamily,
         fontWeights,
         textSizeScaleRatio,
         textSizeMultiplier
      }

      return (
         <OIOContext.Provider value={contextProps}>
            <div
               className={className}
               style={{ fontFamily, ...style }}>
               {children}
            </div>
         </OIOContext.Provider>
      )
   }
}
