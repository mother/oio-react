import React, {
   createContext,
   useContext,
   useRef,
   useState
} from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import PropTypes from 'prop-types'
import { createPortal } from 'react-dom'
import { Transition, TransitionGroup } from 'react-transition-group'
import OIOContext from '../OIOProvider/context'
import { NotificationInline, View } from '..'

// =================================================
// Constants
// =================================================

const animationDuration = 600
const notificationDisplayDuration = 3500
const notificationContainerId = 'oio-notification-container'

// =================================================
// Context
// =================================================

const NotificationManagerContext = createContext()

// =================================================
// Provider
// =================================================

const NotificationManagerProvider = ({ children }) => {
   const oioContext = useContext(OIOContext)
   const notificationContainer = useRef(document.getElementById(notificationContainerId))

   if (!notificationContainer.current) {
      notificationContainer.current = document.createElement('div')
      notificationContainer.current.setAttribute('id', notificationContainerId)
      notificationContainer.current.style.display = 'flex'
      notificationContainer.current.style.flexFlow = 'column'
      notificationContainer.current.style.alignItems = 'flex-end'
      notificationContainer.current.style.position = 'absolute'
      notificationContainer.current.style.bottom = 0
      notificationContainer.current.style.width = '400px'
      notificationContainer.current.style.right = 0
      notificationContainer.current.style.padding = '24px'
      notificationContainer.current.style.pointerEvents = 'none'
      notificationContainer.current.style.fontFamily = oioContext.fontFamily
      notificationContainer.current.style.fontSize = oioContext.fontSize
      document.body.appendChild(notificationContainer.current)

      // Don't bother unmounting the container when this component unmounts,
      // because it is shared for all NotificationManager components
   }

   const [notifications, setNotifications] = useState([])
   const showNotification = ({ message, title, type }) => {
      const rand = Math.floor(Math.random() * Math.floor(1000))
      const id = `${Date.now()}-${rand}`

      setNotifications([
         { id, message, title, type },
         ...notifications
      ])

      setTimeout(() => {
         setNotifications(activeNotifications => activeNotifications.filter(n => n.id !== id))
      }, notificationDisplayDuration)
   }

   return (
      <NotificationManagerContext.Provider value={{ showNotification }}>
         {children}
         {createPortal(
            <TransitionGroup>
               {notifications.map(notification => (
                  <Transition
                     key={notification.id}
                     timeout={{
                        appear: 0,
                        enter: 0,
                        exit: animationDuration
                     }}>
                     {(state) => {
                        const isAnimating = state === 'entering' || state === 'exiting'
                        return (
                           <View
                              float="left"
                              flex="0 0 auto"
                              width="400px"
                              marginTop="3px"
                              borderRadius="8px"
                              boxShadow="6px 6px 30px rgba(0,0,0,0.5)"
                              css={{
                                 transition: `${animationDuration}ms ease-in-out`,
                                 opacity: isAnimating ? '0' : '1',
                                 transform: isAnimating
                                    ? 'translateX(120%)'
                                    : 'translateX(0)'
                              }}>
                              <NotificationInline
                                 backgroundColor="rgba(40,40,40,0.95)"
                                 borderRadius="8px"
                                 message={notification.message}
                                 iconSpacing="24px"
                                 paddingHorizontal="24px"
                                 paddingVertical="24px"
                                 textColor="#fff"
                                 title={notification.title}
                                 type={notification.type}
                              />
                           </View>
                        )
                     }}
                  </Transition>
               ))}
            </TransitionGroup>,
            notificationContainer.current
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
