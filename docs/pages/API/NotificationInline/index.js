import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import spec from '../../../../src/NotificationInline/spec'
import NotificationInlineCustomizedSpecimen from '../../../specimens/NotificationInlineCustomized'
import NotificationInlineTypesSpecimen from '../../../specimens/NotificationInlineTypes'

const NotificationInlinePage = () => (
   <div>
      <HeaderBlock title="NotificationInline" />
      <SpecimenBlock specimen={NotificationInlineTypesSpecimen} />
      <SpecimenBlock specimen={NotificationInlineCustomizedSpecimen} />
      <APITableBlock spec={spec} title="API Options" />
   </div>
)

export default NotificationInlinePage
