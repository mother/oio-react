import React from 'react'
import { Button, View } from '../../../src'

const ButtonCustomizationsSpecimen = () => (
   <div>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button name="Button (no radius)" size="sm" borderRadius="0px" />
      </View>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button name="Button uppercase" size="sm" textTransform="uppercase" />
      </View>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button name="Button Rounded" size="sm" rounded />
      </View>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button name="Button (with width)" size="sm" width="300px" />
      </View>

      <View float="left" marginRight="3px" marginBottom="3px">
         <Button name="Button (with custom padding)" size="sm" padding="12px" />
      </View>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button name="Button with Color" size="sm" color="#3a3045" textColor="#b4435e" />
      </View>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button name="Button Outline" size="sm" outline />
      </View>
   </div>
)

ButtonCustomizationsSpecimen.codeSnippet = `
// Some button styles
<Button name="Button (no radius)" size="sm" borderRadius="0px" />
<Button name="Button uppercase" size="sm" textUppercase />
<Button name="Button Rounded" size="sm" rounded />
<Button name="Button (with width)" size="sm" width="300px" />
<Button name="Button (with custom padding)" size="sm" padding="12px" />
<Button name="Button with Color" size="sm" color="#3a3045" textColor="#b4435e" />
<Button name="Button Outline" size="sm" outline />
`

export default ButtonCustomizationsSpecimen
