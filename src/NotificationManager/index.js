import React, { createContext, useEffect, useRef, useState } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { Transition, TransitionGroup } from 'react-transition-group'
import { NotificationInline, View } from '..'

const ANIMATION_DURATION = 600

// =================================================
// Context
// =================================================

const NotificationManagerContext = createContext()

// =================================================
// Provider
// =================================================

const NotificationManagerProvider = ({ children }) => {
   const notificationElem = useRef(document.createElement('div'))

   useEffect(() => {
      notificationElem.current.setAttribute('id', 'notification-container')
      notificationElem.current.style.display = 'flex'
      notificationElem.current.style.alignItems = 'flex-end'
      notificationElem.current.style.position = 'absolute'
      notificationElem.current.style.bottom = 0
      notificationElem.current.style.width = '400px'
      notificationElem.current.style.right = 0
      notificationElem.current.style.pointerEvents = 'none'
      document.body.appendChild(notificationElem.current)

      return () => notificationElem.current.remove()
   }, [])

   const [notifications, setNotifications] = useState([])
   const showNotification = ({ message, title, type }) => {
      const newId = `${Date.now()}`
      setNotifications([
         { id: newId, message, title, type },
         ...notifications
      ])

      setTimeout(() => {
         setNotifications(activeNotifications => activeNotifications.filter(n => n.id !== newId))
      }, 3500)
   }

   return (
      <NotificationManagerContext.Provider value={{ showNotification }}>
         {children}
         {createPortal(
            <View
               float="left"
               width="100%"
               padding="30px">
               <TransitionGroup>
                  {/* TODO: Use CSSTransition */}
                  {notifications.map(notification => (
                     <Transition
                        key={notification.id}
                        timeout={{
                           appear: 0,
                           enter: 0,
                           exit: ANIMATION_DURATION
                        }}>
                        {(state) => {
                           const animating = state === 'entering' || state === 'exiting'

                           return (
                              <View
                                 width="100%"
                                 marginTop="3px"
                                 css={{
                                    transition: `${ANIMATION_DURATION}ms ease-in-out`,
                                    opacity: animating ? '0' : '1',
                                    transform: animating
                                       ? 'translateX(120%)'
                                       : 'translateX(0)'
                                 }}>
                                 <NotificationInline
                                    backgroundColor="rgba(40,40,40,0.95)"
                                    borderRadius="6px"
                                    message={notification.message}
                                    paddingVertical="18px"
                                    textColor="#fff"
                                    title={notification.title}
                                    type={notification.type}
                                 />
                              </View>
                           )
                        }}
                     </Transition>
                  ))}
               </TransitionGroup>
            </View>,
            notificationElem.current
         )}
      </NotificationManagerContext.Provider>
   )
}

NotificationManagerProvider.propTypes = {
   children: PropTypes.node
}

NotificationManagerProvider.defaultProps = {
   children: undefined
}

// =================================================
// Export
// =================================================

export {
   NotificationManagerContext,
   NotificationManagerProvider
}
