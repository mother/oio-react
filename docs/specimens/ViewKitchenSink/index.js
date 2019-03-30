import React from 'react'
import { Text, View } from '../../../src'

const ViewKitchenSinkSpecimen = () => (
   <View
      position="fixed"
      top="30px"
      left="30px"
      width="1300px"
      height="800px"
      style={{ overflow: 'hidden' }}>
      <View
         position="absolute"
         top="0px"
         left="0px"
         bottom="0px"
         width="800px"
         backgroundColor="rgba(0,0,0,0.1)">
         <View
            position="absolute"
            backgroundColor="rgba(0,0,0,0.075)"
            border="1px solid #aaa"
            borderRadius="50%"
            boxShadow="-30px 3px 90px rgba(0,0,0,0.3)"
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            textAlign="left"
            width="1600px"
            height="1600px">
            <View padding="30px">
               <Text size="4" weight="bold">
                  The View Kitchen Sink Test
               </Text>
               <Text size="3" weight="normal" color="#666" lineHeight="180%">
                  Using just the View and Text components
               </Text>
            </View>
         </View>
         <View
            position="absolute"
            bottom="30px"
            left="30px">
            Fixed Position
         </View>
      </View>
      <View
         position="absolute"
         top="0px"
         left="800px"
         right="0px"
         bottom="0px">
         <View
            float="left"
            width="500px"
            height="500px"
            textAlign="right"
            backgroundColor="rgba(0,0,0,0.15)"
            style={{
               overflow: 'hidden'
            }}>
            <View
               position="absolute"
               left="auto"
               right="0px"
               backgroundColor="rgba(255,255,255,0.4)"
               border="1px solid #aaa"
               borderRadius="50%"
               boxShadow="3px 3px 60px rgba(0,0,0,0.2)"
               display="flex"
               justifyContent="flex-end"
               alignItems="flex-start"
               textAlign="center"
               width="1000px"
               height="1000px">
               <View padding="30px">
                  Absolute position
               </View>
            </View>
         </View>
         <View
            float="left"
            width="500px">
            <View
               float="left"
               flexFlow="column"
               display="flex"
               alignItems="flex-end"
               width="200px"
               height="300px"
               backgroundColor="rgba(0,0,0,0.2)">
               <View
                  order="2"
                  flex="0 0 auto"
                  width="200px"
                  height="200px"
                  backgroundColor="rgba(255,255,255,0.4)"
                  style={{ overflow: 'hidden' }}>
                  <View
                     float="left"
                     width="100%"
                     padding="30px 30px 30px 60px"
                     textAlign="right">
                     <Text size="2">
                        Flexbox with textAlign
                     </Text>
                  </View>
                  <View
                     position="absolute"
                     left="0px"
                     bottom="0px"
                     backgroundColor="rgba(255,255,255,0.1)"
                     border="1px solid #aaa"
                     borderRadius="50%"
                     boxShadow="3px 3px 30px rgba(0,0,0,0.2)"
                     display="flex"
                     justifyContent="flex-end"
                     alignItems="flex-start"
                     textAlign="center"
                     width="400px"
                     height="400px"
                  />
               </View>
               <View
                  order="1"
                  flex="1 1 auto"
                  display="flex"
                  alignItems="flex-end"
                  justifyContent="flex-end"
                  textAlign="right"
                  marginRight="50%"
                  backgroundColor="rgba(255,255,255,0.6)"
                  style={{ overflow: 'hidden' }}>
                  <View padding="12px">
                     <Text size="1">With Flex item sizing and margins</Text>
                  </View>
                  <View
                     position="absolute"
                     left="0px"
                     top="0px"
                     backgroundColor="rgba(255,255,255,0.1)"
                     border="1px solid #aaa"
                     borderRadius="50%"
                     boxShadow="3px 3px 30px rgba(0,0,0,0.2)"
                     display="flex"
                     justifyContent="flex-end"
                     alignItems="flex-start"
                     textAlign="center"
                     width="200px"
                     height="200px"
                  />
               </View>
            </View>
            <View
               float="right"
               width="300px"
               height="300px"
               paddingVertical="30px"
               paddingLeft="30px"
               paddingRight="30%"
               backgroundColor="rgba(255,255,255,0.01)"
               style={{ overflow: 'hidden' }}>
               <Text size="2">
                  Float Right with paddingVertical, paddingRight, paddingLeft
               </Text>
               <View
                  position="absolute"
                  left="auto"
                  right="0px"
                  bottom="0px"
                  backgroundColor="rgba(255,255,255,0.1)"
                  border="1px solid #aaa"
                  borderRadius="50%"
                  boxShadow="3px 3px 30px rgba(0,0,0,0.2)"
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="flex-start"
                  textAlign="center"
                  width="600px"
                  height="600px"
               />
            </View>
         </View>
      </View>
   </View>
)

export default ViewKitchenSinkSpecimen
