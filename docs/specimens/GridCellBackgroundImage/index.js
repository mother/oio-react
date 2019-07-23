import React from 'react'
import { Grid, GridCell, Text } from '../../../src'

const GridCellBackgroundImageSpecimen = () => (
   <Grid columns="1[a] 2[b-f]" spacing="0px">
      <GridCell
         backgroundImage="url(/assets/dot.png)"
         backgroundRepeat="repeat"
         backgroundSize="3px"
         colspan="2"
         padding="0px">
         <br /><br />
      </GridCell>
      <GridCell
         backgroundImage="url(/assets/land.jpeg)"
         backgroundSize="cover"
         padding="90px 0px"
         textAlign="center">
         <Text color="#fafffe" size="6" weight="medium">Earth</Text>
      </GridCell>
      <GridCell
         backgroundImage="url(/assets/nyc-public-lib.jpeg)"
         backgroundSize="cover"
         padding="0px"
      />
      <GridCell
         backgroundImage="url(/assets/dot.png)"
         backgroundRepeat="repeat"
         backgroundSize="3px"
         colspan="2"
         padding="0px">
         <br /><br />
      </GridCell>
   </Grid>
)

GridCellBackgroundImageSpecimen.codeSnippet = `
<Grid columns="1[a] 2[b-f]" spacing="0px">
   <GridCell
      backgroundImage="url(/assets/dot.png)"
      backgroundRepeat="repeat"
      backgroundSize="3px"
      colspan="2"
      padding="0px">
      <br /><br />
   </GridCell>
   <GridCell
      backgroundImage="url(/assets/land.jpeg)"
      backgroundSize="cover"
      padding="90px 0px"
      textAlign="center">
      <Text color="#fafffe" size="6" weight="medium">Earth</Text>
   </GridCell>
   <GridCell
      backgroundImage="url(/assets/nyc-public-lib.jpeg)"
      backgroundSize="cover"
      padding="0px"
   />
   <GridCell
      backgroundImage="url(/assets/dot.png)"
      backgroundRepeat="repeat"
      backgroundSize="3px"
      colspan="2"
      padding="0px">
      <br /><br />
   </GridCell>
</Grid>
`

export default GridCellBackgroundImageSpecimen
