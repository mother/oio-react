import React, { useContext } from 'react'
import { Button, NotificationManagerContext } from '../../../src'

const NotificationManagerSpecimen = () => {
   const { showNotification } = useContext(NotificationManagerContext)
   const handleShowNotification = () => {
      showNotification({
         message: 'Hi there! We are real about the sun.',
         title: 'Title',
         type: 'info'
      })
   }

   return (
      <Button
         name="Show Notification"
         onClick={handleShowNotification}
      />
   )
}

NotificationManagerSpecimen.title = 'Basic Usage'

NotificationManagerSpecimen.description = 'For advanced use-cases, you can customize the <code>NotificationInline</code> component&apos;s <code>backgroundColor</code>, <code>iconColor</code>, <code>textColor</code>, provide <code>buttons</code> as well as pass additional content through <code>children</code>. Content passed through <code>children</code> will appear below the <code>NotificationInline</code> <code>message</code>. You can also set the placement of the <code>buttons</code> with the <code>buttonPlacement</code> prop.'

NotificationManagerSpecimen.codeSnippet = `
//
`

export default NotificationManagerSpecimen
