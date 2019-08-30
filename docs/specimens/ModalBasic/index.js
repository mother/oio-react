import React, { useState } from 'react'
import { Button, Modal, Text, View } from '../../../src'

const ModalBasicSpecimen = () => {
   const [modalIsOpen, setModalIsOpen] = useState(false)

   return (
      <View>
         <Button
            id="open-modal-button"
            onClick={() => setModalIsOpen(true)}
            name="Open Modal"
         />
         <Modal
            borderRadius="6px"
            width="90%[a-b] 480px[c-f]"
            height="90%[a-b] 300px[c-f]"
            onCloseTrigger={() => setModalIsOpen(false)}
            open={modalIsOpen}>
            <View
               id="close-modal-control"
               padding="30px"
               onClick={() => setModalIsOpen(false)}>
               <Text size="2">
                  <u>Click to Close</u>
               </Text>
            </View>
         </Modal>
      </View>
   )
}

ModalBasicSpecimen.title = 'Basic Usage'

ModalBasicSpecimen.description = 'The following example shows a <code>Modal</code> component that is set to <code>open</code> through a <code>Button</code> using <code>useState</code>. The modal can be closed by clicking its overlay or the close link inside the modal. Note the <code>onCloseTrigger</code> prop. This prop is used to define a function that will be fired when the user clicks on the <code>Modal</code>\'s overlay. Also note that the following example is responsive.'

ModalBasicSpecimen.codeSnippet = `
const [modalIsOpen, setModalIsOpen] = useState(false)

return (
   <View>
      <Button
         onClick={() => setModalIsOpen(true)}
         name="Open Modal"
      />
      <Modal
         borderRadius="6px"
         width="100%[a-b] 480px[c-f]"
         height="100%[a-b] 300px[c-f]"
         onCloseTrigger={() => setModalIsOpen(false)}
         open={modalIsOpen}>
         <View padding="30px" onClick={() => setModalIsOpen(false)}>
            <Text size="2">
               <u>Click to Close</u>
            </Text>
         </View>
      </Modal>
   </View>
)
`

export default ModalBasicSpecimen
