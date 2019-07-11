import React, { PureComponent } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneEarth } from 'react-syntax-highlighter/dist/styles/prism'
import { Text } from '../../../../src'
import checkboxSpec from '../../../../src/Form/Checkbox/spec'
import inputSpec from '../../../../src/Form/Input/spec'
import labelSpec from '../../../../src/Form/Label/spec'
import radioSpec from '../../../../src/Form/Radio/spec'
import selectSpec from '../../../../src/Form/Select/spec'
import switchSpec from '../../../../src/Form/Switch/spec'
import textareaSpec from '../../../../src/Form/Textarea/spec'
import APITableBlock from '../../../components/APITableBlock'
import FormOutlineSpecimen from '../../../specimens/FormOutline'
import FormPlainSpecimen from '../../../specimens/FormPlain'
import FormInputSizesSpecimen from '../../../specimens/FormInputSizes'
import FormInputUnderlineSpecimen from '../../../specimens/FormInputUnderline'
import style from '../style.less'

export default class FormPage extends PureComponent {
   render() {
      return (
         <div className={style.docs}>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="12" weight="medium">Forms</Text>
                  <br />
                  <Text size="3" lineHeight="140%">
                     {/* eslint-disable max-len */}
                     OIO provides a full suite of styled Form UI elements. In addition to the options specified below, all OIO Form elements can have all of the same attributes as their html counterparts.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <Text size="5" weight="medium">Outline Appearance</Text>
                  <br />
                  <Text size="2[a-e] 3[f]" lineHeight="140%">
                     {/* eslint-disable max-len */}
                     The following is a form styled with the <code>outline</code> appearance (the default). Note that the appearance for all these elements are set through an <code>OIOProvider</code>, and not set individually on each component.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <FormOutlineSpecimen />
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {FormOutlineSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">Plain Appearance</Text>
                  <br />
                  <Text size="2[a-e] 3[f]" lineHeight="140%">
                     {/* eslint-disable max-len */}
                     The following is a form styled with the <code>plain</code> appearance. Note that the appearance for all these elements are set through an <code>OIOProvider</code>, and not set individually on each component. Also note that the <code>Switch</code> component&apos;s appearance is the same as when <code>appearance</code> is set to <code>outline</code>. The following example also has customizations for the form labels.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <FormPlainSpecimen />
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {FormPlainSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">Form Input Sizes</Text>
                  <br />
                  <Text size="2[a-e] 3[f]" lineHeight="140%">
                     {/* eslint-disable max-len */}
                     You can set the size for the <code>Input</code>, <code>Select</code> , and <code>Textarea</code> components by using the
                      prop <code>size</code>. The <code>size</code> prop may be available to other form components in the future.
                      The default size for these components is <code>sm</code>. Availalble
                       sizes are: <code>xl</code>, <code>lg</code>, <code>md</code>,
                     <code>sm</code>, <code>xs</code>
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <FormInputSizesSpecimen />
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {FormInputSizesSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <div className={style.block}>
               <div className={style.columnHalfText}>
                  <Text size="5" weight="medium">Form Input (with underline appearance)</Text>
                  <br />
                  <Text size="2[a-e] 3[f]" lineHeight="140%">
                     {/* eslint-disable max-len */}
                     The <code>Input</code> component (and only this component) has an additional <code>appearance</code> option called <code>underline</code>. This must be set on the <code>Input</code> components themselves. Note: this appearance option is not available through the <code>OIOProvider</code>. <code>Input</code> components with the <code>underline</code> <code>appearance</code> will look harmonious next to OIO Form elements with the <code>appearance</code> set to <code>outline</code>.
                     {/* eslint-enable max-len */}
                  </Text>
                  <br />
                  <br />
                  <FormInputUnderlineSpecimen />
               </div>
               <div className={style.columnHalfCode}>
                  <SyntaxHighlighter
                     language="jsx"
                     style={duotoneEarth}
                     customStyle={{ background: 'transparent' }}>
                     {FormInputUnderlineSpecimen.codeSnippet}
                  </SyntaxHighlighter>
               </div>
            </div>
            <APITableBlock spec={checkboxSpec} title="Checkbox API Options" />
            <APITableBlock spec={inputSpec} title="Input API Options" />
            <APITableBlock spec={labelSpec} title="Label API Options" />
            <APITableBlock spec={radioSpec} title="Radio API Options" />
            <APITableBlock spec={selectSpec} title="Select API Options" />
            <APITableBlock spec={switchSpec} title="Switch API Options" />
            <APITableBlock spec={textareaSpec} title="Textarea API Options" />
         </div>
      )
   }
}
