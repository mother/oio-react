import { useEffect, useRef, useState } from 'react'
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
   anchorElement,
   anchorOriginHorizontal,
   anchorOriginVertical,
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
   width,
   zIndex
}) => {
   const [isClosing, setIsClosing] = useState(false)

   // Popover is active at any point that it is open or in the process of opening or closing.
   // This uses a ref, as opposed to state, because changes to it do not need to trigger a
   // re-render.
   // It is necessary for 2 reasons:
   // - To prevent animating the popover closed if it isn't currently open
   // (eg during initial render)
   // - To prevent flickers during the transition from when `open` is set to false and `isClosing`
   //   is set to true.
   const popoverIsActive = useRef(open)
   popoverIsActive.current = open || popoverIsActive.current

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
   // Set Popover Portal
   // =======================================================

   const portalContainer = anchorElement || document.body

   // =======================================================
   // Styles for Popover Window
   // =======================================================

   const popoverProps = {
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
   // Popover Position
   // =======================================================

   const popoverPositionProps = {
      [anchorOriginHorizontal]: '0px',
      [anchorOriginVertical]: anchorElement
         ? `${anchorElement.offsetHeight}px`
         : '0px'
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
      popoverIsActive.current = false
      setIsClosing(false)

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

         if (onOpen) {
            onOpen()
         }

      // If Popover open changes from true to false,
      // begin close animation only if Popover was previously open
      } else if (popoverIsActive.current) {
         setIsClosing(true)

         if (onClose) {
            onClose()
         }
      }

      // Remove event listener on component unmount
      return () => {
         window.removeEventListener('click', handleBodyClick, false)
      }
   }, [open])

   // =======================================================
   // Render
   // =======================================================

   return ReactDOM.createPortal(
      <View
         {...popoverPositionProps}
         position="absolute"
         transform={open
            ? 'translate3d(0,0,0)'
            : 'translate3d(-10000%,0,0)'
         }
         zIndex={zIndex}>
         <View
            {...popoverProps}
            onAnimationEnd={open ? handleOpenComplete : handleCloseComplete}
            textAlign="left"
            css={style.window({ animationType, animationName, animationDuration })}>
            {children}
         </View>
      </View>,
      portalContainer
   )
}

// =======================================================
// Props + Export
// =======================================================

Popover.propTypes = {
   anchorElement: PropTypes.object,
   anchorOriginHorizontal: PropTypes.oneOf(['left', 'right']),
   anchorOriginVertical: PropTypes.oneOf(['bottom', 'top']),
   backgroundColor: PropTypes.string,
   boxShadow: PropTypes.string,
   borderRadius: PropTypes.string,
   children: PropTypes.node,
   closeAnimationDuration: PropTypes.number,
   closeAnimationName: PropTypes.oneOf(['fadeOut']),
   height: PropTypes.string,
   margin: PropTypes.string,
   maxHeight: PropTypes.string,
   maxWidth: PropTypes.string,
   minHeight: PropTypes.string,
   minWidth: PropTypes.string,
   onBodyClick: PropTypes.func,
   onClose: PropTypes.func,
   onCloseComplete: PropTypes.func,
   onOpen: PropTypes.func,
   onOpenComplete: PropTypes.func,
   open: PropTypes.bool,
   openAnimationDuration: PropTypes.number,
   openAnimationName: PropTypes.oneOf(['appear', 'fadeIn']),
   width: PropTypes.string.isRequired,
   zIndex: PropTypes.number
}

Popover.defaultProps = {
   anchorElement: undefined,
   anchorOriginHorizontal: 'left',
   anchorOriginVertical: 'top',
   backgroundColor: '#fff',
   borderRadius: '0px',
   boxShadow: '6px 6px 30px rgba(0,0,0,0.15)',
   children: undefined,
   closeAnimationDuration: 200,
   closeAnimationName: 'fadeOut',
   height: 'auto',
   margin: '0px',
   maxHeight: undefined,
   maxWidth: undefined,
   minHeight: undefined,
   minWidth: undefined,
   onBodyClick: undefined,
   onClose: undefined,
   onCloseComplete: undefined,
   onOpen: undefined,
   onOpenComplete: undefined,
   open: false,
   openAnimationDuration: 400,
   openAnimationName: 'fadeIn',
   width: undefined,
   zIndex: 10001
}

export default Popover
