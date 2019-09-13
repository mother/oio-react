import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import spec from '../../../../src/OIOTransformer/spec'
import OIOTransformerSpecimen from '../../../specimens/OIOTransformer'

const OIOTransformerPage = () => (
   <div>
      <HeaderBlock
         title="OIO Transformer"
         subtitle="This component allows for metamorphosis between components. This is highly useful when you want the type of component to be dependent on the breakpoint. For example, you may want to display a <code>Popover</code> at smaller resolutions while displaying a <code>Modal</code> at higher resolutions."
      />
      <SpecimenBlock specimen={OIOTransformerSpecimen} />
      <APITableBlock spec={spec} title="OIOTransformer API Options" />
   </div>
)

export default OIOTransformerPage
