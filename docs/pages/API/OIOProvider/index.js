import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import OIOProviderSpecimen from '../../../specimens/OIOProviderComponent'
import oioSpec from '../../../../src/OIOProvider/spec'

const OIOProviderPage = () => (
   <div>
      <HeaderBlock title="OIOProvider" />
      <SpecimenBlock specimen={OIOProviderSpecimen} />
      <APITableBlock spec={oioSpec} title="Component API" />
   </div>
)

export default OIOProviderPage
