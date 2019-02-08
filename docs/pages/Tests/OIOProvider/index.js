import React, { Component } from 'react'

export default class Tests extends Component {
   render() {
      return (
         <div style={{ backgroundColor: '#eee' }}>
            <h1>Hello World</h1>
            <h2>This is a test for Normalized Styles</h2>
            <a href="/">Test Link</a>
            <p>
               This is a paragraph
            </p>
            <p>
               This is a second paragraph
            </p>
            <div
               style={{
                  backgroundColor: '#aaa',
                  border: '1px solid #ff0000',
                  margin: '12px',
                  padding: '12px',
                  width: '300px'
               }}>
               This is a box-sizing test
            </div>
            <table>
               <tr>
                  <td>Table Cell 1</td>
                  <td>Table Cell 2</td>
               </tr>
               <tr>
                  <td colSpan="2">
                     <input type="text" name="testInput" placeholder="Test Input" />
                  </td>
               </tr>
               <tr>
                  <td colSpan="2">
                     <textarea type="text" placeholder="Test Textarea" />
                  </td>
               </tr>
               <tr>
                  <td colSpan="2">
                     <button>Button Test</button>
                  </td>
               </tr>
            </table>
         </div>
      )
   }
}
