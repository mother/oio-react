import React from 'react'
import { Text, View } from '../../../src'

const TextColorsSpecimen = () => (
   <View padding="30px" backgroundColor="#f5f5f5">
      <Text size="6" color="#4DB6AC" weight="medium">
         Rainy Spring Day
      </Text>
      <Text size="6" color="rgb(0, 150, 136)" weight="medium">
         Blue Skies at Summertime
      </Text>
      <Text size="6" color="hsl(173, 100%, 23%)" weight="medium">
         The Fall Foliage
      </Text>
      <Text size="6" color="teal" weight="medium">
         Cold Winds of Winter
      </Text>
   </View>
)

TextColorsSpecimen.title = 'Text Color'

TextColorsSpecimen.description = 'You can set the color of the <code>Text</code> component by using the prop <code>color</code>. Any css compatible color values are valid.'

TextColorsSpecimen.codeSnippet = `
// Using hex color
<Text size="6" color="#4DB6AC" weight="medium">
   Rainy Spring Day
</Text>

// Using rgb color
<Text size="6" color="rgb(0, 150, 136)" weight="medium">
   Sunshine at Summertime
</Text>

// Using hsl color
<Text size="6" color="hsl(173, 100%, 23%)" weight="medium">
   The Fall Foliage
</Text>

// Using standard web color names
<Text size="6" color="teal" weight="medium">
   Cold Winds of Winter
</Text>
`

export default TextColorsSpecimen
