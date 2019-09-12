import React from 'react'
import {
   Button,
   NotificationManagerContext,
   NotificationManagerProvider
} from '../../../src'

const NotificationManagerSpecimen = () => (
   <NotificationManagerProvider>
      <NotificationManagerContext.Consumer>
         {({ showNotification }) => (
            <Button
               id="show-notification-button"
               name="Show Notification"
               onClick={() => {
                  showNotification({
                     message: 'This notification worked correctly',
                     title: 'Success!',
                     type: 'success'
                  })
               }}
            />
         )}
      </NotificationManagerContext.Consumer>
   </NotificationManagerProvider>
)
NotificationManagerSpecimen.title = 'Basic Usage'

NotificationManagerSpecimen.description = 'Click the button below one or multiple times to trigger banner-style notifications in the bottom right corner of the browser window. For notifications you can currently only customize the notification\'s <code>title</code>, <code>message</code> and <code>type</code>.'

NotificationManagerSpecimen.codeSnippet = `
<NotificationManagerProvider>
   <NotificationManagerContext.Consumer>
      {({ showNotification }) => (
         <Button
            name="Show Notification"
            onClick={() => {
               showNotification({
                  message: 'Hi there! We are real about the sun.',
                  title: 'Title',
                  type: 'info'
               })
            }}
         />
      )}
   </NotificationManagerContext.Consumer>
</NotificationManagerProvider>
`

export default NotificationManagerSpecimen
