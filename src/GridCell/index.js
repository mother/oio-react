// =======================================================
// Grid
// Rating: 3
// Fairly feature-complete, needs to be field-tested
// =======================================================

import React, { Component } from 'react'
import { css, cx } from 'emotion'
import PropTypes from 'prop-types'
import { withGridContext } from '../Grid/context'
import generateStyleObject from '../utils/generateStyleObject'

@withGridContext
@generateStyleObject(({
   colspan,
   gridContext
}) => {
   const spacing = gridContext.spacing
   const cellWidth = (colspan / gridContext.columns) * 100

   return ({
      width: `calc(${cellWidth}% - ${spacing})`,
      marginBottom: spacing,
      marginLeft: spacing
   })
})

export default class GridCell extends Component {
   /* eslint-disable */
   static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      colspan: PropTypes.string,
      generatedStyleObject: PropTypes.object.isRequired,
      style: PropTypes.object,
   }
   /* eslint-enable */

   static defaultProps = {
      className: '',
      colspan: '1',
      style: {}
   }

   render() {
      const styles = {
         float: 'left',
         width: '100%',
         ...this.props.style,
         ...this.props.generatedStyleObject
      }

      return (
         <div className={cx(css(styles), this.props.className)}>
            {this.props.children}
         </div>
      )
   }
}
