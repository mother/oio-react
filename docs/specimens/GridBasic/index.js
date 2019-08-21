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

GridBasicSpecimen.title = 'Grid and GridCell'

GridBasicSpecimen.description = 'The OIO Grid component is designed to help organize layout content. The <code>Grid</code> component has 2 key props: <code>columns</code> and <code>spacing</code>. The <code>columns</code> prop determines the number of <code>GridCell</code> components that will fit horizontally in a row. The <code>spacing</code> prop determines the space between each <code>GridCell</code>. <code>GridCell</code> components can span multiple columns (similar to the <code>colspan</code> attribute for html table cells).'

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
