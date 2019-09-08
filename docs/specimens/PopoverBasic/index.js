import React, { useState } from 'react'
import { Button, Popover, Text, View } from '../../../src'

const PopoverBasicSpecimen = () => {
   const [modalIsOpen, setPopoverIsOpen] = useState(false)

   return (
      <View>
         <Button
            id="open-modal-button"
            onClick={() => setPopoverIsOpen(true)}
            name="Open Popover"
         />
         <Popover
            anchorElementId="open-modal-button"
            borderRadius="6px"
            width="90%[a-b] 240px[c-f]"
            onBodyClick={() => setPopoverIsOpen(false)}
            onCloseTrigger={() => setPopoverIsOpen(false)}
            open={modalIsOpen}>
            <View
               id="close-modal-control"
               padding="30px"
               onClick={() => setPopoverIsOpen(false)}>
               <Text size="2">
                  The popover content. Click anywhere to close.
               </Text>
            </View>
         </Popover>
      </View>
   )
}

PopoverBasicSpecimen.title = 'Basic Usage'

PopoverBasicSpecimen.description = 'The following example shows a <code>Popover</code> component that is set to <code>open</code> through a <code>Button</code> using <code>useState</code>. The modal can be closed by clicking its overlay or the close link inside the modal. Note the <code>onCloseTrigger</code> prop. This prop is used to define a function that will be fired when the user clicks on the <code>Popover</code>\'s overlay. Also note that the following example is responsive.'

PopoverBasicSpecimen.codeSnippet = `
const [modalIsOpen, setPopoverIsOpen] = useState(false)

return (
   <View>
      <Button
         onClick={() => setPopoverIsOpen(true)}
         name="Open Popover"
      />
      <Popover
         borderRadius="6px"
         width="100%[a-b] 480px[c-f]"
         height="100%[a-b] 300px[c-f]"
         onCloseTrigger={() => setPopoverIsOpen(false)}
         open={modalIsOpen}>
         <View padding="30px" onClick={() => setPopoverIsOpen(false)}>
            <Text size="2">
               <u>Click to Close</u>
            </Text>
         </View>
      </Popover>
   </View>
)
`

export default PopoverBasicSpecimen
