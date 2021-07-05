import {Given, Then} from 'cypress-cucumber-preprocessor/steps'
import OnlineBankingPage from './onlineBankingPage'

Given('I open web page', () => {
    OnlineBankingPage.visit()
})

Then('I should see {string}, {string}, {string}', (value1, value2, value3) => {
    OnlineBankingPage.checkData(value1, value2, value3)
})