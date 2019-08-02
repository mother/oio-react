import React from 'react'
import { Text, View } from '../../../src'

const TextWeightsSpecimen = () => (
   <View padding="30px" backgroundColor="#f5f5f5">
      <Text size="6" weight="bold">Hot Apple Cider (Bold)</Text>
      <Text size="6" weight="semibold">Hot Apple Cider (Semibold)</Text>
      <Text size="6" weight="medium">Hot Apple Cider (Medium)</Text>
      <Text size="6" weight="normal">Hot Apple Cider (Normal)</Text>
      <Text size="6" weight="light">Hot Apple Cider (Light)</Text>
   </View>
)

TextWeightsSpecimen.title = 'Text Weights'

TextWeightsSpecimen.description = 'You can set the weight of the <code>Text</code> component by using the prop <code>weight</code>. The default weight for the Text component is <code>normal</code>.'

TextWeightsSpecimen.codeSnippet = `
// Text weights

<Text size="6" weight="bold">Hot Apple Cider (Bold)</Text>
<Text size="6" weight="semibold">Hot Apple Cider (Semibold)</Text>
<Text size="6" weight="medium">Hot Apple Cider (Medium)</Text>
<Text size="6" weight="normal">Hot Apple Cider (Normal)</Text>
<Text size="6" weight="light">Hot Apple Cider (Light)</Text>
`
export default TextWeightsSpecimen
