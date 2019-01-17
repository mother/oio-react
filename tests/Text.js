import React from 'react'
import serializer from 'jest-emotion'
import { render } from 'react-testing-library'
import OIOProvider from '../src/OIOProvider'
import Text from '../src/Text'

// To show emotion styles in snapshot teset
expect.addSnapshotSerializer(serializer)

test('Text will render at different sizes correctly', () => {
   const { container } = render(
      <OIOProvider>
         <Text size="1">Size 1</Text>
         <Text size="2">Size 2</Text>
         <Text size="3">Size 3</Text>
         <Text size="4">Size 4</Text>
         <Text size="5">Size 5</Text>
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
         <Text size="1" autoScale>AutoScaled Size 1</Text>
         <Text size="2" autoScale>AutoScaled Size 2</Text>
         <Text size="3" autoScale>AutoScaled Size 3</Text>
         <Text size="4" autoScale>AutoScaled Size 4</Text>
         <Text size="5" autoScale>AutoScaled Size 5</Text>
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
         <Text weight="bold">Bold</Text>
         <Text weight="semibold">Semibold</Text>
         <Text weight="medium">Medium</Text>
         <Text weight="normal">Normal</Text>
         <Text weight="light">Light</Text>
         <Text weight="fakeWeight">Non Existing Font Weight</Text>
      </OIOProvider>
   )

   expect(container).toMatchSnapshot()
})

test('Text will render color correctly', () => {
   const { container } = render(
      <OIOProvider>
         <Text color="red">Red Text</Text>
         <Text color="#ff0000">Red Text</Text>
         <Text color="rgba(255,0,0,1)">Red Text</Text>
      </OIOProvider>
   )

   expect(container).toMatchSnapshot()
})

test('Text will render uppercase prop correctly', () => {
   const { container } = render(
      <OIOProvider>
         <Text uppercase>Uppercase Text</Text>
         <Text>Standard Case Text</Text>
      </OIOProvider>
   )

   expect(container).toMatchSnapshot()
})

test('Text will render incorrect prop values safely', () => {
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
