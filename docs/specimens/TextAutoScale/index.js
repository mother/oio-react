import React from 'react'
import { Text, View } from '../../../src'

const TextAutoScaleSpecimen = () => (
   <View padding="30px" backgroundColor="#f5f5f5">
      <Text size="7" color="#111" weight="medium" autoScale>Salmon Leek Pasta</Text>
      <Text size="3" autoScale>For cozy winter nights</Text>
   </View>
)

TextAutoScaleSpecimen.title = 'Text Sizes with Autoscale'

TextAutoScaleSpecimen.description = 'Sometimes, you might want to have text that scales proportionally to the current browser window size. This is especially useful for larger text elements like titles and headings. <br /><br /> You can make the <code>Text</code> component scale proportionally by setting the prop <code>autoScale</code> to <code>true</code>. Resize your browser window and you can see how the text below scales accordingly.'

TextAutoScaleSpecimen.codeSnippet = `
// Text with autoScale

<Text size="7" color="#111" weight="medium" autoScale>
   Salmon Leek Pasta
</Text>
<Text size="3" autoScale>
   For cozy winter nights
</Text>
`

export default TextAutoScaleSpecimen
