import React, { Component } from 'react'
import createEmotion from 'create-emotion'
import PropTypes from 'prop-types'
import { OIOContext } from './context'
import normalize from './normalize'

export default class OIO extends Component {
   static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      fontFamily: PropTypes.string,
      fontSize: PropTypes.string,
      fontWeights: PropTypes.object,
      nonce: PropTypes.string,
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
      nonce: undefined,
      style: {},
      textSizeScaleRatio: 1.125,
      textSizeMultiplier: 1
   }

   constructor(props) {
      super(props)
      this.emotion = createEmotion({
         nonce: props.nonce
      })

      // eslint-disable-next-line no-unused-expressions
      this.emotion.injectGlobal`${normalize}`
   }

   emotion = null

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
         emotion: this.emotion,
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
