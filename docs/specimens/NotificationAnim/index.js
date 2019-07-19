import React, { useEffect, useState } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { Button, View, Text } from '../../../src'

const Notification = ({ onAnimComplete, visible }) => {
   return (
      <View
         display="block"
         width="350px"
         paddingHorizontal="10px"
         paddingVertical="10px"
         borderRadius="10px"
         backgroundColor="navy">
         <View display="flex" flex="1 1 auto">
            <View
               flex="1 1 auto"
               display="flex"
               flexFlow="column[a-b] row[e-f]"
               alignItems="flex-start[a-b] center[e-f]"
               justifyContent="space-between">
               <View paddingRight="12px">
                  <Text
                     size="2"
                     weight="bold"
                     color="white">
                     Success
                  </Text>
                  <View display="block" width="100%" height="1px" />
                  <Text
                     size="4"
                     lineHeight="140%"
                     color="white"
                     sizeMultiplier="0.95"
                     style={{ opacity: 0.7 }}>
                     Things could work, you could make them work
                  </Text>
               </View>
               <View flex="0 0 auto">
                  X
               </View>
            </View>
         </View>
      </View>
   )
}

const duration = 625

const NotificationAnim = () => {
   const [notifications, setNotifications] = useState([])
   const showNotification = () => {
      const newId = `${Date.now()}`
      setNotifications([
         { id: newId, visible: true },
         ...notifications
      ])

      setTimeout(() => {
         setNotifications(notifications2 => notifications2.filter(n => n.id !== newId))
      }, 3500)
   }

   return (
      <div style={{ padding: '36px' }}>
         <View float="left" width="100%" marginBottom="16px">
            <Button name="Show Notification" size="sm" onClick={showNotification} />
         </View>
         <View float="left" width="100%" marginBottom="16px">
            <TransitionGroup>
               {notifications.map(notification => (
                  <Transition key={notification.id} timeout={{ appear: 0, enter: 0, exit: duration }}>
                     {state => {
                        console.log(state)
                        return (
                           <View
                              marginBottom="3px"
                              css={css`
                                 transition: ${duration}ms ease-in-out;
                                 opacity: ${state === 'entering' || state === 'exiting' || status === 'entered' ? '0' : '1'};
                                 transform: translateX(
                                    ${state === 'entering' || state === 'exiting' || status === 'entered' ? '120%' : 'calc(100% - 375px)'}
                                 );
                              `}>
                              <Notification />
                           </View>
                        )
                     }}
                  </Transition>
               ))}
            </TransitionGroup>
         </View>
      </div>
   )
}

export default NotificationAnim
