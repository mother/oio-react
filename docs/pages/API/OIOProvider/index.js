import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import OIOProviderSpecimen from '../../../specimens/OIOProviderComponent'
import OIOProviderReactRouterSpecimen from '../../../specimens/OIOProviderReactRouter'
import oioSpec from '../../../../src/OIOProvider/spec'
import buttonLinkAdapter from '../../../../src/OIOProvider/buttonLinkAdapterSpec'

const OIOProviderPage = () => (
   <div>
      <HeaderBlock title="OIOProvider" />
      <SpecimenBlock specimen={OIOProviderSpecimen} />
      <SpecimenBlock specimen={OIOProviderReactRouterSpecimen} />
      <APITableBlock spec={oioSpec} title="Component API" />
      <APITableBlock spec={buttonLinkAdapter} title="Button Link Adapter" />
   </div>
)

export default OIOProviderPage
