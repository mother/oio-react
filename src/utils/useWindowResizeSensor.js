import { useCallback, useEffect, useRef, useState } from 'react'
import { breakpoints } from '../../config/constants'

const getSizeData = () => {
   const windowWidth = window.innerWidth
   const windowHeight = window.innerHeight
   const currentBreakpoint = Object.keys(breakpoints).find(b => breakpoints[b] > windowWidth)
   return {
      currentBreakpoint,
      windowWidth,
      windowHeight
   }
}

const useWindowResizeSensor = ({ refreshRate = 16 } = {}) => {
   const [sizeData, setSizeData] = useState(getSizeData())
   const timer = useRef()

   const handleWindowResize = useCallback(() => {
      clearTimeout(timer.current)
      timer.current = setTimeout(() => {
         setSizeData(getSizeData())
      }, refreshRate)
   }, [])

   useEffect(() => {
      window.addEventListener('resize', handleWindowResize)
      return () => window.removeEventListener('resize', handleWindowResize)
   }, [])

   return sizeData
}

export default useWindowResizeSensor
