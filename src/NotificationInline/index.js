import React from 'react'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'
import CheckmarkIcon from '../assets/icons/checkmarkCircled'
import CloseIcon from '../assets/icons/closeCircled'
import InfoIcon from '../assets/icons/infoCircled'
import QuestionIcon from '../assets/icons/questionCircled'
import WarningIcon from '../assets/icons/warningCircled'
import Spinner from '../Spinner'
import Text from '../Text'
import View from '../View'

// =======================================================
// Notification Types
// =======================================================

const notificationTypes = {
   error: {
      backgroundColor: 'rgba(247, 196, 190, 0.9)',
      icon: CloseIcon,
      iconColor: 'rgb(232, 84, 68)',
      textColor: 'rgb(131, 37, 37)'
   },
   info: {
      backgroundColor: 'rgb(204, 230, 250)',
      icon: InfoIcon,
      iconColor: 'rgb(66, 134, 238)',
      textColor: 'rgb(34, 74, 129)'
   },
   loading: {
      backgroundColor: 'rgb(84, 84, 84)',
      icon: Spinner,
      iconColor: 'rgb(200, 200, 200)',
      textColor: 'rgb(255, 255, 255)'
   },
   prompt: {
      backgroundColor: 'rgb(189, 249, 242)',
      icon: QuestionIcon,
      iconColor: 'rgb(11, 181, 181)',
      textColor: 'rgb(17, 93, 89)'
   },
   success: {
      backgroundColor: 'rgb(188, 246, 213)',
      icon: CheckmarkIcon,
      iconColor: 'rgb(45, 193, 126)',
      textColor: 'rgb(16, 65, 42)'
   },
   warning: {
      backgroundColor: 'rgb(255, 234, 159)',
      icon: WarningIcon,
      iconColor: 'rgb(242, 163, 28)',
      textColor: 'rgb(134, 83, 17)'
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
   contentMaxWidth,
   iconColor,
   iconSpacing,
   iconSize,
   id,
   message,
   paddingHorizontal,
   paddingVertical,
   style,
   textColor,
   textSize,
   title,
   type
}) => {
   const notificationBackgroundColor = backgroundColor || notificationTypes[type].backgroundColor
   const notificationIconColor = iconColor || notificationTypes[type].iconColor
   const notificationTextColor = textColor || notificationTypes[type].textColor

   // TODO: In the future, we will allow users to pass their own custom icon
   const NotificationIcon = notificationTypes[type].icon
   const notificationButtons = buttons && buttons.length > 0 && (
      <View>
         {buttons.map(button => button)}
      </View>
   )

   return (
      <View
         id={id}
         display="flex"
         justifyContent="center"
         width="100%"
         paddingHorizontal={paddingHorizontal}
         paddingVertical={paddingVertical}
         borderRadius={borderRadius}
         backgroundColor={notificationBackgroundColor}
         style={style}>
         <View display="flex" maxWidth={contentMaxWidth} width="100%">
            <View
               flex="0 0 auto"
               display="flex"
               alignItems="center"
               justifyContent="center"
               float="left"
               width={iconSize}
               height={iconSize}
               borderRadius="50%"
               marginTop="3px"
               backgroundColor={type === 'loading'
                  ? 'transparent'
                  : tinycolor(notificationIconColor).setAlpha('.2').toString()
               }
               padding="4px"
               marginRight={iconSpacing}>
               <NotificationIcon
                  width="100%"
                  height="100%"
                  color={notificationIconColor}
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
                     color={notificationTextColor}>
                     {title}
                  </Text>
                  <View display="block" width="100%" height="1px" />
                  <Text
                     size={textSize}
                     lineHeight="140%"
                     color={notificationTextColor}
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
                  <View marginTop="12px[a-b]" flex="0 0 auto">
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
   contentMaxWidth: PropTypes.string,
   iconColor: PropTypes.string,
   iconSpacing: PropTypes.string,
   iconSize: PropTypes.string,
   id: PropTypes.string,
   message: PropTypes.string.isRequired,
   paddingHorizontal: PropTypes.string,
   paddingVertical: PropTypes.string,
   style: PropTypes.object,
   textColor: PropTypes.string,
   textSize: PropTypes.string,
   title: PropTypes.string.isRequired,
   type: PropTypes.oneOf(Object.keys(notificationTypes)).isRequired
}

NotificationInline.defaultProps = {
   backgroundColor: undefined,
   borderRadius: undefined,
   buttonPlacement: 'bottom',
   buttons: undefined,
   children: undefined,
   contentMaxWidth: '100%',
   iconColor: undefined,
   iconSpacing: '18px',
   iconSize: '30px',
   id: undefined,
   paddingHorizontal: '18px',
   paddingVertical: '18px',
   style: undefined,
   textColor: undefined,
   textSize: '2'
}

export default React.memo(NotificationInline)
