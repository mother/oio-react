import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import spacerSpec from '../../../../src/Spacer/spec'
import SpacerHorizontalSpecimen from '../../../specimens/SpacerHorizontal'
import SpacerVerticalSpecimen from '../../../specimens/SpacerVertical'

const SpacerPage = () => (
   <div>
      <HeaderBlock
         title="Spacer"
         subtitle="The Spacer component provides a convenient way to create whitespace between elements. The <code>Spacer</code> component is designed to work in both <code>vertical</code> and <code>horizontal</code> orientations."
      />
      <SpecimenBlock specimen={SpacerHorizontalSpecimen} />
      <SpecimenBlock specimen={SpacerVerticalSpecimen} />
      <APITableBlock spec={spacerSpec} title="Spacer API Options" />
   </div>
)

export default SpacerPage
