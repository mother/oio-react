import React, { useEffect, useRef, useState } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import animateScrollTo from 'animated-scroll-to'
import PropTypes from 'prop-types'
import useDimensions from 'react-use-dimensions'
import { Grid, GridCell, View, useWindowResizeSensor } from '../'
import ArrowLeftIcon from '../assets/icons/arrowLeft'
import ArrowRightIcon from '../assets/icons/arrowRight'
import style from './style'

// =======================================================
// Component
// =======================================================

const Carousel = ({
   arrowOffsetFromTop,
   children,
   onRotate,
   numSlidesPerPane,
   spacing
}) => {
   const [carouselRef, { width: componentWidth }] = useDimensions()
   const paneContainerRef = useRef(null)
   const [currentPaneIndex, setCurrentPaneIndex] = useState(0)
   const { currentBreakpoint } = useWindowResizeSensor()
   const numItems = children.length

   // The Carousel component distributes all slide into 'rotatable' panes
   // Only one pane is visible at a time
   const numPanes = Math.ceil(numItems / numSlidesPerPane[currentBreakpoint])
   const paneContainerWidth = `calc(${numPanes}00% + ${(numPanes - 1) * spacing}px)`
   const gridColumns = numPanes * numSlidesPerPane[currentBreakpoint]

   // Prev / Next Arrow Buttons
   const nextSlideIndex = currentPaneIndex + 1
   const prevSlideIndex = currentPaneIndex - 1
   const showPrevArrowButton = currentPaneIndex > 0
   const showNextArrowButton = currentPaneIndex + 1 < numPanes

   useEffect(() => {
      // When window is resized, the currentPaneIndex and total number of panes
      // might change. For example, at viewport size A,
      // you might be on currentPaneIndex 9 of 10.
      // But at size D, you may only have a total of only 6 panes.
      // The currentPaneIndex needs to be set to accomodate for this
      const currentSlideNumber = currentPaneIndex + 1
      if (numPanes > 0 && currentSlideNumber > numPanes) {
         setCurrentPaneIndex(numPanes - 1)
      }
   }, [numPanes, componentWidth])

   // If currentPaneIndex is updated or the componentWidth is updated (resized),
   // we scroll to new position
   useEffect(() => {
      const offset = currentPaneIndex * spacing
      const slideToPosition = (paneContainerRef.current.offsetWidth * currentPaneIndex) + offset

      animateScrollTo([slideToPosition, null], {
         elementToScroll: paneContainerRef.current,
         cancelOnUserAction: false,
         speed: 500
      })

      if (onRotate) {
         onRotate(currentPaneIndex + 1, numPanes)
      }
   }, [currentPaneIndex, componentWidth, numPanes])

   return (
      <View
         ref={carouselRef}
         position="relative"
         width="100%">
         <View
            ref={paneContainerRef}
            width="100%"
            style={{ overflow: 'hidden' }}>
            <View width={paneContainerWidth}>
               <Grid
                  columns={gridColumns}
                  spacing={`${spacing}px`}>
                  {React.Children.map(children, child => (
                     <GridCell>
                        {child}
                     </GridCell>
                  ))}
               </Grid>
            </View>
         </View>
         {showPrevArrowButton && (
            <View
               id="carouselLeftArrowButton"
               role="button"
               onKeyUp={() => setCurrentPaneIndex(prevSlideIndex)}
               onClick={() => setCurrentPaneIndex(prevSlideIndex)}
               top={`
                  calc(${arrowOffsetFromTop} - 18px - ${spacing / 2}px)[a]
                  calc(${arrowOffsetFromTop} - 24px - ${spacing / 2}px)[b-f]
               `}
               left="-12px[a] -24px[b-f]"
               {...style.arrowButton}>
               <ArrowLeftIcon
                  width="12px"
                  height="12px"
                  strokeWidth="4px"
                  color="#555"
               />
            </View>
         )}
         {showNextArrowButton && (
            <View
               id="carouselRightArrowButton"
               role="button"
               onKeyUp={() => setCurrentPaneIndex(nextSlideIndex)}
               onClick={() => setCurrentPaneIndex(nextSlideIndex)}
               top={`
                  calc(${arrowOffsetFromTop} - 18px - ${spacing / 2}px)[a]
                  calc(${arrowOffsetFromTop} - 24px - ${spacing / 2}px)[b-f]
               `}
               right="-12px[a] -24px[b-f]"
               {...style.arrowButton}>
               <ArrowRightIcon
                  width="12px"
                  height="12px"
                  strokeWidth="4px"
                  color="#555"
               />
            </View>
         )}
      </View>
   )
}

// =======================================================
// Props & Export
// =======================================================

Carousel.propTypes = {
   arrowOffsetFromTop: PropTypes.string,
   children: PropTypes.node.isRequired,
   onRotate: PropTypes.func,
   spacing: PropTypes.number,
   // TODO: Restructure to use OIOResponsiveObject
   numSlidesPerPane: PropTypes.shape({
      a: PropTypes.number.isRequired,
      b: PropTypes.number.isRequired,
      c: PropTypes.number.isRequired,
      d: PropTypes.number.isRequired,
      e: PropTypes.number.isRequired,
      f: PropTypes.number.isRequired
   }).isRequired
}

Carousel.defaultProps = {
   arrowOffsetFromTop: '50%',
   onRotate: undefined,
   spacing: 12
}

export default Carousel
