import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import spec from '../../../../src/Popover/spec'
import PopoverBasicSpecimen from '../../../specimens/PopoverBasic'

const PopoverPage = () => (
   <div>
      <HeaderBlock
         title="Popover"
         subtitle="This component displays content in a small window that is positioned next to another anchored UI element such as a <code>Button</code>."
      />
      <SpecimenBlock specimen={PopoverBasicSpecimen} />
      <APITableBlock spec={spec} title="Popover API Options" />
   </div>
)

export default PopoverPage
