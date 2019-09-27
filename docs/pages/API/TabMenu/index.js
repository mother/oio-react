import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import tabMenuSpec from '../../../../src/TabMenu/spec'
import tabMenuButtonSpec from '../../../../src/TabMenuButton/spec'
import TabMenuBasicSpecimen from '../../../specimens/TabMenuBasic'
import TabMenuCustomizedSpecimen from '../../../specimens/TabMenuCustomized'

const ListMenuPage = () => (
   <div>
      <HeaderBlock
         title="TabMenu"
         subtitle="The TabMenu and TabMenuButton are a components family designed for horizontally-oriented navigation"
      />
      <SpecimenBlock specimen={TabMenuBasicSpecimen} />
      <SpecimenBlock specimen={TabMenuCustomizedSpecimen} />
      <APITableBlock spec={tabMenuSpec} title="TabMenu API Options" />
      <APITableBlock spec={tabMenuButtonSpec} title="TabMenuButton API Options" />
   </div>
)

export default ListMenuPage
