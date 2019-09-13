import React, { useCallback, useRef, useState } from 'react'
import { Button, Popover, Text, View } from '../../../src'

const PopoverOpenSpecimen = () => {
   const [anchorElement, setAnchorElement] = useState()
   const handlePopoverRefCreated = useCallback(node => setAnchorElement(node), [])

   const [popoverIsOpen, setPopoverIsOpen] = useState(true)

   return (
      <View>
         <Button
            ref={handlePopoverRefCreated}
            onClick={() => setPopoverIsOpen(true)}
            name="Open Popover"
         />
         {anchorElement && (
            <Popover
               anchorElement={anchorElement}
               borderRadius="6px"
               width="240px"
               onBodyClick={() => setPopoverIsOpen(false)}
               onCloseTrigger={() => setPopoverIsOpen(false)}
               open={popoverIsOpen}>
               <View padding="24px">
                  <Text size="2">
                     The popover content. Click anywhere to close.
                  </Text>
               </View>
            </Popover>
         )}
      </View>
   )
}

PopoverOpenSpecimen.title = 'Open by Default'

PopoverOpenSpecimen.description = 'The following example shows a <code>Popover</code> component that is open by default. Note that this situation is a little more complicated, because the <code>ref</code> that stores the button node is not immediately set during the first render (a DOM node must be rendered to the DOM before it can be referenced). In addition, changes to a ref do not trigger a re-render, so we use state to hold a referenece to the DOM element so that a re-render is triggered. Therefore in this situation, we make sure the <code>ref</code> is set before rendering <code>Popover</code>.'

PopoverOpenSpecimen.codeSnippet = `
const [anchorElement, setAnchorElement] = useState()
const handlePopoverRefCreated = useCallback(node => setAnchorElement(node), [])

const [popoverIsOpen, setPopoverIsOpen] = useState(true)

return (
   <View>
      <Button
         ref={handlePopoverRefCreated}
         onClick={() => setPopoverIsOpen(true)}
         name="Open Popover"
      />
      {anchorElement && (
         <Popover
            anchorElement={anchorElement}
            borderRadius="6px"
            width="240px"
            onBodyClick={() => setPopoverIsOpen(false)}
            onCloseTrigger={() => setPopoverIsOpen(false)}
            open={popoverIsOpen}>
            <View padding="24px">
               <Text size="2">
                  The popover content. Click anywhere to close.
               </Text>
            </View>
         </Popover>
      )}
   </View>
)
`

export default PopoverOpenSpecimen
