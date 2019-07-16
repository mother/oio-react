import React, {
   forwardRef,
   useImperativeHandle,
   useEffect,
   useRef,
   useState
} from 'react'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'

import CheckmarkIcon from 'assets/icons/checkmarkCircled'
import CloseIcon from 'assets/icons/closeCircled'
import Dialog from 'src/components/Dialog'
import InfoIcon from 'assets/icons/infoCircled'
import QuestionIcon from 'assets/icons/questionCircled'
import WarningIcon from 'assets/icons/warningCircled'

import { Spinner, Text, View } from '..'

// =======================================================
// Types
// =======================================================

const notificationTypes = {
   error: {
      color: 'rgba(249, 80, 70, 0.9)',
      icon: CloseIcon
   },
   info: {
      color: 'rgb(43, 159, 255)',
      icon: InfoIcon
   },
   loading: {
      color: 'rgb(255, 255, 255)',
      icon: Spinner
   },
   prompt: {
      color: 'rgb(38, 213, 192)',
      icon: QuestionIcon
   },
   success: {
      color: 'rgb(39, 221, 122)',
      icon: CheckmarkIcon
   },
   warning: {
      color: 'rgb(252, 185, 53)',
      icon: WarningIcon
   }
}

// =======================================================
// Component
// =======================================================

const NotificationInline = ({
/* eslint-disable react/prop-types */
   autoHide,
   autoHideAfterDuration,
   backgroundColor,
   borderRadius,
   children,
   height,
   iconGutter,
   iconSize,
   message,
   paddingHorizontal,
   paddingVertical,
   title,
   type,
   width
/* eslint-enable react/prop-types */
}, ref) => {
   const notificationDialog = useRef(null)
   const iconColor = notificationTypes[type].color
   const Icon = notificationTypes[type].icon
   const icon = (
      <Icon
         width="60%"
         height="60%"
         strokeWidth="2px"
         color={iconColor}
      />
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
         ref={notificationDialog}
         alignItems="center"
         float="left"
         width="100%"
         paddingHorizontal={paddingHorizontal || '18px[a-d] 24px[e-f]'}
         paddingVertical={paddingVertical || '18px[a-d] 24px[e-f]'}
         borderRadius={borderRadius}
         backgroundColor={backgroundColor || tinycolor(iconColor).setAlpha('.2')
         }>
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
               marginRight="18px[a-d] 24px[e-f]"
               backgroundColor={tinycolor(iconColor).setAlpha('.25')}>
               {icon}
            </View>
            <View
               flex="1 1 auto"
               display="flex"
               flexFlow="column[a-b] row[c-f]"
               justifyContent="space-between">
               <View>
                  <Text
                     size="2"
                     weight="bold"
                     color={tinycolor(iconColor).saturate(30).darken(30)}>
                     {title}
                  </Text>
                  <View float="left" width="100%" height="1px[a-d] 3px[e-f]" />
                  <Text
                     size="1.5"
                     lineHeight="140%"
                     color={tinycolor(iconColor).saturate(30).darken(30)}
                     style={{ opacity: 0.7 }}>
                     {message}
                  </Text>
               </View>
               {/* {notificationButtons && (
                  <View
                     flex="0 0 auto"
                     display="flex"
                     justifyContent="flex-end"
                     marginTop="18px[a-b]"
                     marginLeft="12px[c-f]">
                     {notificationButtons}
                  </View>
               )} */}
            </View>
         </View>
      </View>
   )
}

const ReferenceableNotificationInline = forwardRef(NotificationInline)

ReferenceableNotificationInline.propTypes = {
   autoHide: PropTypes.bool,
   autoHideAfterDuration: PropTypes.number,
   backgroundColor: PropTypes.string,
   borderRadius: PropTypes.string,
   children: PropTypes.node,
   height: PropTypes.string,
   iconGutter: PropTypes.string,
   iconSize: PropTypes.string,
   message: PropTypes.string.isRequired,
   paddingHorizontal: PropTypes.string,
   paddingVertical: PropTypes.string,
   title: PropTypes.string.isRequired,
   type: PropTypes.oneOf([
      'error',
      'info',
      'loading',
      'prompt',
      'success',
      'warning'
   ]).isRequired,
   width: PropTypes.string
}

ReferenceableNotificationInline.defaultProps = {
   autoHide: false,
   autoHideAfterDuration: 5000,
   backgroundColor: undefined,
   borderRadius: undefined,
   children: undefined,
   height: undefined,
   iconGutter: undefined,
   iconSize: undefined,
   paddingHorizontal: undefined,
   paddingVertical: undefined,
   width: undefined
}

export default ReferenceableNotificationInline
