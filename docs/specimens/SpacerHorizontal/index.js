import React from 'react'
import { Spacer, Text, View } from '../../../src'

const SpacerHorizontalSpecimen = () => (
   <View>
      <View backgroundColor="#ddd">
         <Text>View A</Text>
      </View>
      <Spacer size="3" />
      <View backgroundColor="#ddd">
         <Text>View B</Text>
      </View>
   </View>
)

SpacerHorizontalSpecimen.codeSnippet = `
// Spacer between 2 views
<View backgroundColor="#ddd">
   <Text>View A</Text>
</View>

<Spacer size="3" />

<View backgroundColor="#ddd">
   <Text>View B</Text>
</View>
`

export default SpacerHorizontalSpecimen
