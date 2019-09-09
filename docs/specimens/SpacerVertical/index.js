import React from 'react'
import { Spacer, Text, View } from '../../../src'

const ViewBasicSpecimen = () => (
   <div>
      <View display="inline-block" backgroundColor="#ddd">
         <Text>View A</Text>
      </View>
      <Spacer size="3[a-d] 5[e-f]" orientation="vertical" />
      <View display="inline-block" backgroundColor="#ddd">
         <Text>View B</Text>
      </View>
   </div>
)

ViewBasicSpecimen.title = 'Vertical Orientation'

ViewBasicSpecimen.description = 'The following example shows <code>Spacer</code> component used in <code>vertical</code> <code>orientation</code>. When the <code>Spacer</code> component is in this orientation, it flows like an html element with <code>display</code> set to <code>inline-block</code>. Note that the sibling <code>View</code> components in this exmample, <code>display</code> is set to <code>inline-block</code>.'

ViewBasicSpecimen.codeSnippet = `
// Spacer between 2 views with vertical orientaion
<View display="inline-block" backgroundColor="#ddd">
   <Text>View A</Text>
</View>

<Spacer size="3[a-d] 5[e-f]" orientation="vertical" />

<View display="inline-block" backgroundColor="#ddd">
   <Text>View B</Text>
</View>
`

export default ViewBasicSpecimen
