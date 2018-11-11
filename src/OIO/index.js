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
      style: PropTypes.object
   }

   static defaultProps = {
      children: null,
      className: '',
      fontFamily: 'sans-serif',
      fontSize: '16px',
      style: {}
   }

   render() {
      const { children, className, fontFamily, fontSize, style } = this.props

      return (
         <div
            className={className}
            style={{
               fontFamily,
               fontSize,
               ...style
            }}>
            {children}
         </div>
      )
   }
}
