import React from 'react'
import { Grid, GridCell, NotificationInline } from '../../../src'

const NotificationInlineTypes = () => (
   <Grid columns="1" spacing="12px">
      <GridCell>
         <NotificationInline
            borderRadius="6px"
            type="info"
            title="Did you know?"
            message="You can create special types of things for pretty much everything"
         />
      </GridCell>
      <GridCell>
         <NotificationInline
            borderRadius="6px"
            type="prompt"
            title="Not sure what to do?"
            message="You can pick from option A or option B"
         />
      </GridCell>
      <GridCell>
         <NotificationInline
            borderRadius="6px"
            type="success"
            title="Success!"
            message="Your changes have been saved successfully"
         />
      </GridCell>
      <GridCell>
         <NotificationInline
            borderRadius="6px"
            type="warning"
            title="This Event is currently unpublished"
            message="Until it is published, only Admins of this Community can see this"
         />
      </GridCell>
      <GridCell>
         <NotificationInline
            borderRadius="6px"
            type="error"
            title="There was an error during save"
            message="Make sure you filled everything in correctly"
         />
      </GridCell>
   </Grid>
)

NotificationInlineTypes.codeSnippet = `
<Grid columns="1" spacing="12px">
   <GridCell>
      <NotificationInline
         borderRadius="6px"
         type="info"
         title="Did you know?"
         message="You can create special types of things for pretty much everything"
      />
   </GridCell>
   <GridCell>
      <NotificationInline
         borderRadius="6px"
         type="prompt"
         title="Not sure what to do?"
         message="You can pick from option A or option B"
      />
   </GridCell>
   <GridCell>
      <NotificationInline
         borderRadius="6px"
         type="success"
         title="Success!"
         message="Your changes have been saved successfully"
      />
   </GridCell>
   <GridCell>
      <NotificationInline
         borderRadius="6px"
         type="warning"
         title="This Event is currently unpublished"
         message="Until it is published, only Admins of this Community can see this"
      />
   </GridCell>
   <GridCell>
      <NotificationInline
         borderRadius="6px"
         type="error"
         title="There was an error during save"
         message="Make sure you filled everything in correctly"
      />
   </GridCell>
</Grid>
`

export default NotificationInlineTypes
