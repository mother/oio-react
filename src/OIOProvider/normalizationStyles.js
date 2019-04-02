import { css } from '@emotion/core'

const normalizationStyles = css`
   *{
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      -webkit-tap-highlight-color: transparent; // "turn off" link highlight
   }

   *, *:before, *:after {
      -webkit-box-sizing: inherit;
      -moz-box-sizing: inherit;
      box-sizing: inherit;
   }

   html, body, div, span, applet, object, iframe,
   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
   a, abbr, acronym, address, big, cite, code,
   del, dfn, em, img, ins, kbd, q, s, samp,
   small, strike, strong, sub, sup, tt, var,
   b, u, i, center,
   dl, dt, dd, ol, ul, li,
   fieldset, form, label, legend,
   table, caption, tbody, tfoot, thead, tr, th, td,
   article, aside, canvas, details, embed,
   figure, figcaption, footer, header, hgroup,
   menu, nav, output, ruby, section, summary,
   time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      vertical-align: baseline;
   }

   html {
     -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
     box-sizing: border-box;
   }

   a {
      text-decoration: none;
      outline: none;
      border: none;
      cursor: pointer;
      -webkit-tap-highlight-color:rgba(0,0,0,0);
   }

   a:active {
      outline: none;
   }

   a:focus {
      -moz-outline-style: none;
      outline:0;
   }

   img {
      display: block;
      border: none;
      margin: 0;
      padding: 0;
   }

   table {
      margin: 0;
      padding: 0;
      border-collapse: collapse;
      border: none;
   }

   th, td {
      text-align: left;
      padding: 0;
   }

   td {
      vertical-align: top;
   }

   input, textarea {
      margin: 0;
      padding: 0;
      border: 0;
      outline: 0;
      border-radius: 0;
      -webkit-appearance: none;
   }
`

export default normalizationStyles
