import {Given, Then} from 'cypress-cucumber-preprocessor/steps'
import FeedbackPage from './feedbackPage'

Given('I open web page', () => {
    FeedbackPage.visit()
})

When('I fill in feedback form {string}, {string}, {string}, {string}', (value1, value2, value3, value4) => {
    FeedbackPage.fillInData(value1, value2, value3, value4)
})

Then('I should see my feedback submitted', () => {
    FeedbackPage.checkData()
})