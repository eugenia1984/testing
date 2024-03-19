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

---