import React from 'react'
import { Text } from '../../../src'

const TextWeightsSpecimen = () => (
   <div>
      <Text size="6" weight="bold">Hot Apple Cider (Bold)</Text>
      <Text size="6" weight="semibold">Hot Apple Cider (Semibold)</Text>
      <Text size="6" weight="medium">Hot Apple Cider (Medium)</Text>
      <Text size="6" weight="normal">Hot Apple Cider (Normal)</Text>
      <Text size="6" weight="light">Hot Apple Cider (Light)</Text>
   </div>
)

TextWeightsSpecimen.codeSnippet = `
// Text weights

<Text size="6" weight="bold">Hot Apple Cider (Bold)</Text>
<Text size="6" weight="semibold">Hot Apple Cider (Semibold)</Text>
<Text size="6" weight="medium">Hot Apple Cider (Medium)</Text>
<Text size="6" weight="normal">Hot Apple Cider (Normal)</Text>
<Text size="6" weight="light">Hot Apple Cider (Light)</Text>
`
export default TextWeightsSpecimen
