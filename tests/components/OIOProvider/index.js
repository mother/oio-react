import React from 'react'
import { render } from 'react-testing-library'
import OIOProvider from '../../../src/OIOProvider'

test('OIO Provider renders as expected', () => {
   const { baseElement } = render(
      <OIOProvider>
         Hello World
      </OIOProvider>
   )

   expect(baseElement).toMatchSnapshot()
})
