import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import NotificationManagerSpecimen from '../../../specimens/NotificationManager'
import spec from '../../../../src/NotificationManager/spec'
import specShowNotification from '../../../../src/NotificationManager/specShowNotification'

const NotificationManagerPage = () => (
   <div>
      <HeaderBlock
         title="NotificationManager"
         subtitle="The NotificationManager consists of a <code>Context</code> and <code>Provider</code> designed to manage and centralize groups of banner-style notifications. The NotificationManager uses <code>NotificationInline</code> under the hood."
      />
      <SpecimenBlock specimen={NotificationManagerSpecimen} />
      <APITableBlock spec={spec} title="NotificationManagerProvider Options" />
      <APITableBlock spec={specShowNotification} title="showNotification Options" />
   </div>
)

export default NotificationManagerPage
