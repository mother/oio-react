import React from 'react'
import { ListMenu, ListMenuButton, View } from '../../../src'

const ListMenuBasicSpecimen = () => (
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

ListMenuBasicSpecimen.title = 'Basic Usage'

ListMenuBasicSpecimen.description = 'This example shows <code>ListMenu</code> for typical usage as a menu.'

ListMenuBasicSpecimen.codeSnippet = `
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

export default ListMenuBasicSpecimen
