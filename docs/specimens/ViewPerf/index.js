import React from 'react'
import { View } from '../../../src'

const x = Array(2000).fill('hi')

const ViewPerf = () => {

   return (
      <>
         {x.map((i, index) => (
            <View
               key={index}
               float="left"
               width="100px"
               height="100px">
               {i}
            </View>
         ))}
      </>
   )
}

export default ViewPerf
