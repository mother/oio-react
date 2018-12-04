// =======================================================
// View
// Foundational component for structuring layouts
// Rating: ?
// Code to be simplified
// =======================================================

import React, { Component } from 'react'
import { css, cx } from 'emotion'
import PropTypes from 'prop-types'
import generateStyleObject from '../utils/generateStyleObject'

const noTransformProps = [
   'display', 'float', 'position', 'top', 'left', 'right', 'bottom',
   'flex', 'flexFlow', 'justifyContent', 'alignItems',
   'height', 'width', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth',
   'margin', 'marginBottom', 'marginLeft', 'marginRight', 'marginTop',
   'padding', 'paddingBottom', 'paddingLeft', 'paddingRight', 'paddingTop',
   'border', 'borderBottom', 'borderLeft', 'borderRight', 'borderTop',
   'backgroundColor', 'backgroundImage', 'backgroundPosition', 'backgroundSize',
   'borderRadius', 'textAlign'
]

@generateStyleObject({
   calculatedProps: (props) => {
      const styleObject = {}

      noTransformProps.forEach((prop) => {
         styleObject[prop] = props[prop]
      })

      if (props.scroll === 'on') {
         styleObject.overflow = 'auto'
         styleObject['-webkit-overflow-scrolling'] = 'touch'
      }

      if (props.paddingHorizontal) {
         styleObject.paddingLeft = props.paddingHorizontal
         styleObject.paddingRight = props.paddingHorizontal
      }

      if (props.paddingVertical) {
         styleObject.paddingTop = props.paddingVertical
         styleObject.paddingBottom = props.paddingVertical
      }

      return styleObject
   }
})

export default class View extends Component {
   /* eslint-disable */
   static propTypes = {
      alignItems: PropTypes.string,
      backgroundColor: PropTypes.string,
      backgroundImage: PropTypes.string,
      backgroundPosition: PropTypes.string,
      backgroundSize: PropTypes.string,
      border: PropTypes.string,
      borderTop: PropTypes.string,
      borderRadius: PropTypes.string,
      borderRight: PropTypes.string,
      borderBottom: PropTypes.string,
      borderLeft: PropTypes.string,
      children: PropTypes.node,
      className: PropTypes.string,
      display: PropTypes.string,
      flex: PropTypes.string,
      flexFlow: PropTypes.string,
      float: PropTypes.string,
      generatedStyleObject: PropTypes.object.isRequired,
      height: PropTypes.string,
      justifyContent: PropTypes.string,
      margin: PropTypes.string,
      marginTop: PropTypes.string,
      marginLeft: PropTypes.string,
      marginRight: PropTypes.string,
      marginBottom: PropTypes.string,
      minHeight: PropTypes.string,
      maxHeight: PropTypes.string,
      minWidth: PropTypes.string,
      maxWidth: PropTypes.string,
      onClick: PropTypes.func,
      onScroll: PropTypes.func,
      padding: PropTypes.string,
      paddingTop: PropTypes.string,
      paddingLeft: PropTypes.string,
      paddingRight: PropTypes.string,
      paddingBottom: PropTypes.string,
      paddingHorizontal: PropTypes.string,
      paddingVertical: PropTypes.string,
      position: PropTypes.string,
      scroll: PropTypes.string,
      style: PropTypes.object,
      textAlign: PropTypes.string,
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      width: PropTypes.string,
   }
   /* eslint-enable */

   static defaultProps = {
      display: 'block',
      onScroll: () => {},
      position: 'relative',
      style: {}
   }

   render() {
      const styles = {
         ...this.props.style,
         ...this.props.generatedStyleObject
      }

      return (
         <div
            ref={(node) => { this.node = node }}
            className={cx(css(styles), this.props.className)}
            onClick={this.props.onClick}
            onScroll={this.props.onScroll}>
            {this.props.children}
         </div>
      )
   }
}
