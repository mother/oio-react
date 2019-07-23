import React from 'react'
import { Button, NotificationInline, Spacer, Text, View } from '../../../src'

const NotificationInlineTypes = () => (
   <div>
      <NotificationInline
         backgroundColor="#6230cd"
         borderRadius="6px"
         iconColor="#fff"
         textColor="#fff"
         type="info"
         title="Hi there! We see you are new here!"
         message="Would you like to get the tour?"
         buttonPlacement="right"
         buttons={[
            <Button
               key="button1"
               size="xs"
               name="No, thanks"
               color="rgba(255,255,255,0.8)"
               textColor="#fff"
               outline
            />,
            <Button
               key="button2"
               size="xs"
               name="Yes"
               color="rgba(255,255,255,0.3)"
               textColor="#fff"
            />
         ]}
      />
      <Spacer size="3" />
      <NotificationInline
         backgroundColor="#fff0cd"
         borderRadius="6px"
         iconColor="#333"
         textColor="#333"
         type="info"
         title="Just announced this month:"
         message="We are very pleased to announce a new feature to help super-fan developers!"
         paddingVertical="24px"
         buttonPlacement="bottom"
         buttons={[
            <Button
               key="try-button"
               size="sm"
               name="Give it a try"
               color="rgba(0,0,0,0.1)"
               textColor="#000"
               textWeight="bold"
            />
         ]}>
         <View
            borderTop="1px solid rgba(0,0,0,0.1)"
            marginTop="12px"
            paddingTop="12px">
            <Text size="1" color="#666">
               Note: This is for advanced users only
            </Text>
         </View>
      </NotificationInline>
   </div>
)

NotificationInlineTypes.codeSnippet = `
<NotificationInline
   backgroundColor="#6230cd"
   borderRadius="6px"
   iconColor="#fff"
   textColor="#fff"
   type="info"
   title="Hi there! We see you are new here!"
   message="Would you like to get the tour?"
   buttonPlacement="right"
   buttons={[
      <Button
         key="button1"
         size="xs"
         name="No, thanks"
         color="rgba(255,255,255,0.8)"
         textColor="#fff"
         outline
      />,
      <Button
         key="button2"
         size="xs"
         name="Yes"
         color="rgba(255,255,255,0.3)"
         textColor="#fff"
      />
   ]}
/>

<Spacer size="3" />

<NotificationInline
   backgroundColor="#fff0cd"
   borderRadius="6px"
   iconColor="#333"
   textColor="#333"
   type="info"
   title="Just announced this month:"
   message="We are very pleased to announce a new feature to help super-fan developers!"
   paddingVertical="24px"
   buttonPlacement="bottom"
   buttons={[
      <Button
         key="try-button"
         size="sm"
         name="Give it a try"
         color="rgba(0,0,0,0.1)"
         textColor="#000"
         textWeight="bold"
      />
   ]}>
   <View
      borderTop="1px solid rgba(0,0,0,0.1)"
      marginTop="12px"
      paddingTop="12px">
      <Text size="1" color="#666">
         Note: This is for advanced users only
      </Text>
   </View>
</NotificationInline>
`

export default NotificationInlineTypes
