import React, { useContext, useEffect, useRef, useState } from 'react'
/** @jsx jsx */
import { jsx, Global } from '@emotion/core'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { oioContainerId } from '../../config/constants'
import OIOContext from '../OIOProvider/context'
import View from '../View'
import style from './style'

// =======================================================
// Component
// =======================================================

const Modal = ({
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
   const oioContext = useContext(OIOContext)
   const modalContainerPortal = useRef(document.createElement('div'))
   const [isClosing, setIsClosing] = useState(false)

   // Modal is active at any point that it is open or in the process of opening or closing.
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
   // Initialize Modal Container Portal
   // =======================================================

   useEffect(() => {
      const random = Math.floor(Math.random() * Math.floor(100000))
      const modalContainerId = `modal-container-${random}`
      modalContainerPortal.current.setAttribute('id', modalContainerId)
      modalContainerPortal.current.style.fontFamily = oioContext.fontFamily
      modalContainerPortal.current.style.fontSize = oioContext.fontSize
      modalContainerPortal.current.style.zIndex = zIndex
      document.body.appendChild(modalContainerPortal.current)

      // Remove container on unmount
      return () => modalContainerPortal.current.remove()
   }, [])

   // =======================================================
   // Styles for Modal Window
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

      modalContainerPortal.current.style.position = null
      modalContainerPortal.current.style.top = null
      modalContainerPortal.current.style.left = null
      modalContainerPortal.current.style.right = null
      modalContainerPortal.current.style.bottom = null

      if (onCloseComplete) {
         onCloseComplete()
      }
   }

   // Currently this is only triggered by clicking on overlay
   // TODO: Handle if user presses escape key
   const handleCloseTrigger = () => {
      if (onCloseTrigger) {
         onCloseTrigger()
      }
   }

   // =======================================================
   // Handle changes to open prop
   // =======================================================

   useEffect(() => {
      if (open) {
         // We need to ensure the portal container has the following style
         // to ensure that the modal displays correctly and fills the entire screen
         // Note: we ONLY want it to have this style when modal is open,
         // otherwise it may cover content  while modal is closed
         modalContainerPortal.current.style.position = 'fixed'
         modalContainerPortal.current.style.top = '0'
         modalContainerPortal.current.style.left = '0'
         modalContainerPortal.current.style.right = '0'
         modalContainerPortal.current.style.bottom = '0'

         if (onOpen) {
            onOpen()
         }

      // If Modal open changes from true to false,
      // begin close animation only if Modal was previously open
      } else if (modalIsActive.current) {
         setIsClosing(true)

         if (onClose) {
            onClose()
         }
      }
   }, [open])

   // =======================================================
   // Render
   // =======================================================

   return ReactDOM.createPortal(
      <View
         display={modalIsActive.current ? 'flex' : 'none'}
         css={{ pointerEvents: shouldPropagatePointerEvents ? 'none' : 'auto' }}
         justifyContent="center"
         alignItems="center"
         position="absolute"
         top="0px"
         left="0px"
         right="0px"
         bottom="0px">

         {/* When Modal is Open, we need to prevent body from scrolling */}
         {modalIsActive.current && <Global styles={{ body: { overflow: 'hidden' } }} />}

         {/* Modal Overlay */}
         <View
            position="absolute"
            top="0px"
            left="0px"
            right="0px"
            bottom="0px"
            backgroundColor={overlayBackgroundColor}
            css={style.overlay({ animationType, animationDuration })}
            onClick={handleCloseTrigger}
         />

         {/* Modal Window */}
         <View
            {...windowProps}
            onAnimationEnd={open ? handleOpenComplete : handleCloseComplete}
            css={style.window({ animationType, animationName, animationDuration })}>
            {children}
         </View>
      </View>,
      modalContainerPortal.current
   )
}

// =======================================================
// Props + Export
// =======================================================

Modal.propTypes = {
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

Modal.defaultProps = {
   backgroundColor: '#fff',
   borderRadius: '0px',
   boxShadow: '0px 3px 30px rgba(0,0,0,0.25)',
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

export default Modal
