import React from 'react'
import { Button, View } from '../../../src'

const ButtonStylesSpecimen = () => (
   <div>
      <View float="left" marginRight="3px">
         <Button name="Button Outline" color="#3a3045" textColor="#b4435e" />
      </View>
      <View float="left" marginRight="3px">
         <Button name="Button Rounded" color="#3a3045" textColor="#b4435e" rounded />
      </View>
   </div>
)

ButtonStylesSpecimen.codeSnippet = `
// Color Styles
<Button name="Button Outline" color="#3a3045" textColor="#b4435e" />
<Button name="Button Rounded" color="#3a3045" textColor="#b4435e" rounded />
`

export default ButtonStylesSpecimen
