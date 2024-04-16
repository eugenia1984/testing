export {}
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Get a DOM element based on placeholder value
       * @param input placeholder text value
       */
      getByPlaceHolder(input: string):
      Chainable<any>
    }
  }
}

Cypress.Commands.add('getByPlaceHolder',
  {input: string} => {

    Cypress.log({
      displayName: 'getByPlaceHolder',
      message: input,
      consoleProps() {
        return {
          selector: input
        }
      }
    })

    return cy.get(`[placeholder="${input}"]`, {
      log: false
    })
  }
)