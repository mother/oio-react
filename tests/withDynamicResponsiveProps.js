import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-testing-library'
import OIOResponsiveObjectPropType from '../src/utils/PropType'
import generateResponsiveObject from '../src/utils/generateResponsiveObject'
import withDynamicResponsiveProps from '../src/utils/withDynamicResponsiveProps'
import { breakpointKeys } from '../config/constants'

// Test Fixture

const UndecoratedResponsiveText = ({ breakpoint, fontSize, fontWeight, lineHeight, value }) => (
   <span style={{
      fontSize: fontSize && fontSize[breakpoint],
      fontWeight: fontWeight && fontWeight[breakpoint],
      lineHeight: lineHeight && lineHeight[breakpoint]
   }}>
      {value}
   </span>
)

UndecoratedResponsiveText.propTypes = {
   breakpoint: PropTypes.oneOf(breakpointKeys).isRequired,
   fontSize: OIOResponsiveObjectPropType.isRequired,
   fontWeight: OIOResponsiveObjectPropType,
   lineHeight: OIOResponsiveObjectPropType,
   value: PropTypes.string.isRequired
}

UndecoratedResponsiveText.defaultProps = {
   fontWeight: null,
   lineHeight: null
}

// Tests

test('Will work when creating dynamic props from props at each breakpoint', () => {
   // Make the line height and font weight proportional to the font size & screen size
   const ResponsiveText = withDynamicResponsiveProps((props, breakpoint) => {
      const { fontWeightMultiplier, lineHeightMultiplier } = props
      const fontSize = parseInt(props.fontSize[breakpoint], 10)
      const baseCharCode = 'a'.charCodeAt(0)
      const currentCharCode = breakpoint.charCodeAt(0)
      // eslint-disable-next-line no-mixed-operators
      const breakpointDiff = currentCharCode - baseCharCode + 1
      return ({
         fontWeight: fontSize * fontWeightMultiplier * breakpointDiff,
         lineHeight: fontSize * lineHeightMultiplier * breakpointDiff
      })
   })(UndecoratedResponsiveText)

   ResponsiveText.defaultProps = {
      fontWeightMultiplier: 1,
      fontSize: generateResponsiveObject('9[ab] 10[cd] 11[ef]'),
      lineHeightMultiplier: 0.5
   }

   const { container } = render(
      <React.Fragment>
         <ResponsiveText breakpoint="a" value="A [fontWeight=9*1*1] [lineHeight=9*0.5*1]" />
         <ResponsiveText breakpoint="b" value="B [fontWeight=9*1*2] [lineHeight=9*0.5*2]" />
         <ResponsiveText breakpoint="c" value="C [fontWeight=10*1*3] [lineHeight=10*0.5*3]" />
         <ResponsiveText breakpoint="d" value="D [fontWeight=10*1*4] [lineHeight=10*0.5*4]" />
         <ResponsiveText breakpoint="e" value="E [fontWeight=11*1*5] [lineHeight=11*0.5*5]" />
         <ResponsiveText breakpoint="f" value="F [fontWeight=11*1*6] [lineHeight=11*0.5*6]" />
      </React.Fragment>
   )

   expect(container).toMatchSnapshot()
})

test('Will not fail if a dynamic prop is only defined on certain breakpoints', () => {
   // Make the line height and font weight proportional to the font size & screen size
   const ResponsiveText = withDynamicResponsiveProps((props, breakpoint) => ({
      fontWeight: ['b', 'd', 'f'].includes(breakpoint) ? '10' : undefined,
      lineHeight: ['c', 'f'].includes(breakpoint) ? '1.1' : undefined
   }))(UndecoratedResponsiveText)

   ResponsiveText.defaultProps = {
      fontSize: generateResponsiveObject('9[ab] 10[cd] 11[ef]')
   }

   const { container } = render(
      <React.Fragment>
         <ResponsiveText breakpoint="a" value="A [fontWeight=undefined] [lineHeight=undefined]" />
         <ResponsiveText breakpoint="b" value="B [fontWeight=10] [lineHeight=undefined]" />
         <ResponsiveText breakpoint="c" value="C [fontWeight=undefined] [lineHeight=1.1]" />
         <ResponsiveText breakpoint="d" value="D [fontWeight=10] [lineHeight=undefined]" />
         <ResponsiveText breakpoint="e" value="E [fontWeight=undefined] [lineHeight=undefined]" />
         <ResponsiveText breakpoint="f" value="F [fontWeight=10] [lineHeight=1.1]" />
      </React.Fragment>
   )

   expect(container).toMatchSnapshot()
})
