import React from 'react'
import { withRouter } from 'react-router-dom'
import { TabMenu, TabMenuButton, View } from '../../../src'

const TabMenuLinksSpecimen = ({ match }) => (
   <View
      float="left"
      width="100%"
      border="1px solid #eee"
      borderRadius="3px">
      <TabMenu>
         <TabMenuButton name="Tab Button 1" linkTo={match.url} linkExact />
         <TabMenuButton name="Tab Button 2" linkTo={`${match.url}/2`} />
         <TabMenuButton name="Tab Button 3" linkTo={`${match.url}/3`} />
      </TabMenu>
   </View>
)

TabMenuLinksSpecimen.title = 'TabMenuButtons with Links'

TabMenuLinksSpecimen.description = 'This example shows how <code>TabMenuButton</code> can be used with links</code>.'

TabMenuLinksSpecimen.codeSnippet = `
<View
   float="left"
   width="100%"
   border="1px solid #eee"
   borderRadius="3px">
   <TabMenu>
      <TabMenuButton name="Tab Button 1" linkTo={match.url} linkExact />
      <TabMenuButton name="Tab Button 2" linkTo={\`\${match.url}/2\`} />
      <TabMenuButton name="Tab Button 3" linkTo={\`\${match.url}/3\`} />
   </TabMenu>
</View>
`

export default withRouter(TabMenuLinksSpecimen)
