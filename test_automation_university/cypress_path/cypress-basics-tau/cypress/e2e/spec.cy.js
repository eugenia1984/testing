it('My first test', () => {
  // To start the visual testing
  cy.eyesOpen()

  cy.visit('/')

  // To make the snapshot
  cy.eyesCheckWindow()

  // T finish the visual testing
  cy.eyesClose()
})