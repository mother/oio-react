import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import GridBasicSpecimen from '../../../specimens/GridBasic'
import GridCellBackgroundImageSpecimen from '../../../specimens/GridCellBackgroundImage'
import gridSpec from '../../../../src/Grid/spec'
import gridCellSpecAppearance from '../../../../src/GridCell/specAppearance'
import gridCellSpecBasic from '../../../../src/GridCell/specBasic'

const OIOContainerPage = () => (
   <div>
      <HeaderBlock title="Grid" />
      <SpecimenBlock specimen={GridBasicSpecimen} />
      <SpecimenBlock specimen={GridCellBackgroundImageSpecimen} />
      <APITableBlock
         spec={gridSpec}
         title="Grid Component API"
      />
      <APITableBlock
         spec={gridCellSpecBasic}
         title="GridCell - Basic API Options"
      />
      <APITableBlock
         spec={gridCellSpecAppearance}
         title="GridCell - Appearance API Options"
      />
   </div>
)

export default OIOContainerPage
