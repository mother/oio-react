import React from 'react'
import serializer from 'jest-emotion'
import { render } from 'react-testing-library'
import OIOContext from '../src/OIOProvider/context'
import OIOProvider from '../src/OIOProvider'

// To show emotion styles in snapshot teset
expect.addSnapshotSerializer(serializer)

test('OIO Provider provides context props correctly', () => {
   let contextProps = ''

   render(
      <OIOProvider>
         <OIOContext.Consumer>
            {(context) => {
               contextProps = context
               return (
                  <div>Hello World</div>
               )
            }}
         </OIOContext.Consumer>
      </OIOProvider>
   )

   expect(contextProps).toMatchSnapshot()
})

test('OIO Provider will render correctly', () => {
   const { baseElement } = render(
      <OIOProvider>
         Hello World
      </OIOProvider>
   )

   expect(baseElement).toMatchSnapshot()
})
