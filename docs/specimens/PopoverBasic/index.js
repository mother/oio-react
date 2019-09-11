import React, { useState } from 'react'
import { Button, Popover, Text, View } from '../../../src'

const PopoverBasicSpecimen = () => {
   const [popoverIsOpen, setPopoverIsOpen] = useState(false)

   return (
      <View>
         <Button
            id="open-popover-button"
            onClick={() => setPopoverIsOpen(true)}
            name="Open Popover"
         />
         <Popover
            anchorElementId="open-popover-button"
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
      </View>
   )
}

PopoverBasicSpecimen.title = 'Basic Usage'

PopoverBasicSpecimen.description = 'The following example shows a <code>Popover</code> component that is set to <code>open</code> through a <code>Button</code> using <code>useState</code>. The popover can be closed by clicking anywhere on the body. Note the <code>onBodyClick</code> prop.'

PopoverBasicSpecimen.codeSnippet = `
const [popoverIsOpen, setPopoverIsOpen] = useState(false)

return (
   <View>
      <Button
         id="open-popover-button"
         onClick={() => setPopoverIsOpen(true)}
         name="Open Popover"
      />
      <Popover
         anchorElementId="open-popover-button"
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
   </View>
)
`

export default PopoverBasicSpecimen
