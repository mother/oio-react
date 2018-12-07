// =======================================================
// OIOProvider
// All OIO components must be nested inside an OIOProvider
// You can nest OIOProvider inside other OIOProvider
// This component will be a Context provider in future PR
// =======================================================

import React, { Component } from 'react'
import { injectGlobal } from 'emotion'
import PropTypes from 'prop-types'
import normalizationStyles from './normalizationStyles'

export default class OIOProvider extends Component {
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

   componentDidMount() {
      // Reset Styles
      // TODO: Upgrade to emotion 10 to use <Global /> component
      // The following will inject styles globally and remain even
      // if this component is unmounted
      injectGlobal`${normalizationStyles}` // eslint-disable-line no-unused-expressions
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
