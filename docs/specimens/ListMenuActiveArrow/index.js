import React from 'react'
import { ListMenu, ListMenuButton, View } from '../../../src'

const SpacerHorizontalSpecimen = () => (
   <View
      float="left"
      width="210px"
      border="1px solid #eee"
      padding="6px"
      borderRadius="3px">
      <ListMenu
         activeBackgroundColor="rgb(226, 239, 249)"
         activeTextColor="rgb(72, 162, 236)"
         buttonBorderRadius="3px"
         dividerLineStyle="none"
         showActiveArrow>
         <ListMenuButton name="Inbox" isActive />
         <ListMenuButton name="Sent" />
         <ListMenuButton name="Drafts" />
         <ListMenuButton name="Trash" />
      </ListMenu>
   </View>
)

SpacerHorizontalSpecimen.title = 'ListMenu with active arrow and style customizations'

SpacerHorizontalSpecimen.description = 'This example shows <code>ListMenu</code> where the <code>ListMenuButton</code> with <code>isActive</code> set to <code>true</code> shows an arrow icon. Note also the background color and the text color of the active <code>ListMenuButton</code>.'

SpacerHorizontalSpecimen.codeSnippet = `
<View
   float="left"
   width="210px"
   border="1px solid #eee"
   padding="6px"
   borderRadius="3px">
   <ListMenu
      activeBackgroundColor="rgb(226, 239, 249)"
      activeTextColor="rgb(72, 162, 236)"
      buttonBorderRadius="3px"
      dividerLineStyle="none"
      showActiveArrow>
      <ListMenuButton name="Inbox" isActive />
      <ListMenuButton name="Sent" />
      <ListMenuButton name="Drafts" />
      <ListMenuButton name="Trash" />
   </ListMenu>
</View>
`

export default SpacerHorizontalSpecimen
