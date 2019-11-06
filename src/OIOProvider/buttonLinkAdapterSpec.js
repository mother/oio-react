export default [{
   name: 'isActive',
   type: 'Function',
   default: 'See Description',
   description: 'A function that is passed in a link. This function must return a boolean that represents whether the link is currently active. The default function does a simple check based on <code>window.location.pathname</code>. This is only by <code>ListMenuButton</code> and <code>TabMenuButton</code>, but not <code>Button</code>.'
}, {
   name: 'render',
   type: 'Function',
   default: 'See Description',
   description: 'A function that is passed the props passed in to the <code>Button</code> or <code>ListMenuButton</code> element. This function must return a React element. The default function simply returns <code>&lt;a href={linkTo}&gt;{children}&lt;/a&gt;</code>.'
}]
