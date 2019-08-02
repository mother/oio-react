import React from 'react'
import {
   Button,
   Grid,
   GridCell,
   Spacer,
   Text,
   View,
   ZoomProvider
} from '../../../src'

const ZoomProviderSpecimen = () => (
   <View>
      <Text size="2" weight="medium">
         With Zoom value: 1 (no ZoomProvider)
      </Text>
      <Spacer size="2" />
      <View
         display="flex"
         alignItems="center"
         width="100%"
         maxWidth="480px"
         height="270px"
         borderRadius="12px"
         border="12px solid #eee"
         backgroundColor="#bbb">
         <Grid columns="1">
            <GridCell backgroundColor="#aaa" padding="18px">
               <Text size="9">Text Size 9</Text>
            </GridCell>
            <GridCell backgroundColor="#ddd">
               <View paddingVertical="12px" paddingHorizontal="12px">
                  <Text size="5">Text Size 5</Text>
                  <Spacer size="3" />
                  <Button name="Button" size="md" rounded />
               </View>
            </GridCell>
         </Grid>
      </View>
      <Spacer size="3" />
      <Text size="2" weight="medium">
         With Zoom value: 0.5
      </Text>
      <Spacer size="2" />
      <ZoomProvider zoom={0.5}>
         <View
            display="flex"
            alignItems="center"
            width="100%"
            maxWidth="480px"
            height="270px"
            borderRadius="12px"
            border="12px solid #eee"
            backgroundColor="#bbb">
            <Grid columns="1">
               <GridCell backgroundColor="#aaa" padding="18px">
                  <Text size="9">Text Size 9</Text>
               </GridCell>
               <GridCell backgroundColor="#ddd">
                  <View paddingVertical="12px" paddingHorizontal="12px">
                     <Text size="5">Text Size 5</Text>
                     <Spacer size="3" />
                     <Button name="Button" size="md" rounded />
                  </View>
               </GridCell>
            </Grid>
         </View>
      </ZoomProvider>
   </View>
)

ZoomProviderSpecimen.codeSnippet = `
// Default with no ZoomProvider
<Text size="2" weight="medium">
   With Zoom value: 1 (no ZoomProvider)
</Text>
<Spacer size="2" />
<View
   display="flex"
   alignItems="center"
   width="100%"
   maxWidth="480px"
   height="270px"
   borderRadius="12px"
   border="12px solid #eee"
   backgroundColor="#bbb">
   <Grid columns="1">
      <GridCell backgroundColor="#aaa" padding="18px">
         <Text size="9">Text Size 9</Text>
      </GridCell>
      <GridCell backgroundColor="#ddd">
         <View paddingVertical="12px" paddingHorizontal="12px">
            <Text size="5">Text Size 5</Text>
            <Spacer size="3" />
            <Button name="Button" size="md" rounded />
         </View>
      </GridCell>
   </Grid>
</View>

<Spacer size="3" />

// With ZoomProvider and zoom value of 0.5
<Text size="2" weight="medium">
   With Zoom value: 0.5
</Text>
<Spacer size="2" />
<ZoomProvider zoom={0.5}>
   <View
      display="flex"
      alignItems="center"
      width="100%"
      maxWidth="480px"
      height="270px"
      borderRadius="12px"
      border="12px solid #eee"
      backgroundColor="#bbb">
      <Grid columns="1">
         <GridCell backgroundColor="#aaa" padding="18px">
            <Text size="9">Text Size 9</Text>
         </GridCell>
         <GridCell backgroundColor="#ddd">
            <View paddingVertical="12px" paddingHorizontal="12px">
               <Text size="5">Text Size 5</Text>
               <Spacer size="3" />
               <Button name="Button" size="md" rounded />
            </View>
         </GridCell>
      </Grid>
   </View>
</ZoomProvider>
`

export default ZoomProviderSpecimen
