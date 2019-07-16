import React from 'react'
import PropTypes from 'prop-types'
import CheckmarkIcon from '../assets/icons/checkmarkCircled'
import CloseIcon from '../assets/icons/closeCircled'
import InfoIcon from '../assets/icons/infoCircled'
import QuestionIcon from '../assets/icons/questionCircled'
import WarningIcon from '../assets/icons/warningCircled'
import { Spinner, Text, View } from '..'

// =======================================================
// Notification Types
// =======================================================

const notificationTypes = {
   error: {
      backgroundColor: 'rgba(236, 78, 68, 0.9)',
      icon: CloseIcon
   },
   info: {
      backgroundColor: 'rgb(43, 159, 255)',
      icon: InfoIcon
   },
   loading: {
      backgroundColor: 'rgb(255, 255, 255)',
      icon: Spinner
   },
   prompt: {
      backgroundColor: 'rgb(56, 207, 179)',
      icon: QuestionIcon
   },
   success: {
      backgroundColor: 'rgb(60, 193, 120)',
      icon: CheckmarkIcon
   },
   warning: {
      backgroundColor: 'rgb(255, 164, 60)',
      icon: WarningIcon
   }
}

// =======================================================
// Component
// =======================================================

const NotificationInline = ({
   backgroundColor,
   borderRadius,
   buttonPlacement,
   buttons,
   children,
   iconColor,
   iconSpacing,
   iconSize,
   message,
   paddingHorizontal,
   paddingVertical,
   textColor,
   textSize,
   title,
   type
}) => {
   const notificationBackgroundColor = backgroundColor || notificationTypes[type].backgroundColor
   const NotificationIcon = notificationTypes[type].icon

   const notificationButtons = buttons && buttons.length > 0 && (
      <View>
         {buttons.map(button => button)}
      </View>
   )
   // const notificationButtons = React.Children.map(children, (child, index) => (
   //    React.cloneElement(child, {
   //       color: iconColor,
   //       isFirstChild: index === 0,
   //       notificationPlacement: placement
   //    })
   // ))

   return (
      <View
         display="block"
         alignItems="center"
         width="100%"
         paddingHorizontal={paddingHorizontal}
         paddingVertical={paddingVertical}
         borderRadius={borderRadius}
         backgroundColor={notificationBackgroundColor}>
         <View display="flex" flex="1 1 auto">
            <View
               flex="0 0 auto"
               display="flex"
               alignItems="center"
               justifyContent="center"
               float="left"
               width="30px[a-d] 36px[e-f]"
               height="30px[a-d] 36px[e-f]"
               borderRadius="50%"
               marginRight={iconSpacing}>
               <NotificationIcon
                  width="60%"
                  height="60%"
                  strokeWidth="2px"
                  color={iconColor}
               />
            </View>
            <View
               flex="1 1 auto"
               display="flex"
               flexFlow="column[a-b] row[e-f]"
               alignItems="flex-start[a-b] center[e-f]"
               justifyContent="space-between">
               <View paddingRight="12px">
                  <Text
                     size={textSize}
                     weight="bold"
                     color={textColor}>
                     {title}
                  </Text>
                  <View display="block" width="100%" height="1px" />
                  <Text
                     size={textSize}
                     lineHeight="140%"
                     color={textColor}
                     sizeMultiplier="0.95"
                     style={{ opacity: 0.7 }}>
                     {message}
                  </Text>
                  {children}
                  {notificationButtons && buttonPlacement === 'bottom' && (
                     <View marginTop={iconSpacing}>
                        {notificationButtons}
                     </View>
                  )}
               </View>
               {notificationButtons && buttonPlacement === 'right' && (
                  <View flex="0 0 auto">
                     {notificationButtons}
                  </View>
               )}
            </View>
         </View>
      </View>
   )
}

NotificationInline.propTypes = {
   backgroundColor: PropTypes.string,
   borderRadius: PropTypes.string,
   buttonPlacement: PropTypes.oneOf(['bottom', 'right']),
   buttons: PropTypes.array,
   children: PropTypes.node,
   iconColor: PropTypes.string,
   iconSpacing: PropTypes.string,
   iconSize: PropTypes.string,
   message: PropTypes.string.isRequired,
   paddingHorizontal: PropTypes.string,
   paddingVertical: PropTypes.string,
   textColor: PropTypes.string,
   textSize: PropTypes.string,
   title: PropTypes.string.isRequired,
   type: PropTypes.oneOf([
      'error',
      'info',
      'loading',
      'prompt',
      'success',
      'warning'
   ]).isRequired
}

NotificationInline.defaultProps = {
   backgroundColor: undefined,
   borderRadius: undefined,
   buttonPlacement: 'bottom',
   buttons: undefined,
   children: undefined,
   iconColor: '#fff',
   iconSpacing: '12px',
   iconSize: undefined,
   paddingHorizontal: '18px',
   paddingVertical: '18px',
   textColor: '#fff',
   textSize: '2'
}

export default React.memo(NotificationInline)
