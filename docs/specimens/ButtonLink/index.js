import React from 'react'
import { Button, View } from '../../../src'

const ButtonLinkSpecimen = () => (
   <div>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button linkTo="/" size="sm" name="Link" mode="normal" />
      </View>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button linkTo="/" size="sm" name="Disabled Link" mode="disabled" />
      </View>
      <View float="left" marginRight="3px" marginBottom="3px">
         <Button linkTo="/" size="sm" name="Loading Link" mode="loading" />
      </View>
   </div>
)

ButtonLinkSpecimen.title = 'Button Link'

ButtonLinkSpecimen.codeSnippet = `
// Button links
<Button linkTo="/" size="sm" name="Link" mode="normal" />
<Button linkTo="/" size="sm" name="Disabled Link" mode="disabled" />
<Button linkTo="/" size="sm" name="Loading Link" mode="loading" />
`

export default ButtonLinkSpecimen
