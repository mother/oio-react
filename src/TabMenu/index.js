import React, { useContext, useEffect, useRef, useState } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import animateScrollTo from 'animated-scroll-to'
import PropTypes from 'prop-types'
import { withSize } from 'react-sizeme'
import tinycolor from 'tinycolor2'
import { View } from '../../src'
import { buttonSizeDefaults } from '../Button'
import OIOContext from '../OIOProvider/context'
import ArrowLeftIcon from './arrowLeft'
import ArrowRightIcon from './arrowRight'

// =======================================================
// UI Constants
// =======================================================

// Character Width is used to calculate tab width
const characterWidth = 7
// The amount in pixels to scroll x-position when clicking prev/next arrow buttons
const scrollIncrement = 270

// =======================================================
// Arrow Button Style
// =======================================================

const arrowButtonStyleProps = {
   role: 'button',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   position: 'absolute',
   height: '100%',
   width: '42px',
   top: '0px',
   transition: '300ms'
}

// =======================================================
// Convert "Human" alignment options
// to corresponding flexbox values
// (at least for the sake of this component)
// =======================================================

const flexboxAlignmentConversion = {
   left: 'flex-start',
   center: 'center',
   right: 'flex-end'
}

// =======================================================
// Component
// =======================================================

const TabMenu = ({
   align,
   backgroundColor,
   buttonPaddingHorizontal,
   buttonSize,
   buttonSpacing,
   children,
   highlightColor,
   paddingHorizontal,
   size
}) => {
   const tabContainer = useRef(null)
   const [currentScrollIndex, setCurrentScrollIndex] = useState(0)

   const { buttonLinkAdapter } = useContext(OIOContext)
   let linkHasAlreadyMatched = false

   // Calculate Component's width using react-sizeme
   const componentWidth = size.width

   // Calculate Tab Container Width
   // Calculate Initiative type tabs container width by using the combined number of characters
   // of all initiative types. We assume that each character occupies 7px
   const tabContainerPadding = parseInt(paddingHorizontal, 10) * 2
   const buttonPadding = parseInt(buttonPaddingHorizontal, 10) * 2
   const linkNamesAsCombinedString = children.map(child => child?.props?.name).join('')
   const combinedButtonWidths = (linkNamesAsCombinedString.length) * characterWidth
   const combinedButtonPadding = children.length * buttonPadding
   const combinedButtonSpacing = (children.length - 1) * parseInt(buttonSpacing, 10)
   const tabsContainerWidth = combinedButtonPadding + combinedButtonWidths +
      tabContainerPadding + combinedButtonSpacing

   // Tab Overflow
   // If there are more tabs than can be visible at once on screen,
   // we automatically add scroll (arrow) buttons
   const tabsDoOverflow = tabsContainerWidth > componentWidth
   const currentScrollPosition = (currentScrollIndex * scrollIncrement) + componentWidth
   const isScrolledToBeginning = currentScrollIndex === 0
   const isScrolledToEnd = currentScrollPosition >= tabsContainerWidth
   const showNextArrow = tabsDoOverflow && !isScrolledToEnd
   const showPrevArrow = tabsDoOverflow && !isScrolledToBeginning

   const isPlatformWithSafeScrollbars = [
      'Android',
      'iPhone',
      'iPod',
      'iPad'
      // 'MacIntel' //- this is disabled for now, may add back later
   ].includes(window.navigator.platform)

   // Clone TabButton children and pass props
   const tabMenuButtons = React.Children.map(children, (child, i) => {
      // This is to handle the cases where if buttons are mapped, there may be null values
      if (child) {
         let childIsActive = child.props.isActive
         if (!linkHasAlreadyMatched && child.props.linkTo && typeof childIsActive === 'undefined') {
            childIsActive = buttonLinkAdapter.isActive(child.props.linkTo)
            if (childIsActive) {
               linkHasAlreadyMatched = true
            }
         }

         return (
            <React.Fragment>
               {React.cloneElement(child, {
                  highlightColor,
                  isActive: childIsActive || false,
                  paddingHorizontal: buttonPaddingHorizontal,
                  size: buttonSize
               })}
               {i < (children.length - 1) && (
                  <View
                     float="left"
                     width={buttonSpacing}
                     height="100%"
                  />
               )}
            </React.Fragment>
         )
      }

      return null
   })

   // If tabContainer is scrolled, we need to update the currentScrollIndex
   // so that the prev/next arrows update accordingly
   const handleScroll = (e) => {
      const scrollPosition = e.currentTarget.scrollLeft

      if (scrollPosition <= 0) {
         setCurrentScrollIndex(0)
      } else if (scrollPosition > tabsContainerWidth - componentWidth) {
         const endScrollIndex = Math.round(tabsContainerWidth / scrollIncrement)
         setCurrentScrollIndex(endScrollIndex - 1)
      }
   }

   // When Prev/Next Arrow button(s) are pressed, currentScrollIndex is updated,
   // and scrollTo new position
   useEffect(() => {
      const newScrollPosition = currentScrollIndex * scrollIncrement

      animateScrollTo([newScrollPosition, null], {
         elementToScroll: tabContainer.current,
         speed: 500
      })
   }, [currentScrollIndex])

   return (
      <View
         position="relative"
         float="left"
         width="100%"
         backgroundColor={backgroundColor}
         style={{ overflow: 'hidden' }}>
         <View
            ref={tabContainer}
            display={tabsDoOverflow ? 'block' : 'flex'}
            justifyContent={flexboxAlignmentConversion[align]}
            onScroll={tabsDoOverflow ? handleScroll : undefined}
            float="left"
            width="100%"
            height={`calc(${buttonSizeDefaults[buttonSize].height} + 6px)`}
            style={{
               overflow: 'hidden',
               overflowX: isPlatformWithSafeScrollbars ? 'auto' : 'hidden',
               WebkitOverflowScrolling: 'touch'
            }}>
            <View
               float="left"
               width={tabsDoOverflow ? `${tabsContainerWidth}px` : 'auto'}
               paddingHorizontal={paddingHorizontal}
               height="100%">
               {tabMenuButtons}
            </View>
         </View>
         {showPrevArrow && (
            <View
               {...arrowButtonStyleProps}
               id="tabsPrevButton"
               backgroundColor={backgroundColor}
               css={{
                  cursor: 'pointer',
                  '&:hover': {
                     backgroundColor: tinycolor(backgroundColor).darken(10).toString()
                  }
               }}
               onKeyUp={() => setCurrentScrollIndex(currentScrollIndex - 1)}
               onClick={() => setCurrentScrollIndex(currentScrollIndex - 1)}
               left="0px"
               boxShadow={`6px 0px 18px ${tinycolor(backgroundColor).toRgbString()}`}>
               <ArrowLeftIcon
                  width="9px"
                  height="9px"
                  strokeWidth="4px"
                  color="#555"
               />
            </View>
         )}
         {showNextArrow && (
            <View
               {...arrowButtonStyleProps}
               id="tabsNextButton"
               backgroundColor={backgroundColor}
               css={{
                  cursor: 'pointer',
                  '&:hover': {
                     backgroundColor: tinycolor(backgroundColor).darken(10).toString()
                  }
               }}
               onKeyUp={() => setCurrentScrollIndex(currentScrollIndex + 1)}
               onClick={() => setCurrentScrollIndex(currentScrollIndex + 1)}
               right="0px"
               boxShadow={`-6px 0px 18px ${tinycolor(backgroundColor).toRgbString()}`}>
               <ArrowRightIcon
                  width="9px"
                  height="9px"
                  strokeWidth="4px"
                  color="#555"
               />
            </View>
         )}
      </View>
   )
}

TabMenu.propTypes = {
   align: PropTypes.oneOf(['left', 'center', 'right']),
   backgroundColor: PropTypes.string,
   buttonPaddingHorizontal: PropTypes.string,
   buttonSize: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
   buttonSpacing: PropTypes.string,
   children: PropTypes.node.isRequired,
   highlightColor: PropTypes.string,
   paddingHorizontal: PropTypes.string,
   size: PropTypes.object.isRequired
}

TabMenu.defaultProps = {
   align: 'left',
   backgroundColor: '#fff',
   buttonSize: 'lg',
   buttonPaddingHorizontal: '12px',
   buttonSpacing: '0px',
   highlightColor: '#000',
   paddingHorizontal: '0px'
}

export default withSize()(TabMenu)
