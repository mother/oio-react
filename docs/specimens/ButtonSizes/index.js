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

ButtonSizesSpecimen.title = 'The Basics: Name and Size'

ButtonSizesSpecimen.description = 'The text that appears in the <code>Button</code> component is set with the prop <code>name</code>. You can set the size of the <code>Button</code> component by using the prop <code>size</code> The default size for the Button component is <code>sm</code>. Availalble sizes are: <code>xl</code>, <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>'

ButtonSizesSpecimen.codeSnippet = `
// Button sizes
<Button name="Button (lg)" size="lg" />
<Button name="Button (md)" size="md" />
<Button name="Button (sm)" size="sm" />
<Button name="Button (xs)" size="xs" />
`

export default ButtonSizesSpecimen
