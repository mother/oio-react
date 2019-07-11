import React from 'react'
import {
   Checkbox,
   Grid,
   GridCell,
   Input,
   Label,
   OIOProvider,
   Radio,
   Select,
   Switch,
   Textarea
} from '../../../src'

const FormPlainSpecimen = () => (
   <OIOProvider
      formElementAppearance="plain"
      formElementBackgroundColor="#eee"
      formElementBorderRadius="4px"
      formElementFocusBackgroundColor="#e5e5e5"
      formLabelTextColor="#666"
      formLabelTextSize="1"
      formLabelTextTransform="none"
      formLabelTextWeight="semibold">
      <Grid columns="2">
         <GridCell>
            <Input label="First Name" />
         </GridCell>
         <GridCell>
            <Input label="Last Name" />
         </GridCell>
         <GridCell>
            <Select label="Favourite Animal">
               <option value="">Dog</option>
               <option value="">Cat</option>
            </Select>
         </GridCell>
         <GridCell>
            <Label>Turn on auto-magic mode?</Label>
            <Switch name="haha" />
         </GridCell>
         <GridCell colspan="2">
            <Textarea label="Tell us about yourself" rows="3" required />
         </GridCell>
         <GridCell>
            <Label>Your Favourite fruit?</Label>
            <Checkbox name="haha" label="Strawberries" defaultChecked />
            <Checkbox name="haha" label="Oranges" />
         </GridCell>
         <GridCell>
            <Label>You would be best described as:</Label>
            <Radio name="species" label="Monkey" />
            <Radio name="species" label="Ape" defaultChecked />
            <Radio name="species" label="Human" />
         </GridCell>
      </Grid>
   </OIOProvider>
)

FormPlainSpecimen.codeSnippet = `
// Form elements with plain appearance
<OIOProvider
   formElementAppearance="plain"
   formElementBackgroundColor="#eee"
   formElementBorderRadius="4px"
   formElementFocusBackgroundColor="#e5e5e5"
   formLabelTextColor="#666"
   formLabelTextSize="1"
   formLabelTextTransform="none"
   formLabelTextWeight="semibold">
   <Grid columns="2">
      <GridCell>
         <Input label="First Name" />
      </GridCell>
      <GridCell>
         <Input label="Last Name" />
      </GridCell>
      <GridCell>
         <Select label="Favourite Animal">
            <option value="">Dog</option>
            <option value="">Cat</option>
         </Select>
      </GridCell>
      <GridCell>
         <Label>Turn on auto-magic mode?</Label>
         <Switch name="haha" />
      </GridCell>
      <GridCell colspan="2">
         <Textarea label="Tell us about yourself" rows="3" required />
      </GridCell>
      <GridCell>
         <Label>Your Favourite fruit?</Label>
         <Checkbox name="haha" label="Strawberries" defaultChecked />
         <Checkbox name="haha" label="Oranges" />
      </GridCell>
      <GridCell>
         <Label>You would be best described as:</Label>
         <Radio name="species" label="Monkey" />
         <Radio name="species" label="Ape" defaultChecked />
         <Radio name="species" label="Human" />
      </GridCell>
   </Grid>
</OIOProvider>
`

export default FormPlainSpecimen
