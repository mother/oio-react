import React, { useRef, useState } from 'react'
import { Button, Modal, Popover, Text, View } from '../../../src'
import OIOTransformer from '../../../src/OIOTransformer'

const OIOTransformerSpecimen = () => {
   const btnRef = useRef()
   const [dialogIsOpen, setDialogIsOpen] = useState(false)

   return (
      <View>
         <Button
            ref={btnRef}
            onClick={() => setDialogIsOpen(true)}
            name="Open Modal"
         />
         <OIOTransformer
            onCloseTrigger={() => setDialogIsOpen(false)}
            open={dialogIsOpen}
            render={commonProps => ({
               abc: <Modal {...commonProps} width="90%" height="90%" />,
               def: (
                  <Popover
                     {...commonProps}
                     anchorElement={btnRef.current}
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

OIOTransformerSpecimen.title = 'OIOTransformer'

OIOTransformerSpecimen.description = ''

OIOTransformerSpecimen.codeSnippet = ''

export default OIOTransformerSpecimen
