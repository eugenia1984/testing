# Introduction to Cypress (with Filip Hric)

---

## What we will see?

```
- How to start a new Cypress project
- How to write your first test
- Write simple assertions
- Learn a little bit about fundamentals that will give you a good start in writing
```

- [cypress-basics-tau](https://github.com/eugenia1984/testing/tree/main/test_automation_university/cypress_path/cypress-basics-tau) first Cypress exercise.

---

## What is Cypress?

A tool to test what is run on a browser.

A testing tool created for developers.

Cypress operates by creating two iframes, one of them runs our application, and the other one runs the Cypress script. This setup enables Cypress to interact directly with our application, eliminating any need for a middleware. That's a significant distinction from tools like Playwright or Selenium.

- Cypress uses the Mocha framework for writing test cases.

- The `cy.visit()` function is used in Cypress to visit a URL.

- You can set a base URL in the cypress.config.js file

---

## Cypress-basic-tau

The first exercise.

1. Create a Node project with: `npm init -y`

2. Install Cypress with: `npm install cypress`

If you are going to download this repository, as the node_modules are not on GitHub, please remember to run the `npm install` command, in order to install the libraries.

3. Run: `npx cypress open` an a browser will open.

4. We will need to configure the **e2e testing**:

- click on "E2E Testing" box

- click on "Continue"

- select a browser and click on "Start E2E Testing in Chrome" (I choose Chrome as a browser)

-> Now I have a new file `cypress.config.js` in my project.

- Click on "Scaffold example specs" and click on "OK, got it", and some test will be created inside the new `cypress` folder, with: `downloads`, `e2e`, `fixtures` and `support`.

- Inside `cypress/e2e` we are going to create the first test: `spec.cy.js`

And we can start running the tests:

![image](https://github.com/eugenia1984/testing/assets/72580574/029c782e-8ced-40d2-9163-87290db95c45)

- At `cypress.config.js` we can add extra configuration, like...

... the base URL: ` baseUrl: 'https://cypress.io'`

... the view port height: `viewportHeight: 550,`

... the view port width: `viewportWidth: 664`

---

## Cypress Studio

At the `settings` we have the **Studio**: generate and save commands directly to your test suite by interacting with your app as an end user would.

At `cypress.config.js` add: `experimentalStudio: true`

Now when you are running your specs, at the right side of the test name there is an icon to : add commands to test

---

## Selectors

`cy.contains('new board')` -> to select the element that has the text: 'new board'

`cy.get('.board')` -> to select by a class

`cy.get('#board-1')` -> to select by ID

`cy.get('[data-cy="board-item"]')` -> to select by an HTML attribute

`cy.contains('.board', 'new board')` -> select the element with the class 'board' that contains teh text 'new board'

You can use the cy.get command with a dot prefix for class, a hash symbol for ID, or square brackets for other attributes.

`.first()` -> the first element

`.last()` -> the last element

`.eq(0)` -> the first element, `.eq(1)` the second element

Others: `.next()`, `.prev()`, `.parent()` and `.children()`

---

## Interaction

`cy.get('[data-cy="add-list-input"]').type('new list')` -> to enter text into an input field

`cy.get('[data-cy="add-list-input"]').type('new list{enter}')` -> `{enter}` to emulate click Enter

`cy.contains('Add another card').click()` -> to click

`it.only('', () => {})` -> if you have more than one test, and we add **.only** to one of them, we are going to run only that test.

We can't simulate a hover element that has a CSS property. -> `.click({force: true})`

---

## Assertions

- How can you confirm that an element is visible on the page in Cypress? Using the **should** command, for example: `cy.get(selector).should('be.visible')`

`.should('be.visible')` -> to be visible

`cy.get('[data-cu="new-card-input"]').should('have.length', 2)` -> the Cypress assertion to ensure that a certain number of elements are found

When using get we have an array of element, that why we can use the .length

- In a scenario where you want an element to always be in a 'checked' state at the end of the test, which Cypress command should you use? `cy.get('selector').check()` and `.uncheck()` to make sure is not check it. Another way: `cy.get('selector').should('be.checked')`

- How would you assert in Cypress that there’s the text 'groceries' visible in an input element?

`cy.get('selector').should('be.checked')` -> to be check it

`cy.get('selector').should('have.class', 'completed')` -> to have the class `completed`

`cy.get('selector').should('have.text', 'completed')` -> to have the text `completed`

`cy.get('selector').should('have.value', 'groceries')` -> to check a text inside an input, it will be a value, not a text

---

## Chaining and retrying

`cy.contains('[data-cy=card]', 'Jun 26 2023')` -> to select a card that has the date: Jun 26 2023. `contains` will select the first item that will find, but we can use **command chains** to pass information from one command to another, for example: `cy.get().click()`, we call it **child commands** because `click()`, `type()` or `should()` first they need to have a query command before it.

We also have **parents commands** like : `cy.contains()`, `cy.visit()`, `cy.get()`.

And the third is: **hybrid commands**, that will change the behavior whether they are at the beginning or they are a continuation of the chain, like: `contains()`

---

## Delay in a test

- `cypress.config.js` add: `defaultCommandTimeout: 6000`, so it will wait 6 seconds between test

- inside one particular test: `it('test name', {defaultCommandTimeout: 6000}, () => {})`

- adding a timeout on the command: `cy.get('selector', {timeout: 6000})`

The time that will take the test to fail.

---

## Commands

We have: **query** like `get()` or `last()`, **assertions** like `should()` and **actions** like `click()`.

It will only re try the queries commands, until the assertions passes.

---