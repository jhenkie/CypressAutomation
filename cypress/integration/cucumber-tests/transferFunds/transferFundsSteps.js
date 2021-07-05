import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import TransferFundsPage from './transferFundsPage'

Given('I click transfer funds', () => {
    TransferFundsPage.goTo()
})

When('I do transfer money {string}, {string}', (value1, value2) => {
    TransferFundsPage.fillInData(value1, value2)
})

When('I confirm transfer money {string}, {string}', (value1, value2) => {
    TransferFundsPage.confirmData(value1, value2)
})

Then('I should see money tranferred', () => {
    TransferFundsPage.checkData()
})