import React from 'react'
import { render } from 'react-testing-library'
import OIOContext from '../../../src/OIOProvider/context'
import OIOProvider from '../../../src/OIOProvider'

test('OIO Provider renders as expected', () => {
   const { baseElement } = render(
      <OIOProvider>
         Hello World
      </OIOProvider>
   )

   expect(baseElement).toMatchSnapshot()
})

test('OIO Provider context props are received as expected from context consumer', () => {
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
