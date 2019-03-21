import React from 'react'
import { render } from 'react-testing-library'
import OIOProvider from '../../../src/OIOProvider'
import View from '../../../src/View'

test('Refs are being forwarded correctly to View component', () => {
   const ref = React.createRef()
   render(
      <OIOProvider>
         <View id="test-view" ref={ref}>
            Hello World
         </View>
      </OIOProvider>
   )

   // If ref is not being forwarded correctly, ref.current will equal null
   expect(ref.current.tagName).toBe('DIV')
   expect(ref.current.getAttribute('id')).toBe('test-view')
   expect(ref.current.innerHTML).toBe('Hello World')
})
