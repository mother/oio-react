import { useCallback, useEffect, useRef, useState } from 'react'
import { breakpoints } from '../../config/constants'

const breakpointKeys = Object.keys(breakpoints)

const getCurrentBreakpoint = width =>
   breakpointKeys.find(key => width <= breakpoints[key]) || 'f'

const useWindowResizeSensor = ({ refreshRate = 16 } = {}) => {
   const [sizeData, setSizeData] = useState({
      currentBreakpoint: getCurrentBreakpoint(window.innerWidth),
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
   })

   const timer = useRef()

   // Use a timer to debounce setting state data to prevent overly frequently re-renders
   const handleWindowResize = useCallback(() => {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
         setSizeData({
            currentBreakpoint: getCurrentBreakpoint(window.innerWidth),
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
   getCurrentBreakpoint,
   useWindowResizeSensor as default
}
