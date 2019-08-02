import React from 'react'
import {
   Grid,
   GridCell,
   Input,
   Text,
   View
} from '../../../src'

const FormInputUnderlineSpecimen = () => (
   <View float="left" width="100%" padding="60px" backgroundColor="#f5f5f5">
      <Grid columns="1">
         <GridCell>
            <Text size="6" weight="medium">
               Login to the Community
            </Text>
         </GridCell>
         <GridCell>
            <Text size="2.5" color="#666" lineHeight="140%">
               {'Welcome to the OIO Community! After you login, youll be able to explore our Products, Projects, Labs, Groups, and Events.'}
            </Text>
            <View float="left" width="100%" height="12px" />
         </GridCell>
         <GridCell>
            <Input
               appearance="underline"
               label="Email"
               placeholder="name@domain.com"
               size="lg"
            />
         </GridCell>
         <GridCell>
            <Input
               appearance="underline"
               type="password"
               label="Password"
               placeholder="password"
               size="lg"
            />
         </GridCell>
      </Grid>
   </View>
)

FormInputUnderlineSpecimen.title = 'Form Input (with underline appearance)'

FormInputUnderlineSpecimen.description = 'The <code>Input</code> component (and only this component) has an additional <code>appearance</code> option called <code>underline</code>. This must be set on the <code>Input</code> components themselves. Note: this appearance option is not available through the <code>Form</code> component. <code>Input</code> components with the <code>underline</code> <code>appearance</code> will look harmonious next to OIO Form elements with the <code>appearance</code> set to <code>outline</code>.'

FormInputUnderlineSpecimen.codeSnippet = `
// Form Input with underline style
<View float="left" width="100%" padding="60px" backgroundColor="#f5f5f5">
   <Grid columns="1">
      <GridCell>
         <Text size="6" weight="medium">
            Login to the Community
         </Text>
      </GridCell>
      <GridCell>
         <Text size="2.5" color="#666" lineHeight="140%">
            {'Welcome to the OIO Community! After you login, youll be able to explore our Products, Projects, Labs, Groups, and Events.'}
         </Text>
         <View float="left" width="100%" height="12px" />
      </GridCell>
      <GridCell>
         <Input
            appearance="underline"
            label="Email"
            placeholder="name@domain.com"
            size="lg"
         />
      </GridCell>
      <GridCell>
         <Input
            appearance="underline"
            type="password"
            label="Password"
            placeholder="password"
            size="lg"
         />
      </GridCell>
   </Grid>
</View>
`

export default FormInputUnderlineSpecimen
