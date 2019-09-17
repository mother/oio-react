import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import buttonSpec from '../../../../src/Button/spec'
import ButtonChildrenSpecimen from '../../../specimens/ButtonChildren'
import ButtonCustomizationsSpecimen from '../../../specimens/ButtonCustomizations'
import ButtonLinkSpecimen from '../../../specimens/ButtonLink'
import ButtonModesSpecimen from '../../../specimens/ButtonModes'
import ButtonSizesSpecimen from '../../../specimens/ButtonSizes'
import ButtonStylesSpecimen from '../../../specimens/ButtonStyles'

const ButtonPage = () => (
   <div>
      <HeaderBlock title="Button" />
      <SpecimenBlock specimen={ButtonSizesSpecimen} />
      <SpecimenBlock specimen={ButtonCustomizationsSpecimen} />
      <SpecimenBlock specimen={ButtonStylesSpecimen} />
      <SpecimenBlock specimen={ButtonModesSpecimen} />
      <SpecimenBlock specimen={ButtonLinkSpecimen} />
      <SpecimenBlock specimen={ButtonChildrenSpecimen} />
      <APITableBlock spec={buttonSpec} title="Component API" />
   </div>
)

export default ButtonPage
