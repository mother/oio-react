// =======================================================
// Grid
// Rating: 3
// Fairly feature-complete, needs to be field-tested
// =======================================================

import React, { Component } from 'react'
import { css, cx } from 'emotion'
import PropTypes from 'prop-types'
import { GridContext } from './context'
import generateStyleObject from '../utils/generateStyleObject'

@generateStyleObject({
   calculatedProps: ({
      columns,
      spacing
   }) => ({
      width: `calc(100% + ${spacing})`,
      marginLeft: `-${spacing}`
   })
})

export default class Grid extends Component {
   /* eslint-disable */
   static propTypes = {
      children: PropTypes.node,
      className: PropTypes.string,
      columns: PropTypes.string,
      generatedStyleObject: PropTypes.object.isRequired,
      spacing: PropTypes.string,
      style: PropTypes.object,
   }
   /* eslint-enable */

   static defaultProps = {
      className: '',
      columns: '12',
      spacing: '18px',
      style: {}
   }

   render() {
      const { children, className, columns, generatedStyleObject, spacing, style } = this.props

      const styles = {
         float: 'left',
         width: '100%',
         ...generatedStyleObject,
         ...style
      }

      const contextProps = {
         columns,
         spacing
      }

      return (
         <GridContext.Provider value={contextProps}>
            <div className={cx(css(styles), className)}>
               {children}
            </div>
         </GridContext.Provider>
      )
   }
}
