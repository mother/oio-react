import React from 'react'
import { Button, View } from '../../../src'

const ButtonSizesSpecimen = () => (
   <div>
      <View float="left" width="100%" marginBottom="3px">
         <Button name="Button (xl)" size="xl" />
      </View>
      <View float="left" width="100%" marginBottom="3px">
         <Button name="Button (lg)" size="lg" />
      </View>
      <View float="left" width="100%" marginBottom="3px">
         <Button name="Button (md)" size="md" />
      </View>
      <View float="left" width="100%" marginBottom="3px">
         <Button name="Button (sm)" size="sm" />
      </View>
      <View float="left" width="100%" marginBottom="3px">
         <Button name="Button (xs)" size="xs" />
      </View>
   </div>
)

ButtonSizesSpecimen.codeSnippet = `
// Button sizes
<Button name="Button (lg)" size="lg" />
<Button name="Button (md)" size="md" />
<Button name="Button (sm)" size="sm" />
<Button name="Button (xs)" size="xs" />
`

export default ButtonSizesSpecimen
