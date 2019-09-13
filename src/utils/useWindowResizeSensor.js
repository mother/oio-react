import { useCallback, useEffect, useRef, useState } from 'react'
import { breakpoints } from '../../config/constants'

const getSizeData = () => {
   const windowWidth = window.innerWidth
   const windowHeight = window.innerHeight
   const currentBreakpoint = Object.keys(breakpoints).find(key => breakpoints[key] > windowWidth)
   return {
      currentBreakpoint,
      windowWidth,
      windowHeight
   }
}

const useWindowResizeSensor = ({ refreshRate = 16 } = {}) => {
   const [sizeData, setSizeData] = useState(getSizeData())
   const timer = useRef()

   // Use a timer to debounce setting state data to prevent overly frequently re-renders
   const handleWindowResize = useCallback(() => {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
         setSizeData(getSizeData())
      }, refreshRate)
   }, [])

   useEffect(() => {
      window.addEventListener('resize', handleWindowResize)

      // Remove event listener on component unmount
      return () => window.removeEventListener('resize', handleWindowResize)
   }, [])

   return sizeData
}

export default useWindowResizeSensor
