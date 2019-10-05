import React, { useEffect, useRef, useState } from 'react'
/** @jsx jsx */
import { jsx } from '@emotion/core'
import animateScrollTo from 'animated-scroll-to'
import PropTypes from 'prop-types'
import useDimensions from 'react-use-dimensions'
import { Grid, GridCell, View, useWindowResizeSensor } from '../'
import ArrowLeftIcon from '../assets/icons/arrowLeft'
import ArrowRightIcon from '../assets/icons/arrowRight'
import generateResponsiveObject from '../utils/generateResponsiveObject'
import style from './style'

// =======================================================
// Component
// =======================================================

const Carousel = ({
   buttonBackgroundColor,
   buttonIconColor,
   buttonIconSize,
   buttonIconStrokeWidth,
   buttonOffsetFromSides,
   buttonOffsetFromTop,
   buttonSize,
   children,
   onRotate,
   numSlidesPerPane,
   spacing
}) => {
   const [carouselRef, { width: componentWidth }] = useDimensions()
   const paneContainerRef = useRef(null)
   const [currentPaneIndex, setCurrentPaneIndex] = useState(0)
   const { currentBreakpoint } = useWindowResizeSensor()
   const numSlidesPerPaneResponsive = generateResponsiveObject(numSlidesPerPane)
   const currentNumSlidesPerPane = numSlidesPerPaneResponsive[currentBreakpoint]
   const numItems = children.length

   // The Carousel component distributes all slide into 'rotatable' panes
   // Only one pane is visible at a time
   const numPanes = Math.ceil(numItems / currentNumSlidesPerPane)
   const paneContainerWidth = `calc(${numPanes}00% + ${(numPanes - 1) * spacing}px)`
   const gridColumns = numPanes * currentNumSlidesPerPane

   // =======================================================
   // Prev / Next Arrow Buttons
   // =======================================================

   const buttonIconProps = {
      width: buttonIconSize,
      height: buttonIconSize,
      color: buttonIconColor,
      strokeWidth: buttonIconStrokeWidth
   }

   const nextSlideIndex = currentPaneIndex + 1
   const prevSlideIndex = currentPaneIndex - 1
   const showPrevArrowButton = currentPaneIndex > 0
   const showNextArrowButton = currentPaneIndex + 1 < numPanes

   // =======================================================
   // useEffect
   // =======================================================

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
               id="oio-carousel-left-arrow-button"
               role="button"
               onKeyUp={() => setCurrentPaneIndex(prevSlideIndex)}
               onClick={() => setCurrentPaneIndex(prevSlideIndex)}
               backgroundColor={buttonBackgroundColor}
               width={buttonSize}
               height={buttonSize}
               top={buttonOffsetFromTop}
               left={buttonOffsetFromSides}
               {...style.arrowButton}>
               <ArrowLeftIcon {...buttonIconProps} />
            </View>
         )}
         {showNextArrowButton && (
            <View
               id="oio-carousel-right-arrow-button"
               role="button"
               onKeyUp={() => setCurrentPaneIndex(nextSlideIndex)}
               onClick={() => setCurrentPaneIndex(nextSlideIndex)}
               backgroundColor={buttonBackgroundColor}
               width={buttonSize}
               height={buttonSize}
               top={buttonOffsetFromTop}
               right={buttonOffsetFromSides}
               {...style.arrowButton}>
               <ArrowRightIcon {...buttonIconProps} />
            </View>
         )}
      </View>
   )
}

// =======================================================
// Props & Export
// =======================================================

Carousel.propTypes = {
   buttonBackgroundColor: PropTypes.string,
   buttonIconColor: PropTypes.string,
   buttonIconSize: PropTypes.string,
   buttonIconStrokeWidth: PropTypes.string,
   buttonOffsetFromSides: PropTypes.string,
   buttonOffsetFromTop: PropTypes.string,
   buttonSize: PropTypes.string,
   children: PropTypes.node.isRequired,
   numSlidesPerPane: PropTypes.string,
   onRotate: PropTypes.func,
   spacing: PropTypes.number
}

Carousel.defaultProps = {
   buttonBackgroundColor: '#fff',
   buttonIconColor: '#555',
   buttonIconSize: '12px',
   buttonIconStrokeWidth: '4px',
   buttonOffsetFromSides: '-12px[a] -24px[b-f]',
   buttonOffsetFromTop: 'calc(50% - 18px)[a] calc(50% - 24px)[b-f]',
   buttonSize: '36px[a] 48px[b-f]',
   numSlidesPerPane: '1',
   onRotate: undefined,
   spacing: 12
}

export default Carousel
