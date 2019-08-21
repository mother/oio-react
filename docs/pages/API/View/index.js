import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import ViewBasicSpecimen from '../../../specimens/ViewBasic'
import ViewEventsSpecimen from '../../../specimens/ViewEvents'
import viewSpec from '../../../../src/View/spec'
import viewSpecAppearance from '../../../../src/View/specAppearance'
import viewSpecFlexbox from '../../../../src/View/specFlexbox'
import viewSpecPaddingMargin from '../../../../src/View/specPaddingMargin'

const ViewPage = () => (
   <div>
      <HeaderBlock title="View" />
      <SpecimenBlock specimen={ViewBasicSpecimen} />
      <SpecimenBlock specimen={ViewEventsSpecimen} />
      <APITableBlock spec={viewSpec} title="Basic Formatting API Options" />
      <APITableBlock spec={viewSpecAppearance} title="Appearance API Options" />
      <APITableBlock spec={viewSpecFlexbox} title="FlexBox API Options" />
      <APITableBlock spec={viewSpecPaddingMargin} title="Padding and Margin API Options" />
   </div>
)

export default ViewPage
