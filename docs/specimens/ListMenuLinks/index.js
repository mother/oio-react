import React from 'react'
import { withRouter } from 'react-router-dom'
import { ListMenu, ListMenuButton, View } from '../../../src'

const ListMenuLinksSpecimen = ({ match }) => (
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
         <ListMenuButton name="Home" linkTo={`${match.url}`} />
         <ListMenuButton name="Explore" linkTo={`${match.url}/explore`} />
         <ListMenuButton name="Notifications" linkTo={`${match.url}/notifications`} />
         <ListMenuButton name="Profile" linkTo={`${match.url}/profile`} />
      </ListMenu>
   </View>
)

ListMenuLinksSpecimen.title = 'ListMenuButtons with links'

ListMenuLinksSpecimen.description = 'This example shows how <code>ListMenuButton</code> can be used with links</code>.'

ListMenuLinksSpecimen.codeSnippet = `
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
      <ListMenuButton name="Home" linkTo={\`\${match.url}\`} />
      <ListMenuButton name="Explore" linkTo={\`\${match.url}/explore\`} />
      <ListMenuButton name="Notifications" linkTo={\`\${match.url}/notifications\`} />
      <ListMenuButton name="Profile" linkTo={\`\${match.url}/profile\`} />
   </ListMenu>
</View>`

export default withRouter(ListMenuLinksSpecimen)
