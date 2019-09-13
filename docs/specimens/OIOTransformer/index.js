import React, { useRef, useState } from 'react'
import { Button, Modal, Popover, Text, View } from '../../../src'
import OIOTransformer from '../../../src/OIOTransformer'

const OIOTransformerSpecimen = () => {
   const triggerButton = useRef()
   const [dialogIsOpen, setDialogIsOpen] = useState(false)

   return (
      <View>
         <Button
            ref={triggerButton}
            onClick={() => setDialogIsOpen(true)}
            name="Open Dialog"
         />
         <OIOTransformer
            onCloseTrigger={() => setDialogIsOpen(false)}
            open={dialogIsOpen}
            render={commonProps => ({
               abc: <Modal {...commonProps} width="90%" height="90%" />,
               def: (
                  <Popover
                     {...commonProps}
                     anchorElement={triggerButton.current}
                     borderRadius="6px"
                     onBodyClick={() => setDialogIsOpen(false)}
                     width="240px"
                  />
               )
            })}>
            <View
               padding="30px"
               onClick={() => setDialogIsOpen(false)}>
               <Text size="2">
                  <u>Click to Close</u>
               </Text>
            </View>
         </OIOTransformer>
      </View>
   )
}

OIOTransformerSpecimen.title = 'Basic Usage'

OIOTransformerSpecimen.description = 'A simple example that allows for Popover/Modal metamorphosis. Some props are shared (including <code>children</code>), while some are specific to the <code>Modal</code> and <code>Popover</code> components.'

OIOTransformerSpecimen.codeSnippet = `
const triggerButton = useRef()
const [dialogIsOpen, setDialogIsOpen] = useState(false)

return (
   <View>
      <Button
         ref={triggerButton}
         onClick={() => setDialogIsOpen(true)}
         name="Open Dialog"
      />
      <OIOTransformer
         onCloseTrigger={() => setDialogIsOpen(false)}
         open={dialogIsOpen}
         render={commonProps => ({
            abc: <Modal {...commonProps} width="90%" height="90%" />,
            def: (
               <Popover
                  {...commonProps}
                  anchorElement={triggerButton.current}
                  borderRadius="6px"
                  onBodyClick={() => setDialogIsOpen(false)}
                  width="240px"
               />
            )
         })}>
         <View
            padding="30px"
            onClick={() => setDialogIsOpen(false)}>
            <Text size="2">
               <u>Click to Close</u>
            </Text>
         </View>
      </OIOTransformer>
   </View>
)`

export default OIOTransformerSpecimen
