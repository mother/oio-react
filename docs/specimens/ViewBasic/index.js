import React from 'react'
import { View } from '../../../src'

const ViewBasicSpecimen = () => (
   <View
      backgroundColor="#fff4eb"
      border="1px solid #f46f36"
      borderRadius="6px"
      padding="30px">
      Hello World
   </View>
)

ViewBasicSpecimen.title = 'Basic Usage'

ViewBasicSpecimen.description = 'The View component is probably one of the most important components within OIO. It is the core OIO component you should use to structure your pages, layouts and components for your application. You can think of the <code>View</code> component as OIO&apos;s take on a <code>div</code> with easily accessible css properties.'

ViewBasicSpecimen.codeSnippet = `
<View
   backgroundColor="#fff4eb"
   border="1px solid #f46f36"
   borderRadius="6px"
   padding="30px">
   Hello World
</View>
`

export default ViewBasicSpecimen
