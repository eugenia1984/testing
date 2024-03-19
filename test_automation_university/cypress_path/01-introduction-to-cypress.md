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

``

---
