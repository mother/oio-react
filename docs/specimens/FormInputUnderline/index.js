import React from 'react'
import {
   Grid,
   GridCell,
   Input,
   Text,
   View
} from '../../../src'

const FormSpecimen = () => (
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

FormSpecimen.codeSnippet = `
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

export default FormSpecimen
