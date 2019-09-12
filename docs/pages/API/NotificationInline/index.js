import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import spec from '../../../../src/NotificationInline/spec'
import NotificationInlineCustomizedSpecimen from '../../../specimens/NotificationInlineCustomized'
import NotificationInlineTypesSpecimen from '../../../specimens/NotificationInlineTypes'

const NotificationInlinePage = () => (
   <div>
      <HeaderBlock
         title="NotificationInline"
         subtitle="The NotificationInline component is a message or alert designed to flow inline with other content. It comes in 6 different types: <code>info</code>, <code>loading</code>, <code>prompt</code>, <code>success</code>, <code>warning</code> and <code>error</code>. "
      />
      <SpecimenBlock specimen={NotificationInlineTypesSpecimen} />
      <SpecimenBlock specimen={NotificationInlineCustomizedSpecimen} />
      <APITableBlock spec={spec} title="API Options" />
   </div>
)

export default NotificationInlinePage
