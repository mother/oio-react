import React, { useRef, useState } from 'react'
import { View } from '../../../src'

const supportedEvents = [
   'onAnimationEnd', 'onAnimationStart', 'onAnimationIteration',
   'onClick', 'onDoubleClick', 'onKeyDown', 'onKeyPress', 'onKeyUp',
   'onMouseDown', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onScroll',
   'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onTransitionEnd'
]

const ViewEventsSpecimen = () => {
   const viewRef = useRef(null)
   const [eventType, setEventType] = useState(null)
   const [mousePosition, setMousePosition] = useState(null)

   const handleEvent = (e) => {
      viewRef.current.focus()
      if (e.type === 'mouseout') setMousePosition(null)
      if (e.type !== 'mousemove') setEventType(e.type)
      else setMousePosition([e.clientX, e.clientY])
   }

   const eventProps = supportedEvents.reduce((result, eventName) => {
      result[eventName] = handleEvent
      return result
   }, {})

   return (
      <View
         ref={viewRef}
         backgroundColor="#fff4eb"
         border="1px solid #f46f36"
         borderRadius="6px"
         padding="30px"
         tabIndex="0"
         {...eventProps}>
         {eventType && `Last Event Type: ${eventType}`}<br />
         {mousePosition && `Mouse Position: ${mousePosition[0]}, ${mousePosition[1]}`}
      </View>
   )
}

ViewEventsSpecimen.title = 'Supported Events'

ViewEventsSpecimen.description = `
The <code>View</code> component supports the following React  events:<br /><br />
<code>
   onAnimationEnd, onAnimationStart, onAnimationIteration,
   onClick, onDoubleClick, onKeyDown, onKeyPress, onKeyUp,
   onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onScroll,
   onTouchCancel, onTouchEnd, onTouchMove, onTouchStart, onTransitionEnd
</code>
<br /><br />
(Visit <a href="https://reactjs.org/docs/events.html">https://reactjs.org/docs/events.html</a> for more information about React SyntheticEvents)
`

ViewEventsSpecimen.codeSnippet = `
const supportedEvents = [
   'onAnimationEnd', 'onAnimationStart', 'onAnimationIteration',
   'onClick', 'onDoubleClick', 'onKeyDown', 'onKeyPress', 'onKeyUp',
   'onMouseDown', 'onMouseMove', 'onMouseOut', 'onMouseOver', 'onMouseUp', 'onScroll',
   'onTouchCancel', 'onTouchEnd', 'onTouchMove', 'onTouchStart', 'onTransitionEnd'
]

const viewRef = useRef(null)
const [eventType, setEventType] = useState(null)
const [mousePosition, setMousePosition] = useState(null)

const handleEvent = (e) => {
   viewRef.current.focus()
   if (e.type === 'mouseout') setMousePosition(null)
   if (e.type !== 'mousemove') setEventType(e.type)
   else setMousePosition([e.clientX, e.clientY])
}

const eventProps = supportedEvents.reduce((result, eventName) => {
   result[eventName] = handleEvent
   return result
}, {})

return (
   <View
      ref={viewRef}
      backgroundColor="#fff4eb"
      border="1px solid #f46f36"
      borderRadius="6px"
      padding="30px"
      tabIndex="0"
      {...eventProps}>
      {eventType && \`Last Event Type: \${eventType}\`}<br />
      {mousePosition && \`Mouse Position: \${mousePosition[0]}, \${mousePosition[1]}\`}
   </View>
)`

export default ViewEventsSpecimen
