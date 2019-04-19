import React from 'react'
import { Grid, GridCell, View } from '../../../src'

const GridBasicSpecimen = () => (
   <Grid columns="2[a] 6[b] 10[c] 12[d-f]" spacing="12px">
      <GridCell colspan="2[a] 6[b] 10[c] 12[c-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 1
         </View>
      </GridCell>
      <GridCell colspan="1[a-d] 3[b] 5[c] 6[d-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 2
         </View>
      </GridCell>
      <GridCell colspan="1[a-d] 3[b] 5[c] 6[d-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 3
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 2[c-d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 4
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 2[c-d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 5
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 2[c-d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 6
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 2[c-d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 7
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 2[c-d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 8
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 10[c] 2[d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 9
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 5[c] 2[d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 10
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 5[c] 8[d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 11
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 10[c] 2[d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 12
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 2[c] 4[d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 13
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 6[c] 4[d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 14
         </View>
      </GridCell>
      <GridCell colspan="2[a] 2[b] 2[c] 4[d] 1[e-f]">
         <View
            backgroundColor="#ddd"
            padding="12px">
            Cell 15
         </View>
      </GridCell>
   </Grid>
)

export default GridBasicSpecimen
