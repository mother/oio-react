import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import PropTypes from 'prop-types'
import normalize from './normalize'

// Normalize
injectGlobal`${normalize}` // eslint-disable-line no-unused-expressions

export default class OIO extends Component {
   static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      fontFamily: PropTypes.string,
      fontSize: PropTypes.string,
      // fontWeights: PropTypes.object,
      style: PropTypes.object
   }

   static defaultProps = {
      children: null,
      className: '',
      fontFamily: 'sans-serif',
      fontSize: '16px',
      // fontWeights: {
      //    light: '300',
      //    normal: '400',
      //    medium: '500',
      //    semibold: '600',
      //    bold: '700'
      // },
      style: {}
   }

   componentDidMount() {
      const { fontSize } = this.props
      // Set Root Document font size (for font-sizes using rem units)
      document.documentElement.setAttribute('style', `font-size: ${fontSize}`)
   }

   render() {
      const { children, className, fontFamily, style } = this.props

      return (
         <div
            className={className}
            style={{
               fontFamily,
               ...style
            }}>
            {children}
         </div>
      )
   }
}
