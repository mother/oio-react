import React from 'react'
import { Spacer, Text, View } from '../../../src'

const SpacerHorizontalSpecimen = () => (
   <View>
      <View display="block" backgroundColor="#ddd">
         <Text>View A</Text>
      </View>
      <Spacer size="3[a-d] 5[e-f]" />
      <View display="block" backgroundColor="#ddd">
         <Text>View B</Text>
      </View>
   </View>
)

SpacerHorizontalSpecimen.title = 'Horizontal Orientation'

SpacerHorizontalSpecimen.description = 'The following example shows <code>Spacer</code> component used in <code>horizontal</code> <code>orientation</code>. When the <code>Spacer</code> component is in this orientation, it flows as an html element with <code>display</code>set to <code>block</code>. Note that the sibling <code>View</code> components in this example, <code>display</code> is set to <code>block</code>.'

SpacerHorizontalSpecimen.codeSnippet = `
// Spacer between 2 views
<View display="block" backgroundColor="#ddd">
   <Text>View A</Text>
</View>

<Spacer size="3[a-d] 5[e-f]" />

<View display="block" backgroundColor="#ddd">
   <Text>View B</Text>
</View>
`

export default SpacerHorizontalSpecimen
