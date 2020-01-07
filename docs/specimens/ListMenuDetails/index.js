import React from 'react'
import { withRouter } from 'react-router-dom'
import { ListMenu, ListMenuButton, View } from '../../../src'

const ListMenuDetailsSpecimen = () => (
   <View
      float="left"
      width="210px"
      border="1px solid #eee"
      padding="6px"
      borderRadius="3px">
      <ListMenu
         activeTextColor="#333"
         buttonBorderRadius="3px"
         dividerLineStyle="none"
         showActiveArrow>
         <ListMenuButton
            name="Red Label"
            leftDetail={(
               <View
                  width="9px"
                  height="9px"
                  borderRadius="50%"
                  backgroundColor="red"
               />
            )}
            isActive
         />
         <ListMenuButton
            name="Blue Label"
            leftDetail={(
               <View
                  width="9px"
                  height="9px"
                  borderRadius="50%"
                  backgroundColor="blue"
               />
            )}
         />
      </ListMenu>
   </View>
)

ListMenuDetailsSpecimen.title = 'ListMenuButtons with details'

ListMenuDetailsSpecimen.description = 'This example shows how <code>ListMenuButton</code> can have additional content using <code>leftDetail</code>. <code>rightDetail</code> coming soon.'

ListMenuDetailsSpecimen.codeSnippet = `
<View
   float="left"
   width="210px"
   border="1px solid #eee"
   padding="6px"
   borderRadius="3px">
   <ListMenu
      activeTextColor="#333"
      buttonBorderRadius="3px"
      dividerLineStyle="none"
      showActiveArrow>
      <ListMenuButton
         name="Red Label"
         leftDetail={(
            <View
               width="9px"
               height="9px"
               borderRadius="50%"
               backgroundColor="red"
            />
         )}
         isActive
      />
      <ListMenuButton
         name="Blue Label"
         leftDetail={(
            <View
               width="9px"
               height="9px"
               borderRadius="50%"
               backgroundColor="blue"
            />
         )}
      />
   </ListMenu>
</View>`

export default withRouter(ListMenuDetailsSpecimen)
