import React from 'react'
import { TabMenu, TabMenuButton, View } from '../../../src'

const TabMenuBasicSpecimen = () => (
   <View
      float="left"
      width="100%"
      padding2="0px 18px"
      border="1px solid #eee"
      borderRadius="3px">
      <TabMenu>
         <TabMenuButton name="Home" isActive />
         <TabMenuButton name="Explore" />
         <TabMenuButton name="About" />
         <TabMenuButton name="Contact" />
         <TabMenuButton name="Afgsdfg" />
         <TabMenuButton name="Bsdfgsdfg" />
         <TabMenuButton name="Csdfgsdfg" />
         <TabMenuButton name="Dsdfg" />
         <TabMenuButton name="Esdfgsd" />
         <TabMenuButton name="Explore" />
         <TabMenuButton name="4235" />
         <TabMenuButton name="Contact" />
      </TabMenu>
   </View>
)

TabMenuBasicSpecimen.title = 'Basic Usage'

TabMenuBasicSpecimen.description = 'This example shows <code>TabMenu</code> for typical usage as a menu.'

TabMenuBasicSpecimen.codeSnippet = `
<View
   float="left"
   width="210px"
   border="1px solid #eee"
   borderRadius="3px">
   <TabMenu>
      <TabMenuButton name="Home" isActive />
      <TabMenuButton name="Explore" />
      <TabMenuButton name="Notifications" />
      <TabMenuButton name="Profile" />
   </TabMenu>
</View>
`

export default TabMenuBasicSpecimen
