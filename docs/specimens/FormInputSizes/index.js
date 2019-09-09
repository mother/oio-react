import React from 'react'
import {
   Form,
   Grid,
   GridCell,
   Input,
   Select
} from '../../../src'

const FormInputSizesSpecimen = () => (
   <Form
      elementAppearance="plain"
      elementBackgroundColor="#eee"
      elementFocusBackgroundColor="#e5e5e5">
      <Grid columns="2" spacing="12px">
         <GridCell>
            <Grid columns="1">
               <GridCell>
                  <Input
                     label="Input size (xl)"
                     placeholder="Input size (xl)"
                     size="xl"
                  />
               </GridCell>
               <GridCell>
                  <Input
                     label="Input size (lg)"
                     placeholder="Input size (lg)"
                     size="lg"
                  />
               </GridCell>
               <GridCell>
                  <Input
                     label="Input size (md)"
                     placeholder="Input size (md)"
                     size="md"
                  />
               </GridCell>
               <GridCell>
                  <Input
                     label="Input size (sm)"
                     placeholder="Input size (sm)"
                     size="sm"
                  />
               </GridCell>
               <GridCell>
                  <Input
                     label="Input size (xs)"
                     placeholder="Input size (xs)"
                     size="xs"
                  />
               </GridCell>
            </Grid>
         </GridCell>
         <GridCell>
            <Grid columns="1">
               <GridCell>
                  <Select label="Select size(xl)" size="xl">
                     <option value="">Option</option>
                  </Select>
               </GridCell>
               <GridCell>
                  <Select label="Select size(lg)" size="lg">
                     <option value="">Option</option>
                  </Select>
               </GridCell>
               <GridCell>
                  <Select label="Select size(md)" size="md">
                     <option value="">Option</option>
                  </Select>
               </GridCell>
               <GridCell>
                  <Select label="Select size(sm)" size="sm">
                     <option value="">Option</option>
                  </Select>
               </GridCell>
               <GridCell>
                  <Select label="Select size(xs)" size="xs">
                     <option value="">Option</option>
                  </Select>
               </GridCell>
            </Grid>
         </GridCell>
      </Grid>
   </Form>
)

FormInputSizesSpecimen.title = 'Form Input Sizes'

FormInputSizesSpecimen.description = 'You can set the size for the <code>Input</code>, <code>Select</code> , and <code>Textarea</code> components by using the prop <code>size</code>. The <code>size</code> prop may be available to other form components in the future. The default size for these components is <code>sm</code>. Availalble sizes are: <code>xl</code>, <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>'

FormInputSizesSpecimen.codeSnippet = `
// Form Input sizes
<Form
   elementAppearance="plain"
   elementBackgroundColor="#eee"
   elementFocusBackgroundColor="#e5e5e5">
   <Grid columns="2" spacing="12px">
      <GridCell>
         <Grid columns="1">
            <GridCell>
               <Input
                  label="Input size (xl)"
                  placeholder="Input size (xl)"
                  size="xl"
               />
            </GridCell>
            <GridCell>
               <Input
                  label="Input size (lg)"
                  placeholder="Input size (lg)"
                  size="lg"
               />
            </GridCell>
            <GridCell>
               <Input
                  label="Input size (md)"
                  placeholder="Input size (md)"
                  size="md"
               />
            </GridCell>
            <GridCell>
               <Input
                  label="Input size (sm)"
                  placeholder="Input size (sm)"
                  size="sm"
               />
            </GridCell>
            <GridCell>
               <Input
                  label="Input size (xs)"
                  placeholder="Input size (xs)"
                  size="xs"
               />
            </GridCell>
         </Grid>
      </GridCell>
      <GridCell>
         <Grid columns="1">
            <GridCell>
               <Select label="Select size(xl)" size="xl">
                  <option value="">Option</option>
               </Select>
            </GridCell>
            <GridCell>
               <Select label="Select size(lg)" size="lg">
                  <option value="">Option</option>
               </Select>
            </GridCell>
            <GridCell>
               <Select label="Select size(md)" size="md">
                  <option value="">Option</option>
               </Select>
            </GridCell>
            <GridCell>
               <Select label="Select size(sm)" size="sm">
                  <option value="">Option</option>
               </Select>
            </GridCell>
            <GridCell>
               <Select label="Select size(xs)" size="xs">
                  <option value="">Option</option>
               </Select>
            </GridCell>
         </Grid>
      </GridCell>
   </Grid>
</Form>
`

export default FormInputSizesSpecimen
