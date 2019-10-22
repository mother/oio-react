import React, { useContext } from 'react'
import { Text, ZoomContext, ZoomProvider } from '../../../src'

const ExampleComponent = () => {
   const zoomContext = useContext(ZoomContext)

   return (
      <div
         style={{
            backgroundColor: '#eee',
            width: `${600 * zoomContext.zoom}px`
         }}>
         <Text size="9">{`Zoom Context: ${zoomContext.zoom}`}</Text>
      </div>
   )
}

const ZoomProviderSpecimen = () => (
   <ZoomProvider zoom={0.5}>
      <ExampleComponent />
   </ZoomProvider>
)

ZoomProviderSpecimen.title = 'ZoomContext'

ZoomProviderSpecimen.description = 'There may be scenarios where the <code>ZoomProvider</code> context value may be needed by non-OIO components for style or css purposes.'

ZoomProviderSpecimen.codeSnippet = `
const ExampleComponent = () => {
   const zoomContext = useContext(ZoomContext)

   return (
      <div
         style={{
            backgroundColor: '#eee',
            width: \`\${600 * zoomContext.zoom}px\`
         }}>
         <Text size="9">{\`Zoom Context: \${zoomContext.zoom}\`}</Text>
      </div>
   )
}

const ZoomProviderSpecimen = () => (
   <ZoomProvider zoom={0.5}>
      <ExampleComponent />
   </ZoomProvider>
)
`

export default ZoomProviderSpecimen
