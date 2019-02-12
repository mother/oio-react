import React from 'react'
import { Text } from '../../../src'

const TextAutoScaleSpecimen = () => (
   <div>
      <Text size="9" color="#111" weight="medium" autoScale>Salmon Leek Pasta</Text>
      <Text size="3" autoScale>For cozy winter nights</Text>
   </div>
)

TextAutoScaleSpecimen.codeSnippet = `
// Text with autoScale

<Text size="9" color="#111" weight="medium" autoScale>
   Salmon Leek Pasta
</Text>
<Text size="3" autoScale>
   For cozy winter nights
</Text>
`

export default TextAutoScaleSpecimen
