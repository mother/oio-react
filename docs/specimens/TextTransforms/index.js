import React from 'react'
import { Text } from '../../../src'

const TextTransformsSpecimen = () => (
   <div>
      <Text size="5">no text transforms</Text>
      <Text size="5" capitalize>capitalized text</Text>
      <Text size="5" uppercase>uppercase text</Text>
   </div>
)

TextTransformsSpecimen.codeSnippet = `
<Text size="5">no text transforms</Text>
<Text size="5" capitalize>capitalized text</Text>
<Text size="5" uppercase>uppercase text</Text>
`

export default TextTransformsSpecimen
