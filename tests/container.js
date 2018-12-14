beforeEach(() => {
   jest.spyOn(console, 'error').mockImplementation(() => {})
})

afterEach(() => {
   jest.restoreAllMocks()
})

test('container will do something', () => {

})
