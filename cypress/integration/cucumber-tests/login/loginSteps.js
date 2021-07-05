import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given('I go to login page', () => {
    LoginPage.visit()
})

When('I fill in my data with {string} and {string}', (username,password) => {
    LoginPage.fillData(username, password)
})

Then('I should see login page', () => {
    //cy.get('#account_summary_tab').should('be.visible')
})