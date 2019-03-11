import React from 'react'
import { render } from 'react-testing-library'
import OIOProvider from '../../../src/OIOProvider'
import Text from '../../../src/Text'

test('Text will render at different sizes correctly', () => {
   const { container } = render(
      <OIOProvider>
         <Text size="1[a] 2[b] 3[c] 4[d] 5[e] 6[f]">
            Responsive Sizes
         </Text>
      </OIOProvider>
   )

   expect(container).toMatchSnapshot()
})

test('Text will render at autoScale sizes correctly', () => {
   const { container } = render(
      <OIOProvider>
         <Text size="1[a] 2[b] 3[c] 4[d] 5[e] 6[f]" autoScale>
            AutoScaled Responsive Sizes
         </Text>
      </OIOProvider>
   )

   expect(container).toMatchSnapshot()
})

test('Text will render at different font weights correctly', () => {
   const { container } = render(
      <OIOProvider>
         <Text weight="bold[a] semibold[b] medium[c] normal[d] light[e-f]">
            Text Weights
         </Text>
      </OIOProvider>
   )

   expect(container).toMatchSnapshot()
})

test('Text will render color correctly', () => {
   const { container } = render(
      <OIOProvider>
         <Text color="red[a-b] #ff0000[c-d] rgba(255,0,0,1)[e-f]">Red Text</Text>
      </OIOProvider>
   )

   expect(container).toMatchSnapshot()
})

test('Text will render text transforms correctly', () => {
   const { container } = render(
      <OIOProvider>
         <Text uppercase>Uppercase Text</Text>
         <Text capitalize>capitalized text</Text>
         <Text>Standard Case Text</Text>
      </OIOProvider>
   )

   expect(container).toMatchSnapshot()
})

test('Invalid prop values passed to Text component will be ignored', () => {
   const { container } = render(
      <OIOProvider>
         <Text
            size="The Wrong Size"
            weight="fakeWeight">
            Non Existing Font Weight
         </Text>
      </OIOProvider>
   )

   expect(container).toMatchSnapshot()
})
