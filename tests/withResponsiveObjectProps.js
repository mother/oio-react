import React from 'react'
import PropTypes from 'prop-types'
import { render } from 'react-testing-library'
import OIOResponsiveObjectPropType from '../src/utils/PropType'
import withResponsiveObjectProps from '../src/utils/withResponsiveObjectProps'

jest.mock('../src/utils/generateResponsiveObject', () => {
   const generateResponsiveObject = jest.requireActual('../src/utils/generateResponsiveObject')
   return jest.fn(generateResponsiveObject)
})

// eslint-disable-next-line import/first
import generateResponsiveObject from '../src/utils/generateResponsiveObject'

afterEach(() => {
   jest.clearAllMocks()
})

let ResponsiveTextTest = ({ children, fontFamily, fontSize }) => (
   <span data-testid="span" style={{ fontFamily: fontFamily.c, fontSize: fontSize.d }}>
      {children}
   </span>
)

ResponsiveTextTest.propTypes = {
   children: PropTypes.node.isRequired,
   fontFamily: OIOResponsiveObjectPropType.isRequired,
   fontSize: OIOResponsiveObjectPropType.isRequired
}

ResponsiveTextTest = withResponsiveObjectProps(['fontFamily', 'fontSize'])(ResponsiveTextTest)

test('Will run `generateResponsiveObject` on props that aren\'t responsive objects (All Props)', () => {
   const { getByTestId } = render(
      <ResponsiveTextTest fontFamily="sans-serif" fontSize="12px">
         Gopher
      </ResponsiveTextTest>
   )

   expect(getByTestId('span')).toHaveStyle(`
      font-family: sans-serif;
      font-size: 12px;
   `)

   expect(generateResponsiveObject).toHaveBeenCalledTimes(2)
   expect(generateResponsiveObject.mock.calls[0][0]).toBe('sans-serif')
   expect(generateResponsiveObject.mock.calls[1][0]).toBe('12px')
})

test('Will only run `generateResponsiveObject` on props that aren\'t responsive objects (Mixed)', () => {
   const { getByTestId } = render(
      <ResponsiveTextTest fontFamily="serif" fontSize={{ d: '16pt', breakpointsWereSet: true }}>
         Gopher
      </ResponsiveTextTest>
   )

   expect(getByTestId('span')).toHaveStyle(`
      font-family: serif;
      font-size: 16pt;
   `)

   expect(generateResponsiveObject).toHaveBeenCalledTimes(1)
   expect(generateResponsiveObject.mock.calls[0][0]).toBe('serif')
})
