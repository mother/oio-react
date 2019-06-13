import React from 'react'
import { Spacer, Text, View } from '../../../src'

const ViewBasicSpecimen = () => (
   <View display="flex">
      <View backgroundColor="#ddd">
         <Text>View A</Text>
      </View>
      <Spacer size="3" orientation="vertical" />
      <View backgroundColor="#ddd">
         <Text>View B</Text>
      </View>
   </View>
)

ViewBasicSpecimen.codeSnippet = `
// Spacer between 2 views with vertical orientaion
<View display="flex">
   <View backgroundColor="#ddd">
      <Text>View A</Text>
   </View>

   <Spacer size="3" orientation="vertical" />

   <View backgroundColor="#ddd">
      <Text>View B</Text>
   </View>
</View>
`

export default ViewBasicSpecimen
