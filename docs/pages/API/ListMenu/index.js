import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import listMenuSpec from '../../../../src/ListMenu/spec'
import listMenuButtonSpec from '../../../../src/ListMenuButton/spec'
import ListMenuBasicSpecimen from '../../../specimens/ListMenuBasic'
import ListMenuActiveArrowSpecimen from '../../../specimens/ListMenuActiveArrow'
import ListMenuLinksSpecimen from '../../../specimens/ListMenuLinks'

const ListMenuPage = () => (
   <div>
      <HeaderBlock
         title="ListMenu"
         subtitle="The ListMenu and ListMenuButton components are flexible components for handling many menu and navigation configurations."
      />
      <SpecimenBlock specimen={ListMenuBasicSpecimen} />
      <SpecimenBlock specimen={ListMenuActiveArrowSpecimen} />
      <SpecimenBlock specimen={ListMenuLinksSpecimen} />
      <APITableBlock spec={listMenuSpec} title="ListMenu API Options" />
      <APITableBlock spec={listMenuButtonSpec} title="ListMenuButton API Options" />
   </div>
)

export default ListMenuPage
