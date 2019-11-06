const OIOProviderReactRouterSpecimen = {}

OIOProviderReactRouterSpecimen.title = 'React Router Integration'

OIOProviderReactRouterSpecimen.description = 'Some of the button components that also act as links can be flexibly configured to work with a custom router. For example, if we wanted to use the <code>Link</code> component from React Router (instead of a plain old <code>a</code> tag), we could configure this to be used by OIO by passing in the <code>buttonLinkAdapter</code> option.'

OIOProviderReactRouterSpecimen.codeSnippet = `
const buttonLinkAdapter = {
   render: ({ linkTo, linkReplace, linkExact, ...props }) => (
      <Link to={linkTo} replace={linkReplace} {...props} />
   )

   // isActive can be overridden if custom logic is needed to
   // specify whether the current link is active
   // isActive: (linkTo, linkExact) => matchPath(linkTo, linkExact)
}

const myComponent = () => (
   <OIOProvider buttonLinkAdapter={buttonLinkAdapter}>
      <Button linkTo="/" name="Home" />
   </OIOProvider>
)
`

export default OIOProviderReactRouterSpecimen
