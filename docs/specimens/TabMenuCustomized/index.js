import React from 'react'
import { TabMenu, TabMenuButton, View } from '../../../src'

const TabMenuBasicSpecimen = () => (
   <View
      float="left"
      width="100%"
      border="1px solid #eee"
      borderRadius="3px">
      <TabMenu
         align="center"
         buttonPaddingHorizontal="0px"
         buttonSpacing="18px"
         buttonSize="md"
         highlightColor="#6337d0">
         <TabMenuButton
            name="Published"
            badgeNumber={31}
            isActive
         />
         <TabMenuButton
            name="Unpublished"
            badgeNumber={2}
         />
         <TabMenuButton
            name="Archived"
            badgeNumber={0}
         />
      </TabMenu>
   </View>
)

TabMenuBasicSpecimen.title = 'Customized & Compact TabMenu'

TabMenuBasicSpecimen.description = 'This example shows how to make <code>TabMenu</code> look more compact with customizations including: <code>align</code>, <code>buttonSize</code>, <code>badgeNumber</code>, <code>highlightColor</code>. <b>Note that at this time, none of the props are responsive.</b>'

TabMenuBasicSpecimen.codeSnippet = `
<View
   float="left"
   width="100%"
   border="1px solid #eee"
   borderRadius="3px">
   <TabMenu
      align="center"
      buttonPaddingHorizontal="0px"
      buttonSpacing="18px"
      buttonSize="md"
      highlightColor="#6337d0">
      <TabMenuButton
         name="Published"
         badgeNumber={31}
         isActive
      />
      <TabMenuButton
         name="Unpublished"
         badgeNumber={2}
      />
      <TabMenuButton
         name="Archived"
         badgeNumber={0}
      />
   </TabMenu>
</View>
`

export default TabMenuBasicSpecimen
