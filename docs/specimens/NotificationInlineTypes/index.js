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
      <Spacer size="2" />
      <NotificationInline
         borderRadius="6px"
         type="prompt"
         title="Not sure what to do?"
         message="You can pick from option A or option B"
      />
      <Spacer size="2" />
      <NotificationInline
         borderRadius="6px"
         type="success"
         title="Success!"
         message="Your changes have been saved successfully"
      />
      <Spacer size="2" />
      <NotificationInline
         borderRadius="6px"
         type="warning"
         title="This Event is currently unpublished"
         message="Until it is published, only Admins of this Community can see this"
      />
      <Spacer size="2" />
      <NotificationInline
         borderRadius="6px"
         type="error"
         title="There was an error during save"
         message="Make sure you filled everything in correctly"
      />
      <Spacer size="2" />
      <NotificationInline
         borderRadius="6px"
         type="loading"
         title="Loading..."
         message="Your file upload is in progress"
      />
   </div>
)

NotificationInlineTypes.title = 'Basic Usage'

NotificationInlineTypes.description = 'Setting the <code>NotificationInline</code> component\'s <code>type</code> will also automatically set the component&apos;s icon, <code>backgroundColor</code>, <code>iconColor</code> and <code>textColor</code>. In basic usage, you can set the <code>title</code> and <code>message</code> of the notification. More customization options are shown in the examples below.'

NotificationInlineTypes.codeSnippet = `
   // Info Notification
<NotificationInline
   borderRadius="6px"
   type="info"
   title="Did you know?"
   message="You can create special types of things for pretty much everything"
/>

<Spacer size="2" />

// Prompt Notification
<NotificationInline
   borderRadius="6px"
   type="prompt"
   title="Not sure what to do?"
   message="You can pick from option A or option B"
/>

<Spacer size="2" />

// Success Notification
<NotificationInline
   borderRadius="6px"
   type="success"
   title="Success!"
   message="Your changes have been saved successfully"
/>

<Spacer size="2" />

// Warning Notification
<NotificationInline
   borderRadius="6px"
   type="warning"
   title="This Event is currently unpublished"
   message="Until it is published, only Admins of this Community can see this"
/>

<Spacer size="2" />

// Error Notification
<NotificationInline
   borderRadius="6px"
   type="error"
   title="There was an error during save"
   message="Make sure you filled everything in correctly"
/>

<Spacer size="2" />

// Loading Notification
<NotificationInline
   borderRadius="6px"
   type="loading"
   title="Loading..."
   message="Your file upload is in progress"
/>
`

export default NotificationInlineTypes
