import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import listMenuSpec from '../../../../src/ListMenu/spec'
import listMenuButtonSpec from '../../../../src/ListMenuButton/spec'
import TabMenuBasicSpecimen from '../../../specimens/TabMenuBasic'
import ListMenuLinksSpecimen from '../../../specimens/ListMenuLinks'

const ListMenuPage = () => (
   <div>
      <HeaderBlock
         title="TabMenu"
         subtitle="The TabMenu and TabMenuButton are a components family designed for horizontally-oriented navigation"
      />
      <SpecimenBlock specimen={TabMenuBasicSpecimen} />
      <SpecimenBlock specimen={ListMenuLinksSpecimen} />
      <APITableBlock spec={listMenuSpec} title="TabMenu API Options" />
      <APITableBlock spec={listMenuButtonSpec} title="TabMenuButton API Options" />
   </div>
)

export default ListMenuPage
