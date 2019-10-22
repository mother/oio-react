import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import zoomProviderSpec from '../../../../src/ZoomProvider/spec'
import ZoomContextSpecimen from '../../../specimens/ZoomContext'
import ZoomProviderSpecimen from '../../../specimens/ZoomProvider'

const ZoomProviderPage = () => (
   <div>
      <HeaderBlock title="ZoomProvider" />
      <SpecimenBlock specimen={ZoomProviderSpecimen} />
      <SpecimenBlock specimen={ZoomContextSpecimen} />
      <APITableBlock spec={zoomProviderSpec} title="ZoomProvider API Options" />
   </div>
)

export default ZoomProviderPage
