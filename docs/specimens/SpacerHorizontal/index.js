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
