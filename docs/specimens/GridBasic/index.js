import React from 'react'
import { Grid, GridCell, View } from '../../../src'

const GridBasicSpecimen = () => (
   <Grid columns="1[a-d] 6[e-f]" spacing="12px">
      <GridCell colspan="1[a-d] 6[e-f]">
         <View
            backgroundColor="#ddd"
            padding="6px">
            Cell 1
         </View>
      </GridCell>
      <GridCell colspan="1[a-d] 3[e-f]">
         <View
            backgroundColor="#ddd"
            padding="6px">
            Cell 2
         </View>
      </GridCell>
      <GridCell colspan="1[a-d] 3[e-f]">
         <View
            backgroundColor="#ddd"
            padding="6px">
            Cell 3
         </View>
      </GridCell>
      <GridCell colspan="1[a-d] 2[e-f]">
         <View
            backgroundColor="#ddd"
            padding="6px">
            Cell 4
         </View>
      </GridCell>
      <GridCell colspan="1[a-d] 2[e-f]">
         <View
            backgroundColor="#ddd"
            padding="6px">
            Cell 5
         </View>
      </GridCell>
      <GridCell colspan="1[a-d] 2[e-f]">
         <View
            backgroundColor="#ddd"
            padding="6px">
            Cell 6
         </View>
      </GridCell>
   </Grid>
)

GridBasicSpecimen.codeSnippet = `
<Grid columns="1[a-d] 6[e-f]" spacing="12px">
   <GridCell colspan="1[a-d] 6[e-f]">
      <View
         backgroundColor="#ddd"
         padding="6px">
         Cell 1
      </View>
   </GridCell>
   <GridCell colspan="1[a-d] 3[e-f]">
      <View
         backgroundColor="#ddd"
         padding="6px">
         Cell 2
      </View>
   </GridCell>
   <GridCell colspan="1[a-d] 3[e-f]">
      <View
         backgroundColor="#ddd"
         padding="6px">
         Cell 3
      </View>
   </GridCell>
   <GridCell colspan="1[a-d] 2[e-f]">
      <View
         backgroundColor="#ddd"
         padding="6px">
         Cell 4
      </View>
   </GridCell>
   <GridCell colspan="1[a-d] 2[e-f]">
      <View
         backgroundColor="#ddd"
         padding="6px">
         Cell 5
      </View>
   </GridCell>
   <GridCell colspan="1[a-d] 2[e-f]">
      <View
         backgroundColor="#ddd"
         padding="6px">
         Cell 6
      </View>
   </GridCell>
</Grid>
`

export default GridBasicSpecimen
