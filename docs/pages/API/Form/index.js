import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import checkboxSpec from '../../../../src/Form/Checkbox/spec'
import formSpec from '../../../../src/Form/spec'
import inputSpec from '../../../../src/Form/Input/spec'
import labelSpec from '../../../../src/Form/Label/spec'
import radioSpec from '../../../../src/Form/Radio/spec'
import selectSpec from '../../../../src/Form/Select/spec'
import switchSpec from '../../../../src/Form/Switch/spec'
import textareaSpec from '../../../../src/Form/Textarea/spec'
import FormOutlineSpecimen from '../../../specimens/FormOutline'
import FormPlainSpecimen from '../../../specimens/FormPlain'
import FormInputSizesSpecimen from '../../../specimens/FormInputSizes'
import FormInputUnderlineSpecimen from '../../../specimens/FormInputUnderline'

const FormPage = () => (
   <div>
      <HeaderBlock
         title="Forms"
         subtitle="OIO provides a full suite of styled Form UI elements. In addition to the options specified below, all OIO Form elements can have all of the same attributes as their html counterparts."
      />
      <SpecimenBlock specimen={FormOutlineSpecimen} />
      <SpecimenBlock specimen={FormPlainSpecimen} />
      <SpecimenBlock specimen={FormInputSizesSpecimen} />
      <SpecimenBlock specimen={FormInputUnderlineSpecimen} />

      <APITableBlock spec={formSpec} title="Form API Options" />
      <APITableBlock spec={checkboxSpec} title="Checkbox API Options" />
      <APITableBlock spec={inputSpec} title="Input API Options" />
      <APITableBlock spec={labelSpec} title="Label API Options" />
      <APITableBlock spec={radioSpec} title="Radio API Options" />
      <APITableBlock spec={selectSpec} title="Select API Options" />
      <APITableBlock spec={switchSpec} title="Switch API Options" />
      <APITableBlock spec={textareaSpec} title="Textarea API Options" />
   </div>
)

export default FormPage
