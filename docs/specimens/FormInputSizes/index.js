import React from 'react'
import {
   Grid,
   GridCell,
   Input,
   OIOProvider,
   Select
} from '../../../src'

const FormInputSizesSpecimen = () => (
   <OIOProvider
      formElementAppearance="plain"
      formElementBackgroundColor="#eee"
      formElementFocusBackgroundColor="#e5e5e5">
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
   </OIOProvider>
)

FormInputSizesSpecimen.codeSnippet = `
// Form Input sizes
<OIOProvider
   formElementAppearance="plain"
   formElementBackgroundColor="#eee"
   formElementFocusBackgroundColor="#e5e5e5">
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
</OIOProvider>
`

export default FormInputSizesSpecimen
