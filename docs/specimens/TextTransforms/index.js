import React from 'react'
import { Text, View } from '../../../src'

const TextTransformsSpecimen = () => (
   <View padding="30px" backgroundColor="#f5f5f5">
      <Text size="5">no text transforms</Text>
      <Text size="5" transform="capitalize">capitalized text</Text>
      <Text size="5" transform="lowercase">Lowercase Text</Text>
      <Text size="5" transform="uppercase">uppercase text</Text>
   </View>
)

TextTransformsSpecimen.title = 'Text Transforms'

TextTransformsSpecimen.description = 'You can set text transformations on <code>Text</code> content to be capitalized or uppercase.'

TextTransformsSpecimen.codeSnippet = `
<Text size="5">no text transforms</Text>
<Text size="5" transform="capitalize">capitalized text</Text>
<Text size="5" transform="lowercase">Lowercase Text</Text>
<Text size="5" transform="uppercase">uppercase text</Text>
`

export default TextTransformsSpecimen
