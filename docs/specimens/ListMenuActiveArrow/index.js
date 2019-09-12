import React, { useState } from 'react'
import { ListMenu, ListMenuButton, View } from '../../../src'

const ListMenuActiveArrowSpecimen = () => {
   const [activeButton, setActiveButton] = useState(0)
   const listMenuButtonProps = index => ({
      isActive: activeButton === index,
      onClick: () => setActiveButton(index)
   })

   return (
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
            <ListMenuButton name="Inbox" {...listMenuButtonProps(0)} />
            <ListMenuButton name="Sent" {...listMenuButtonProps(1)} />
            <ListMenuButton name="Drafts" {...listMenuButtonProps(2)} />
            <ListMenuButton name="Trash" {...listMenuButtonProps(3)} />
         </ListMenu>
      </View>
   )
}

ListMenuActiveArrowSpecimen.title = 'ListMenu with active arrow and style customizations'

ListMenuActiveArrowSpecimen.description = 'This example shows <code>ListMenu</code> where the <code>ListMenuButton</code> with <code>isActive</code> set to <code>true</code> shows an arrow icon. Note also the background color and the text color of the active <code>ListMenuButton</code>.'

ListMenuActiveArrowSpecimen.codeSnippet = `
const [activeButton, setActiveButton] = useState(0)
const listMenuButtonProps = index => ({
   isActive: activeButton === index,
   onClick: () => setActiveButton(index)
})

return (
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
         <ListMenuButton name="Inbox" {...listMenuButtonProps(0)} />
         <ListMenuButton name="Sent" {...listMenuButtonProps(1)} />
         <ListMenuButton name="Drafts" {...listMenuButtonProps(2)} />
         <ListMenuButton name="Trash" {...listMenuButtonProps(3)} />
      </ListMenu>
   </View>
)
`

export default ListMenuActiveArrowSpecimen
