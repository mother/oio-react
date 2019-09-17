import React, { useRef, useState } from 'react'
import { Button, Form, Grid, GridCell, Label, Popover, Select, Text, View } from '../../../src'

const PopoverBasicSpecimen = () => {
   const popoverButton = useRef()
   const [popoverIsOpen, setPopoverIsOpen] = useState(false)
   const [anchorOriginHorizontal, setAnchorOriginHorizontal] = useState('left')
   const [anchorOriginVertical, setAnchorOriginVertical] = useState('top')

   return (
      <View padding="60px 0px">
         <Form
            elementAppearance="plain"
            elementBackgroundColor="#eee">
            <Grid columns="3" spacing="12px">
               <GridCell>
                  <Label>Anchor Origin Horizontal</Label>
                  <Select
                     id="origin-horizontal-select"
                     onChange={e => setAnchorOriginHorizontal(e.target.value)}>
                     <option value="left">Left</option>
                     <option value="right">Right</option>
                  </Select>
               </GridCell>
               <GridCell>
                  <Label>Anchor Element</Label>
                  <Button
                     id="open-popover-button"
                     ref={popoverButton}
                     width="100%"
                     onClick={() => setPopoverIsOpen(true)}
                     name="Open Popover"
                  />
               </GridCell>
               <GridCell>
                  <Label>Anchor Origin Vertical</Label>
                  <Select
                     id="origin-vertical-select"
                     onChange={e => setAnchorOriginVertical(e.target.value)}>
                     <option value="top">Top</option>
                     <option value="bottom">Bottom</option>
                  </Select>
               </GridCell>
            </Grid>
         </Form>
         <Popover
            anchorElement={popoverButton.current}
            anchorOriginHorizontal={anchorOriginHorizontal}
            anchorOriginVertical={anchorOriginVertical}
            borderRadius="6px"
            width="210px"
            onBodyClick={() => setPopoverIsOpen(false)}
            onCloseTrigger={() => setPopoverIsOpen(false)}
            open={popoverIsOpen}>
            <View padding="12px">
               <Text size="2">
                  The popover content. Click anywhere to close.
               </Text>
            </View>
         </Popover>
      </View>
   )
}

PopoverBasicSpecimen.title = 'Basic Usage'

PopoverBasicSpecimen.description = 'The following example shows a <code>Popover</code> component that is set to <code>open</code> through a <code>Button</code> using <code>useState</code>. The popover can be closed by clicking anywhere on the body. Note the <code>onBodyClick</code> prop. Change the <code>anchorOriginHorizontal</code> and <code>anchorOriginVertical</code> with the controls below to see how to change the popover positioning.'

PopoverBasicSpecimen.codeSnippet = `
const popoverButton = useRef()
const [popoverIsOpen, setPopoverIsOpen] = useState(false)
const [anchorOriginHorizontal, setAnchorOriginHorizontal] = useState('left')
const [anchorOriginVertical, setAnchorOriginVertical] = useState('top')

return (
   <View padding="60px 0px">
      <Form
         elementAppearance="plain"
         elementBackgroundColor="#eee">
         <Grid columns="3" spacing="12px">
            <GridCell>
               <Label>Anchor Origin Horizontal</Label>
               <Select onChange={e => setAnchorOriginHorizontal(e.target.value)}>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
               </Select>
            </GridCell>
            <GridCell>
               <Label>Anchor Element</Label>
               <Button
                  ref={popoverButton}
                  width="100%"
                  onClick={() => setPopoverIsOpen(true)}
                  name="Open Popover"
               />
            </GridCell>
            <GridCell>
               <Label>Anchor Origin Vertical</Label>
               <Select onChange={e => setAnchorOriginVertical(e.target.value)}>
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
               </Select>
            </GridCell>
         </Grid>
      </Form>
      <Popover
         anchorElement={popoverButton.current}
         anchorOriginHorizontal={anchorOriginHorizontal}
         anchorOriginVertical={anchorOriginVertical}
         borderRadius="6px"
         width="210px"
         onBodyClick={() => setPopoverIsOpen(false)}
         onCloseTrigger={() => setPopoverIsOpen(false)}
         open={popoverIsOpen}>
         <View padding="12px">
            <Text size="2">
               The popover content. Click anywhere to close.
            </Text>
         </View>
      </Popover>
   </View>
)
`

export default PopoverBasicSpecimen
