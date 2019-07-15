import React from 'react'
import { Grid, GridCell } from '../../../src'

const GridBasicSpecimen = () => (
   <Grid columns="2[a] 6[b] 10[c] 12[d-f]" spacing="12px">
      <GridCell
         backgroundColor="#ddd"
         borderRadius="6px"
         border="3px solid red"
         padding="60px"
         textAlign="center"
         colspan="2[a] 6[b] 10[c] 12[c-f]">
         Cell 1
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a-d] 3[b] 5[c] 6[d-f]">
         Cell 2
         <br />
         Sibling cells on the same row should have the same height
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a-d] 3[b] 5[c] 6[d-f]">
         Cell 3
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 2[c-d] 1[e-f]">
         Cell 4
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 2[c-d] 1[e-f]">
         Cell 5
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 2[c-d] 1[e-f]">
         Cell 6
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 2[c-d] 1[e-f]">
         Cell 7
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 2[c-d] 1[e-f]">
         Cell 8
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 10[c] 2[d] 1[e-f]">
         Cell 9
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 5[c] 2[d] 1[e-f]">
         Cell 10
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 5[c] 8[d] 1[e-f]">
         Cell 11
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 10[c] 2[d] 1[e-f]">
         Cell 12
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 2[c] 4[d] 1[e-f]">
         Cell 13
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 6[c] 4[d] 1[e-f]">
         Cell 14
      </GridCell>
      <GridCell
         backgroundColor="#ddd"
         padding="12px"
         colspan="1[a] 2[b] 2[c] 4[d] 1[e-f]">
         Cell 15
      </GridCell>
   </Grid>
)

export default GridBasicSpecimen
