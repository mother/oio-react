/* eslint-disable no-unused-vars,no-undef,import/newline-after-import */
import OIOResponsiveStringMacro from '../../macro'
const result = OIOResponsiveStringMacro`
   ${this.props.a} [a]
   ${callFunc()} [b]
   ${boolExpr ? 'red' : 'white'} [c]
   ${val || defaultVal} [d]
   ${null} [e]
   ${'cucumber'} [f]`
