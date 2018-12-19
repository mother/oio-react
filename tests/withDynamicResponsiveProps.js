import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-testing-library'
import OIOResponsiveObjectPropType from '../src/utils/PropType'
import generateResponsiveObject from '../src/utils/generateResponsiveObject'
import withDynamicResponsiveProps from '../src/utils/withDynamicResponsiveProps'
import { breakpointKeys } from '../config/constants'

// Test Fixture

const ResponsiveText = ({ breakpoint, fontSize, fontWeight, lineHeight, value }) => (
   <span style={{
      fontSize: fontSize && fontSize[breakpoint],
      fontWeight: fontWeight && fontWeight[breakpoint],
      lineHeight: lineHeight && lineHeight[breakpoint]
   }}>
      {value}
   </span>
)

ResponsiveText.propTypes = {
   breakpoint: PropTypes.oneOf(breakpointKeys).isRequired,
   fontSize: OIOResponsiveObjectPropType.isRequired,
   fontWeight: OIOResponsiveObjectPropType,
   lineHeight: OIOResponsiveObjectPropType,
   value: PropTypes.string.isRequired
}

ResponsiveText.defaultProps = {
   fontWeight: null,
   lineHeight: null
}

// Tests

test('Will work when creating dynamic props from props at each breakpoint', () => {
   // Make the line height and font weight proportional to the font size & screen size
   const DecoratedResponsiveText = withDynamicResponsiveProps((props, breakpoint) => {
      const fontSize = parseInt(props.fontSize[breakpoint], 10)
      const { fontWeightMultiplier, lineHeightMultiplier } = props
      const baseCharCode = 'a'.charCodeAt(0)
      const currentCharCode = breakpoint.charCodeAt(0)
      // eslint-disable-next-line no-mixed-operators
      const breakpointDiff = currentCharCode - baseCharCode + 1
      return ({
         fontWeight: fontSize * fontWeightMultiplier * breakpointDiff,
         lineHeight: fontSize * lineHeightMultiplier * breakpointDiff
      })
   })(ResponsiveText)

   DecoratedResponsiveText.defaultProps = {
      fontWeightMultiplier: 1,
      fontSize: generateResponsiveObject('9[ab] 10[cd] 11[ef]'),
      lineHeightMultiplier: 0.5
   }

   const { container } = render(
      <React.Fragment>
         <DecoratedResponsiveText breakpoint="a" value="A [fw=9*1*1] [lh=9*0.5*1]" />
         <DecoratedResponsiveText breakpoint="b" value="B [fw=9*1*2] [lh=9*0.5*2]" />
         <DecoratedResponsiveText breakpoint="c" value="C [fw=10*1*3] [lh=10*0.5*3]" />
         <DecoratedResponsiveText breakpoint="d" value="D [fw=10*1*4] [lh=10*0.5*4]" />
         <DecoratedResponsiveText breakpoint="e" value="E [fw=11*1*5] [lh=11*0.5*5]" />
         <DecoratedResponsiveText breakpoint="f" value="F [fw=11*1*6] [lh=11*0.5*6]" />
      </React.Fragment>
   )

   expect(container).toMatchSnapshot()
})

test('Will not fail if a dynamic prop is only defined on certain breakpoints', () => {
   // Make the line height and font weight proportional to the font size & screen size
   const DecoratedResponsiveText = withDynamicResponsiveProps((props, breakpoint) => ({
      fontWeight: ['b', 'd', 'f'].includes(breakpoint) ? '10' : undefined,
      lineHeight: ['c', 'f'].includes(breakpoint) ? '1.1' : undefined
   }))(ResponsiveText)

   DecoratedResponsiveText.defaultProps = {
      fontSize: generateResponsiveObject('9[ab] 10[cd] 11[ef]')
   }

   const { container } = render(
      <React.Fragment>
         <DecoratedResponsiveText breakpoint="a" value="A [fw=undefined] [lh=undefined]" />
         <DecoratedResponsiveText breakpoint="b" value="B [fw=10] [lh=undefined]" />
         <DecoratedResponsiveText breakpoint="c" value="C [fw=undefined] [lh=1.1]" />
         <DecoratedResponsiveText breakpoint="d" value="D [fw=10] [lh=undefined]" />
         <DecoratedResponsiveText breakpoint="e" value="E [fw=undefined] [lh=undefined]" />
         <DecoratedResponsiveText breakpoint="f" value="F [fw=10] [lh=1.1]" />
      </React.Fragment>
   )

   expect(container).toMatchSnapshot()
})
