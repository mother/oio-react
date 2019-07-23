import React from 'react'
import { NotificationInline, Spacer } from '../../../src'

const NotificationInlineTypes = () => (
   <div>
      <NotificationInline
         borderRadius="6px"
         type="info"
         title="Did you know?"
         message="You can create special types of things for pretty much everything"
      />
      <Spacer size="3" />
      <NotificationInline
         borderRadius="6px"
         type="prompt"
         title="Not sure what to do?"
         message="You can pick from option A or option B"
      />
      <Spacer size="3" />
      <NotificationInline
         borderRadius="6px"
         type="success"
         title="Success!"
         message="Your changes have been saved successfully"
      />
      <Spacer size="3" />
      <NotificationInline
         borderRadius="6px"
         type="warning"
         title="This Event is currently unpublished"
         message="Until it is published, only Admins of this Community can see this"
      />
      <Spacer size="3" />
      <NotificationInline
         borderRadius="6px"
         type="error"
         title="There was an error during save"
         message="Make sure you filled everything in correctly"
      />
      <Spacer size="3" />
      <NotificationInline
         borderRadius="6px"
         type="loading"
         title="Loading..."
         message="Your file upload is in progress"
      />
   </div>
)

NotificationInlineTypes.codeSnippet = `
   // Info Notification
<NotificationInline
   borderRadius="6px"
   type="info"
   title="Did you know?"
   message="You can create special types of things for pretty much everything"
/>

<Spacer size="3" />

// Prompt Notification
<NotificationInline
   borderRadius="6px"
   type="prompt"
   title="Not sure what to do?"
   message="You can pick from option A or option B"
/>

<Spacer size="3" />

// Success Notification
<NotificationInline
   borderRadius="6px"
   type="success"
   title="Success!"
   message="Your changes have been saved successfully"
/>

<Spacer size="3" />

// Warning Notification
<NotificationInline
   borderRadius="6px"
   type="warning"
   title="This Event is currently unpublished"
   message="Until it is published, only Admins of this Community can see this"
/>

<Spacer size="3" />

// Error Notification
<NotificationInline
   borderRadius="6px"
   type="error"
   title="There was an error during save"
   message="Make sure you filled everything in correctly"
/>

<Spacer size="3" />

// Loading Notification
<NotificationInline
   borderRadius="6px"
   type="loading"
   title="Loading..."
   message="Your file upload is in progress"
/>
`

export default NotificationInlineTypes
