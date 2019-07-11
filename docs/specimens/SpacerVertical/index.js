import React from 'react'
import { Spacer, Text, View } from '../../../src'

const ViewBasicSpecimen = () => (
   <div>
      <View display="inline-block" backgroundColor="#ddd">
         <Text>View A</Text>
      </View>
      <Spacer size="3" orientation="vertical" />
      <View display="inline-block" backgroundColor="#ddd">
         <Text>View B</Text>
      </View>
   </div>
)

ViewBasicSpecimen.codeSnippet = `
// Spacer between 2 views with vertical orientaion
<View display="inline-block" backgroundColor="#ddd">
   <Text>View A</Text>
</View>

<Spacer size="3" orientation="vertical" />

<View display="inline-block" backgroundColor="#ddd">
   <Text>View B</Text>
</View>
`

export default ViewBasicSpecimen
