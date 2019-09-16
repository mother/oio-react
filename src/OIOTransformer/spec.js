export default [{
   name: 'render',
   type: 'Function',
   default: '-',
   description: 'A function that is passed two parameters: common props (including <code>children</code>) and the current breakpoint. This function <b>must</b> return an object, with keys that indicate one or more breakpoints, and values that are React elements.',
   responsive: false
}, {
   name: 'Common Props',
   type: 'Object',
   default: '-',
   description: 'All other props are passed in to the render function as its first argument',
   responsive: false
}]
