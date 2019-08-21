import React from 'react'
import {
   Checkbox,
   Grid,
   GridCell,
   Input,
   Label,
   Form,
   Radio,
   Select,
   Switch,
   Textarea
} from '../../../src'

const FormOutlineSpecimen = () => (
   <Form elementAppearance="outline">
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
   </Form>
)

FormOutlineSpecimen.title = 'Outline Appearance'

FormOutlineSpecimen.description = 'The following is a form styled with the <code>outline</code> appearance (the default). Note that the appearance for all these elements are set through the <code>Form</code> component, and not set individually on each component.'

FormOutlineSpecimen.codeSnippet = `
// Form elements with outline appearance (default)
<Form elementAppearance="outline">
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
</Form>
`

export default FormOutlineSpecimen
