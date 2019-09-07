import React, { useEffect, useRef, useState } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import View from '../View'
import style from './style'

// =======================================================
// Component
// =======================================================

const Popover = ({
   backgroundColor,
   borderRadius,
   boxShadow,
   children,
   closeAnimationDuration,
   closeAnimationName,
   height,
   margin,
   maxHeight,
   maxWidth,
   minHeight,
   minWidth,
   onBodyClick,
   onClose,
   onCloseComplete,
   onCloseTrigger,
   onOpen,
   onOpenComplete,
   open,
   openAnimationDuration,
   openAnimationName,
   overlayBackgroundColor,
   shouldPropagatePointerEvents,
   width,
   zIndex
}) => {
   const [isClosing, setIsClosing] = useState(false)

   // Popover is active at any point that it is open or in the process of opening or closing.
   // This uses a ref, as opposed to state, because changes to it do not need to trigger a
   // re-render.
   // It is necessary for 2 reasons:
   // - To prevent animating the modal closed if it isn't currently open (eg during initial render)
   // - To prevent flickers during the transition from when `open` is set to false and `isClosing`
   //   is set to true.
   const modalIsActive = useRef(open)
   modalIsActive.current = open || modalIsActive.current

   const animationType = isClosing
      ? 'close'
      : 'open'

   // Open and close animations can be customized through props
   const animationName = animationType === 'open'
      ? openAnimationName
      : closeAnimationName

   // Open and close animation duration can be customized through props
   const animationDuration = animationType === 'open'
      ? `${openAnimationDuration}ms`
      : `${closeAnimationDuration}ms`

   // =======================================================
   // Create Popover Portal Container
   // =======================================================

   // if (!document.getElementById('oio-modal-container')) {
   //    const modalPortalElement = document.createElement('div')
   //    modalPortalElement.id = 'oio-modal-container'
   //
   //    // Append Popover Portal to OIO Container
   //    // If no OIO Container exists, we append to body
   //    const oioContainer = document.getElementById('oio-container') || document.body
   //    oioContainer.appendChild(modalPortalElement)
   // }

   const portal = document.getElementById('open-modal-button') || document.body

   // =======================================================
   // Styles for Popover Window
   // =======================================================

   const windowProps = {
      width,
      height,
      backgroundColor,
      borderRadius,
      boxShadow,
      margin,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth
   }

   // =======================================================
   // Open and Close Events
   // =======================================================

   const handleBodyClick = () => {
      window.removeEventListener('click', handleBodyClick, false)

      if (onBodyClick) {
         onBodyClick()
      }
   }

   // When open animation has completed
   const handleOpenComplete = () => {
      if (onOpenComplete) {
         onOpenComplete()
      }
   }

   // When Close Animation has completed
   const handleCloseComplete = () => {
      modalIsActive.current = false
      setIsClosing(false)
      // portal.removeAttribute('style')

      if (onCloseComplete) {
         onCloseComplete()
      }
   }

   // =======================================================
   // Handle changes to open prop
   // =======================================================

   useEffect(() => {
      if (open) {
         window.addEventListener('click', handleBodyClick, false)
         // We need to ensure the portal container has the following style
         // to ensure that the modal displays correctly and fills the entire screen
         // Note: we ONLY want it to have this style when modal is open,
         // otherwise it may cover content  while modal is closed
         // portal.setAttribute(
         //    'style',
         //    'position: fixed; top: 0; left: 0; right: 0; bottom: 0;'
         // )

         if (onOpen) {
            onOpen()
         }

      // If Popover open changes from true to false,
      // begin close animation only if Popover was previously open
      } else if (modalIsActive.current) {
         setIsClosing(true)

         if (onClose) {
            onClose()
         }
      }

      return () => {
         window.removeEventListener('click', handleBodyClick, false)
         // portal.removeAttribute('style')
      }
   }, [open])

   // =======================================================
   // Cleanup on unmount
   // =======================================================

   // useEffect(() => () => portal.remove(), [])

   // =======================================================
   // Render
   // =======================================================

   return ReactDOM.createPortal(
      <View
         transform={open
            ? 'translate3d(0,0,0)'
            : 'translate3d(-10000%,0,0)'
         }
         css={{ pointerEvents: shouldPropagatePointerEvents ? 'none' : 'auto' }}
         position="absolute"
         t2op={open ? '12px' : '30px'}
         top="30px"
         left="0px"
         zIndex={zIndex}>
         <View
            {...windowProps}
            onAnimationEnd={open ? handleOpenComplete : handleCloseComplete}
            textAlign="left"
            css={style.window({ animationType, animationName, animationDuration })}>
            {children}
         </View>
      </View>,
      portal
   )
}

// =======================================================
// Props + Export
// =======================================================

Popover.propTypes = {
   backgroundColor: PropTypes.string,
   boxShadow: PropTypes.string,
   borderRadius: PropTypes.string,
   children: PropTypes.node,
   closeAnimationDuration: PropTypes.number,
   closeAnimationName: PropTypes.oneOf(['fadeOut', 'scaleOut', 'moveToRight']),
   height: PropTypes.string,
   margin: PropTypes.string,
   maxHeight: PropTypes.string,
   maxWidth: PropTypes.string,
   minHeight: PropTypes.string,
   minWidth: PropTypes.string,
   onClose: PropTypes.func,
   onCloseComplete: PropTypes.func,
   onCloseTrigger: PropTypes.func,
   onOpen: PropTypes.func,
   onOpenComplete: PropTypes.func,
   open: PropTypes.bool,
   openAnimationDuration: PropTypes.number,
   openAnimationName: PropTypes.oneOf(['appear', 'fadeIn', 'moveFromBottom', 'scaleIn']),
   overlayBackgroundColor: PropTypes.string,
   // This is for rare cases (like notifications)
   // where we want the user to be able to interact with elements
   // behind the modal overlay
   shouldPropagatePointerEvents: PropTypes.bool,
   width: PropTypes.string.isRequired,
   zIndex: PropTypes.number
}

Popover.defaultProps = {
   backgroundColor: '#fff',
   borderRadius: '0px',
   boxShadow: '6px 6px 30px rgba(0,0,0,0.15)',
   children: undefined,
   closeAnimationDuration: 200,
   closeAnimationName: 'scaleOut',
   height: 'auto',
   margin: '0px',
   maxHeight: undefined,
   maxWidth: undefined,
   minHeight: undefined,
   minWidth: undefined,
   onClose: undefined,
   onCloseComplete: undefined,
   onCloseTrigger: undefined,
   onOpen: undefined,
   onOpenComplete: undefined,
   open: false,
   openAnimationDuration: 400,
   openAnimationName: 'scaleIn',
   overlayBackgroundColor: 'rgba(0,0,0,0.4)',
   shouldPropagatePointerEvents: false,
   width: undefined,
   zIndex: 10000
}

export default Popover
