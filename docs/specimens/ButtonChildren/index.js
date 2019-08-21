import React from 'react'
import { Button, Text, View } from '../../../src'

const addIcon = (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24">
      <g fill="#fff">
         <path
            fill="#fff"
            d="M22,11h-9V2c0-0.6-0.4-1-1-1s-1,0.4-1,1v9H2c-0.6,0-1,0.4-1,1s0.4,1,1,1h9v9c0,0.6,0.4,1,1,1s1-0.4,1-1v-9h9 c0.6,0,1-0.4,1-1S22.6,11,22,11z"
         />
      </g>
   </svg>
)

const ButtonChildrenSpecimen = () => (
   <div>
      <View float="left" marginRight="6px">
         <Button size="md" width="36px" rounded>
            {addIcon}
         </Button>
      </View>
      <View float="left" marginRight="6px">
         <Button size="md" padding="18px" rounded>
            <View marginRight="12px">
               {addIcon}
            </View>
            <Text size="1" weight="medium" color="#fff">
               Create
            </Text>
         </Button>
      </View>
   </div>
)

ButtonChildrenSpecimen.title = 'Button with Children'
ButtonChildrenSpecimen.description = 'Nest <code>children</code> inside <code>Button</code> component.'

ButtonChildrenSpecimen.codeSnippet = `
// Button with nested children
const addIcon = (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24">
      <g fill="#fff">
         <path
            fill="#fff"
            d="M22,11h-9V2c0-0.6-0.4-1-1-1s-1,
            0.4-1,1v9H2c-0.6,0-1,0.4-1,
            1s0.4,1,1,1h9v9c0,0.6,0.4,1,1,
            1s1-0.4,1-1v-9h9 c0.6,0,1-0.4,
            1-1S22.6,11,22,11z"
         />
      </g>
   </svg>
)

<Button size="md" width="42px" rounded>
   {addIcon}
</Button>
<Button size="md" padding="18px" rounded>
   <View marginRight="12px">
      {addIcon}
   </View>
   <Text size="1" weight="medium" color="#fff">Create</Text>
</Button>
`

export default ButtonChildrenSpecimen
