import React from 'react'
import { Button, View } from '../../../src'

const ButtonModesSpecimen = () => (
   <div>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button size="sm" name="Disabled" mode="disabled" />
      </View>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button size="sm" name="Loading" mode="loading" />
      </View>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button size="sm" name="Normal" mode="normal" />
      </View>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button size="sm" name="Pulsing" mode="pulsing" />
      </View>
   </div>
)

ButtonModesSpecimen.codeSnippet = `
// Button modes
<Button size="sm" name="Disabled" mode="disabled" />
<Button size="sm" name="Loading" mode="loading" />
<Button size="sm" name="Normal" mode="normal" />
<Button size="sm" name="Pulsing" mode="pulsing" />
`

export default ButtonModesSpecimen
