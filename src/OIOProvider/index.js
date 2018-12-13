// =======================================================
// OIOProvider
// All OIO components must be nested inside an OIOProvider
// You can nest OIOProvider inside other OIOProvider
// This component will be a Context provider in future PR
// =======================================================

import React, { Component } from 'react'
import { css, cx, injectGlobal } from 'emotion'
import PropTypes from 'prop-types'
import normalizationStyles from './normalizationStyles'
import generateResponsiveStyles from '../utils/generateResponsiveStyles'
import OIOResponsiveObjectPropType from '../utils/PropType'
import r from '../../macro'

export default class OIOProvider extends Component {
   static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      fontFamily: OIOResponsiveObjectPropType,
      fontSize: PropTypes.string,
      style: PropTypes.object
   }

   static defaultProps = {
      children: null,
      className: '',
      fontFamily: r`sans-serif`,
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
      const { children, className, fontSize, style } = this.props

      // Responsive Styles
      const { fontFamily } = this.props
      const responsiveStyles = generateResponsiveStyles({ fontFamily })

      return (
         <div
            className={cx(css(responsiveStyles), className)}
            style={{
               fontSize,
               ...style
            }}>
            {children}
         </div>
      )
   }
}
