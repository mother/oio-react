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
         subtitle="The Carousel component is slideshow-style component for rotating through dynamic slides. This is useful for things like image galleries and featured content."
      />
      <SpecimenBlock specimen={CarouselBasicSpecimen} />
      <APITableBlock spec={carouselSpec} title="Carousel API Options" />
   </div>
)

export default SpacerPage
