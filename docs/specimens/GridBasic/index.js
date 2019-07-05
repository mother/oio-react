import React from 'react'
import { Grid, GridCell } from '../../../src'

const GridBasicSpecimen = () => (
   <Grid columns="1[a-d] 6[e-f]" spacing="12px">
      <GridCell
         backgroundColor="#ddd"
         borderRadius="6px"
         border="3px solid #aaa"
         colspan="1[a-d] 6[e-f]"
         padding="60px"
         textAlign="center">
         Cell 1
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         colspan="1[a-d] 3[e-f]"
         padding="6px">
         Cell 2
         <br />
         (Cells in the same row have equal heights automatically)
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         colspan="1[a-d] 3[e-f]"
         padding="6px">
         Cell 3
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         colspan="1[a-d] 2[e-f]"
         padding="6px">
         Cell 4
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         colspan="1[a-d] 2[e-f]"
         padding="6px">
         Cell 5
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         colspan="1[a-d] 2[e-f]"
         padding="6px">
         Cell 6
      </GridCell>
   </Grid>
)

GridBasicSpecimen.codeSnippet = `
<Grid columns="1[a-d] 6[e-f]" spacing="12px">
   <GridCell
      backgroundColor="#ddd"
      borderRadius="6px"
      border="3px solid #aaa"
      colspan="1[a-d] 6[e-f]"
      padding="60px"
      textAlign="center">
      Cell 1
   </GridCell>
   <GridCell
      backgroundColor="#ddd"
      colspan="1[a-d] 3[e-f]"
      padding="6px">
      Cell 2
      <br />
      (Cells in the same row have equal heights automatically)
   </GridCell>
   <GridCell
      backgroundColor="#ddd"
      colspan="1[a-d] 3[e-f]"
      padding="6px">
      Cell 3
   </GridCell>
   <GridCell
      backgroundColor="#ddd"
      colspan="1[a-d] 2[e-f]"
      padding="6px">
      Cell 4
   </GridCell>
   <GridCell
      backgroundColor="#ddd"
      colspan="1[a-d] 2[e-f]"
      padding="6px">
      Cell 5
   </GridCell>
   <GridCell
      backgroundColor="#ddd"
      colspan="1[a-d] 2[e-f]"
      padding="6px">
      Cell 6
   </GridCell>
</Grid>
`

export default GridBasicSpecimen
