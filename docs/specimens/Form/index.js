import React from 'react'
import {
   Checkbox,
   Grid,
   GridCell,
   Input,
   Label,
   Radio,
   Select,
   Switch,
   Textarea,
   Text,
   View
} from '../../../src'

const FormSpecimen = () => (
   <div>
      <Grid columns="1" spacing="90px">
         <GridCell>
            <View float="left" width="100%">
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
                     <Textarea label="Tell us about yourself" rows="3" required autoresize />
                  </GridCell>
                  <GridCell>
                     <Label>Your Favourite fruit?</Label>
                     <Checkbox name="haha" label="Strawberries" defaultChecked />
                     <Checkbox name="haha" label="Oranges" />
                  </GridCell>
                  <GridCell>
                     <Label>You would be beset described as:</Label>
                     <Radio name="species" label="Monkey" />
                     <Radio name="species" label="Ape" defaultChecked />
                     <Radio name="species" label="Human" />
                  </GridCell>
               </Grid>
            </View>
         </GridCell>
         <GridCell>
            <Text size="6" weight="medium">
               Login to the Community
            </Text>
            <View float="left" width="100%" height="12px" />
            <Text size="2.5" color="#666" lineHeight="140%">
               {'Welcome to the Mother Co. Community! After you login, youll be able to explore our Products, Projects, Labs, Groups, and Events.'}
            </Text>
            <View float="left" width="100%" height="30px" />
            <Grid columns="1">
               <GridCell>
                  <Input
                     appearance="underline"
                     label="Email"
                     placeholder="name@domain.com"
                     size="md"
                  />
               </GridCell>
               <GridCell>
                  <Input
                     appearance="underline"
                     type="password"
                     label="Password"
                     placeholder="password"
                     size="md"
                  />
               </GridCell>
            </Grid>
         </GridCell>
      </Grid>
   </div>
)

FormSpecimen.codeSnippet = `
// Color Styles
<Button name="Button Outline" color="#3a3045" textColor="#b4435e" />
<Button name="Button Rounded" color="#3a3045" textColor="#b4435e" rounded />
`

export default FormSpecimen
