import React from 'react'
import { ListMenu, ListMenuButton, View } from '../../../src'

const ListMenuBadgesSpecimen = () => (
   <View
      float="left"
      width="210px"
      border="1px solid #eee"
      padding="6px"
      borderRadius="3px">
      <ListMenu
         activeBackgroundColor="rgb(226, 239, 249)"
         activeTextColor="rgb(72, 162, 236)">
         <ListMenuButton
            name="Inbox"
            badgeNumber={11}
            isActive
         />
         <ListMenuButton
            name="Sent"
         />
         <ListMenuButton
            name="Trash"
         />
      </ListMenu>
   </View>
)

ListMenuBadgesSpecimen.title = 'ListMenuButtons with badges'

ListMenuBadgesSpecimen.description = 'This example shows how a <code>ListMenuButton</code> can have a <code>badgeNumber</code>'

ListMenuBadgesSpecimen.codeSnippet = `
<View
   float="left"
   width="210px"
   border="1px solid #eee"
   padding="6px"
   borderRadius="3px">
   <ListMenu
      activeBackgroundColor="rgb(226, 239, 249)"
      activeTextColor="rgb(72, 162, 236)">
      <ListMenuButton
         name="Inbox"
         badgeNumber={11}
         isActive
      />
      <ListMenuButton
         name="Sent"
      />
      <ListMenuButton
         name="Trash"
      />
   </ListMenu>
</View>`

export default ListMenuBadgesSpecimen
