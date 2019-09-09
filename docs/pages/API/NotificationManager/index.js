import React from 'react'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import NotificationManagerSpecimen from '../../../specimens/NotificationManager'
import { NotificationManagerProvider } from '../../../../src'

const NotificationManagerPage = () => (
   <div>
      <HeaderBlock
         title="NotificationManager"
         subtitle="The Spacer component provides a convenient way to create whitespace between elements. The <code>Spacer</code> component is designed to work in both <code>vertical</code> and <code>horizontal</code> orientations."
      />
      <SpecimenBlock specimen={NotificationManagerSpecimen} />
   </div>
)

export default () => (
   <NotificationManagerProvider>
      <NotificationManagerPage />
   </NotificationManagerProvider>
)
