import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
// import modalSpec from '../../../../src/Modal/spec'
import PopoverBasicSpecimen from '../../../specimens/PopoverBasic'

const PopoverPage = () => (
   <div>
      <HeaderBlock
         title="Popover"
         subtitle="This component displays content in a layer that sits above the rest of the page content. Users won't be able to interact with the page until the dialog is closed."
      />
      <SpecimenBlock specimen={PopoverBasicSpecimen} />
   </div>
)

export default PopoverPage
