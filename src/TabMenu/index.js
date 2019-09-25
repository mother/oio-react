import React, { useEffect, useRef, useState } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import animateScrollTo from 'animated-scroll-to'
import PropTypes from 'prop-types'
import { withSize } from 'react-sizeme'
import { View } from '../../src'
import ArrowLeftIcon from './arrowLeft'
import ArrowRightIcon from './arrowRight'

// =======================================================
// Arrow Button Style
// =======================================================

const arrowButtonStyleProps = {
   role: 'button',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   position: 'absolute',
   backgroundColor: '#fff',
   height: '100%',
   width: '42px',
   top: '0px'
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
   children,
   highlightColor,
   padding,
   size
}) => {
   const tabContainer = useRef(null)
   const [currentScrollIndex, setCurrentScrollIndex] = useState(0)

   // Calculate Component's width using react-sizeme
   const componentWidth = size.width

   // Calculate Tab Container Width
   // Calculate Initiative type tabs container width by using the combined number of characters
   // of all initiative types. We assume that each character occupies 7px and each tab
   // (except the last child) has a 30px margin
   const characterWidth = 7
   const tabMargin = 30
   const linkNamesAsCombinedString = children.map(child => child.props.name).join('')
   const combinedTabWidths = (linkNamesAsCombinedString.length) * characterWidth
   const combinedTabMargins = children.length * tabMargin
   const tabsContainerWidth = combinedTabMargins + combinedTabWidths + 120

   // Tab Overflow
   // If there are more tabs than can be visible at once on screen,
   // we automatically add scroll (arrow) buttons
   const tabsDoOverflow = tabsContainerWidth > componentWidth
   // The amount in pixels to scroll x-position when clicking prev/next arrow buttons
   const scrollIncrement = 270
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
         return (
            <React.Fragment>
               {React.cloneElement(child, {
                  highlightColor
               })}
               {i < (children.length - 1) && (
                  <View
                     float="left"
                     width="21px"
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
         style={{ overflow: 'hidden' }}>
         <View
            ref={tabContainer}
            display={tabsDoOverflow ? 'block' : 'flex'}
            justifyContent={flexboxAlignmentConversion[align]}
            paddingHorizontal={padding}
            onScroll={tabsDoOverflow ? handleScroll : undefined}
            float="left"
            width="100%"
            height="42px"
            style={{
               overflow: 'hidden',
               overflowX: isPlatformWithSafeScrollbars ? 'auto' : 'hidden',
               WebkitOverflowScrolling: 'touch'
            }}>
            <View
               float="left"
               width={tabsDoOverflow ? `${tabsContainerWidth}px` : 'auto'}
               height="100%">
               {tabMenuButtons}
            </View>
         </View>
         {showPrevArrow && (
            <View
               {...arrowButtonStyleProps}
               id="tabsPrevButton"
               css={{
                  cursor: 'pointer',
                  transition: '300ms',
                  '&:hover': {
                     backgroundColor: '#eee'
                  }
               }}
               onKeyUp={() => setCurrentScrollIndex(currentScrollIndex - 1)}
               onClick={() => setCurrentScrollIndex(currentScrollIndex - 1)}
               left="0px"
               boxShadow="6px 0px 18px rgba(255,255,255,1)">
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
               css={{
                  cursor: 'pointer',
                  transition: '300ms',
                  '&:hover': {
                     backgroundColor: '#eee'
                  }
               }}
               onKeyUp={() => setCurrentScrollIndex(currentScrollIndex + 1)}
               onClick={() => setCurrentScrollIndex(currentScrollIndex + 1)}
               right="0px"
               boxShadow="-6px 0px 18px rgba(255,255,255,1)">
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
   align: PropTypes.string,
   children: PropTypes.node.isRequired,
   highlightColor: PropTypes.string,
   padding: PropTypes.string,
   size: PropTypes.shape({
      width: PropTypes.number.isRequired
   }).isRequired
}

TabMenu.defaultProps = {
   align: 'left',
   highlightColor: '#000',
   padding: '0px'
}

export default withSize()(TabMenu)
