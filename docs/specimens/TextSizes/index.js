import React from 'react'
import { Text, View } from '../../../src'

const TextSizesSpecimen = () => (
   <View padding="30px" backgroundColor="#f5f5f5">
      <Text size="15">Size 15 Text</Text>
      <Text size="14">Size 14 Text</Text>
      <Text size="13">Size 13 Text</Text>
      <Text size="12">Size 12 Text</Text>
      <Text size="11">Size 11 Text</Text>
      <Text size="10">Size 10 Text</Text>
      <Text size="9">Size 9 Text</Text>
      <Text size="8">Size 8 Text</Text>
      <Text size="7">Size 7 Text</Text>
      <Text size="6">Size 6 Text</Text>
      <Text size="5">Size 5 Text</Text>
      <Text size="4">Size 4 Text</Text>
      <Text size="2">Size 2 Text</Text>
      <Text size="1">Size 1 Text</Text>
   </View>
)

TextSizesSpecimen.title = 'Text Sizes'

TextSizesSpecimen.description = 'You can set the size of the <code>Text</code> component by using the prop <code>size</code>. The default size for the Text component is <code>3</code>. As a general guideline, when using multiple text sizes, it recommended to use sizes at least 3 size units apart (ie. 3,6,9). This helps create better legebility and visual hierarchy.'

TextSizesSpecimen.codeSnippet = `
// Text, sizes 1 to 15!

<Text size="15">Size 15 Text</Text>
<Text size="14">Size 14 Text</Text>
<Text size="13">Size 13 Text</Text>
<Text size="12">Size 12 Text</Text>
<Text size="11">Size 11 Text</Text>
<Text size="10">Size 10 Text</Text>
<Text size="9">Size 9 Text</Text>
<Text size="8">Size 8 Text</Text>
<Text size="7">Size 7 Text</Text>
<Text size="6">Size 6 Text</Text>
<Text size="5">Size 5 Text</Text>
<Text size="4">Size 4 Text</Text>
<Text size="3">Size 3 Text</Text>
<Text size="2">Size 2 Text</Text>
<Text size="1">Size 1 Text</Text>
`

export default TextSizesSpecimen
