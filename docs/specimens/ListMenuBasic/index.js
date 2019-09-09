import React from 'react'
import { ListMenu, ListMenuButton, View } from '../../../src'

const SpacerHorizontalSpecimen = () => (
   <View
      float="left"
      width="210px"
      border="1px solid #eee"
      borderRadius="3px">
      <ListMenu>
         <ListMenuButton name="Home" isActive />
         <ListMenuButton name="Explore" />
         <ListMenuButton name="Notifications" />
         <ListMenuButton name="Profile" />
      </ListMenu>
   </View>
)

SpacerHorizontalSpecimen.title = 'Basic Usage'

SpacerHorizontalSpecimen.description = 'This example shows <code>ListMenu</code> for typical usage as a menu.'

SpacerHorizontalSpecimen.codeSnippet = `
<View
   float="left"
   width="210px"
   border="1px solid #eee"
   borderRadius="3px">
   <ListMenu>
      <ListMenuButton name="Home" isActive />
      <ListMenuButton name="Explore" />
      <ListMenuButton name="Notifications" />
      <ListMenuButton name="Profile" />
   </ListMenu>
</View>
`

export default SpacerHorizontalSpecimen
