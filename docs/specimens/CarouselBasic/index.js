import React, { useState } from 'react'
import { Carousel, Form, Input, Spacer, Text, View } from '../../../src'

const CarouselBasic = () => {
   const [placeholderSlides, setPlaceholderSlides] = useState(Array(12).fill('slide'))
   const [carouselInfo, setCarouselInfo] = useState({
      currentPaneIndex: 0,
      numPanes: 0
   })

   const handleNumSlidesChange = (e) => {
      try {
         const numSlides = parseInt(e.currentTarget.value, 10)
         setPlaceholderSlides(Array(numSlides).fill('slide'))
      } catch {
         setPlaceholderSlides(Array(0).fill('slide'))
      }
   }

   return (
      <View>
         <Carousel
            numSlidesPerPane="1[a] 2[b] 3[c-e] 4[f]"
            onRotate={(currentPaneIndex, totalNumPanes) => {
               setCarouselInfo({ currentPaneIndex, totalNumPanes })
            }}>
            {placeholderSlides.map((slide, index) => (
               <View
                  // eslint-disable-next-line react/no-array-index-key
                  key={`carousel-placeholder-slide-${index}`}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  height="240px"
                  backgroundColor="#eee"
                  borderRadius="6px">
                  <Text color="#444" size="2" weight="medium">
                     {`Slide ${index + 1}`}
                  </Text>
               </View>
            ))}
         </Carousel>
         <Spacer size="2" />
         <Text color="#777" size="2" weight="medium">
            {`${carouselInfo.currentPaneIndex} / ${carouselInfo.numPanes}`}
         </Text>
         <Spacer size="6" />
         <View width="100%" backgroundColor="#e6edec" padding="24px" borderRadius="6px">
            <Form
               elementAppearance="plain"
               elementBackgroundColor="#fff"
               elementFocusBackgroundColor="#fff">
               <Input
                  type="number"
                  label="Number of Slides"
                  onChange={handleNumSlidesChange}
                  value={placeholderSlides.length}
               />
            </Form>
         </View>
      </View>
   )
}

CarouselBasic.title = 'Basic Implementation with Dynamic Slides'

CarouselBasic.description = 'The following example shows <code>Carousel</code> component displaying a dynamic number of slides. The component is responsive. You can try changing the number of slides with the control below.'

CarouselBasic.codeSnippet = `
const [placeholderSlides, setPlaceholderSlides] = useState(Array(12).fill('slide'))
const [carouselInfo, setCarouselInfo] = useState({
   currentPaneIndex: 0,
   numPanes: 0
})

const handleNumSlidesChange = (e) => {
   try {
      const numSlides = parseInt(e.currentTarget.value, 10)
      setPlaceholderSlides(Array(numSlides).fill('slide'))
   } catch {
      setPlaceholderSlides(Array(0).fill('slide'))
   }
}

return (
   <View>
      <Carousel
         numSlidesPerPane="1[a] 2[b] 3[c-e] 4[f]"
         onRotate={(currentPaneIndex, totalNumPanes) => {
            setCarouselInfo({ currentPaneIndex, totalNumPanes })
         }}>
         {placeholderSlides.map((slide, index) => (
            <View
               display="flex"
               justifyContent="center"
               alignItems="center"
               height="240px"
               backgroundColor="#eee"
               borderRadius="6px">
               <Text color="#444" size="2" weight="medium">
                  Slide {index + 1}
               </Text>
            </View>
         ))}
      </Carousel>
      <Spacer size="2" />
      <Text color="#777" size="2" weight="medium">
         {carouselInfo.currentPaneIndex} / {carouselInfo.numPanes}
      </Text>
      <Spacer size="6" />
      <View width="100%" backgroundColor="#e6edec" padding="24px" borderRadius="6px">
         <Form
            elementAppearance="plain"
            elementBackgroundColor="#fff"
            elementFocusBackgroundColor="#fff">
            <Input
               type="number"
               label="Number of Slides"
               onChange={handleNumSlidesChange}
               value={placeholderSlides.length}
            />
         </Form>
      </View>
   </View>
)
`

export default CarouselBasic
