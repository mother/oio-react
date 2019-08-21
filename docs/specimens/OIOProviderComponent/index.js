// import React from 'react'
// import { Button, View } from '../../../src'

const OIOProviderComponentSpecimen = {}

OIOProviderComponentSpecimen.title = 'OIOProvider Component'

OIOProviderComponentSpecimen.description = 'To use OIO components, you must wrap all components inside a <code>OIOProvider</code> component. <code>OIOProvider</code> components are used to propagate reuseable and cohesive props to all components within its scope. <code>OIOProvider</code> components can be nested.'

OIOProviderComponentSpecimen.codeSnippet = `
// All OIO components must be wrapped in an OIOProvider
const myComponent = () => (
   <OIOProvider>
      <Text>
         Hello World
      </Text>
   </OIOProvider>
)
`

export default OIOProviderComponentSpecimen
