import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import TextAutoScaleSpecimen from '../../../specimens/TextAutoScale'
import TextColorsSpecimen from '../../../specimens/TextColors'
import TextSizesSpecimen from '../../../specimens/TextSizes'
import TextTransformsSpecimen from '../../../specimens/TextTransforms'
import TextWeightsSpecimen from '../../../specimens/TextWeights'
import textSpec from '../../../../src/Text/spec'

const TextPage = () => (
   <div>
      <HeaderBlock title="Text" />
      <SpecimenBlock specimen={TextSizesSpecimen} />
      <SpecimenBlock specimen={TextAutoScaleSpecimen} />
      <SpecimenBlock specimen={TextWeightsSpecimen} />
      <SpecimenBlock specimen={TextColorsSpecimen} />
      <SpecimenBlock specimen={TextTransformsSpecimen} />
      <APITableBlock spec={textSpec} title="Component API" />
   </div>
)

export default TextPage
