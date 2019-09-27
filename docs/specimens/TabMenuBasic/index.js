import React from 'react'
import { TabMenu, TabMenuButton, View } from '../../../src'

const TabMenuBasicSpecimen = () => (
   <View
      float="left"
      width="100%"
      border="1px solid #eee"
      borderRadius="3px">
      <TabMenu>
         <TabMenuButton name="Tab Button 1" isActive />
         <TabMenuButton name="Tab Button 2" />
         <TabMenuButton name="Tab Button 3" />
         <TabMenuButton name="Tab Button 4" />
         <TabMenuButton name="Tab Button 5" />
         <TabMenuButton name="Tab Button 6" />
         <TabMenuButton name="Tab Button 7" />
      </TabMenu>
   </View>
)

TabMenuBasicSpecimen.title = 'Basic Usage'

TabMenuBasicSpecimen.description = 'This example shows <code>TabMenu</code> for typical usage as a menu.'

TabMenuBasicSpecimen.codeSnippet = `
<View
   float="left"
   width="100%"
   border="1px solid #eee"
   borderRadius="3px">
   <TabMenu>
      <TabMenuButton name="Tab Button 1" isActive />
      <TabMenuButton name="Tab Button 2" />
      <TabMenuButton name="Tab Button 3" />
      <TabMenuButton name="Tab Button 4" />
      <TabMenuButton name="Tab Button 5" />
      <TabMenuButton name="Tab Button 6" />
      <TabMenuButton name="Tab Button 7" />
   </TabMenu>
</View>
`

export default TabMenuBasicSpecimen
