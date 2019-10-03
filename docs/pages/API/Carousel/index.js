import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import carouselSpec from '../../../../src/Carousel/spec'
import CarouselBasicSpecimen from '../../../specimens/CarouselBasic'

const SpacerPage = () => (
   <div>
      <HeaderBlock
         title="Carousel"
         subtitle="The Spacer component provides a convenient way to create whitespace between elements. The <code>Spacer</code> component is designed to work in both <code>vertical</code> and <code>horizontal</code> orientations."
      />
      <SpecimenBlock specimen={CarouselBasicSpecimen} />
      <APITableBlock spec={carouselSpec} title="Carousel API Options" />
   </div>
)

export default SpacerPage
