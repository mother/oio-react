import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import spec from '../../../../src/Popover/spec'
import PopoverBasicSpecimen from '../../../specimens/PopoverBasic'
import PopoverOpenSpecimen from '../../../specimens/PopoverOpen'

const PopoverPage = () => (
   <div>
      <HeaderBlock
         title="Popover"
         subtitle="This component displays content in a small window that is positioned next to another anchored UI element such as a <code>Button</code>. Note that only one popover can be open at any given time."
      />
      <SpecimenBlock specimen={PopoverBasicSpecimen} />
      <SpecimenBlock specimen={PopoverOpenSpecimen} />
      <APITableBlock spec={spec} title="Popover API Options" />
   </div>
)

export default PopoverPage
