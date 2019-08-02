import React from 'react'
import APITableBlock from '../../../components/APITableBlock'
import HeaderBlock from '../../../components/HeaderBlock'
import SpecimenBlock from '../../../components/SpecimenBlock'
import ViewBasicSpecimen from '../../../specimens/ViewBasic'
import viewSpec from '../../../../src/View/spec'
import viewSpecAppearance from '../../../../src/View/specAppearance'
import viewSpecFlexbox from '../../../../src/View/specFlexbox'
import viewSpecPaddingMargin from '../../../../src/View/specPaddingMargin'

const ViewPage = () => (
   <div>
      <HeaderBlock title="View" />
      <SpecimenBlock specimen={ViewBasicSpecimen} />
      <SpecimenBlock
         title="Supported Events"
         codeSnippet={'<View onClick={doSomething}>Synthetic Events</View>'}
         description={`
            The <code>View</code> component supports the following React  events:<br /><br />
            <code>
               onClick, onCopy, onCut, onPaste, onDoubleClick, onKeyDown, onKeyPress, onKeyUp,
               onMouseDown, onMouseMove, onMouseOut, onMouseOver, onMouseUp, onScroll,
               onTouchCancel, onTouchEnd, onTouchMove, onTouchStart, onTransitionEnd
            </code>
            <br /><br />
            (Visit <a href="https://reactjs.org/docs/events.html">https://reactjs.org/docs/events.html</a> for more information about React SyntheticEvents)
         `}
      />
      <APITableBlock spec={viewSpec} title="Basic Formatting API Options" />
      <APITableBlock spec={viewSpecAppearance} title="Appearance API Options" />
      <APITableBlock spec={viewSpecFlexbox} title="FlexBox API Options" />
      <APITableBlock spec={viewSpecPaddingMargin} title="Padding and Margin API Options" />
   </div>
)

export default ViewPage
