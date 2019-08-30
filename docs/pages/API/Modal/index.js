import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import modalSpec from '../../../../src/Modal/spec'
import ModalBasicSpecimen from '../../../specimens/ModalBasic'

const SpacerPage = () => (
   <div>
      <HeaderBlock
         title="Modal"
         subtitle="This component displays content in a layer that sits above the rest of the page content. Users won't be able to interact with the page until the dialog is closed."
      />
      <SpecimenBlock specimen={ModalBasicSpecimen} />
      <APITableBlock spec={modalSpec} title="Modal API Options" />
   </div>
)

export default SpacerPage
