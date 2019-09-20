import { useCallback, useEffect, useRef, useState } from 'react'
import { breakpoints } from '../../config/constants'

const breakpointKeys = Object.keys(breakpoints)
const getBreakpoint = width => breakpointKeys.find(key => width <= breakpoints[key])

const useWindowResizeSensor = ({ refreshRate = 16 } = {}) => {
   const [sizeData, setSizeData] = useState({
      currentBreakpoint: getBreakpoint(window.innerWidth),
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
   })

   const timer = useRef()

   // Use a timer to debounce setting state data to prevent overly frequently re-renders
   const handleWindowResize = useCallback(() => {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
         setSizeData({
            currentBreakpoint: getBreakpoint(window.innerWidth),
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
         })
      }, refreshRate)
   }, [])

   useEffect(() => {
      window.addEventListener('resize', handleWindowResize)

      // Remove event listener on component unmount
      return () => window.removeEventListener('resize', handleWindowResize)
   }, [])

   return sizeData
}

export {
   getBreakpoint,
   useWindowResizeSensor as default
}
