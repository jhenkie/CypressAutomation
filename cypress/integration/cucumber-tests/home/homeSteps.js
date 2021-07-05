import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import HomePage from './homePage'

Given('I open web page', () => {
    HomePage.visit()
})

Then('I should see {string}, {string}, {string}, {string}', (value1, value2, value3, value4) => {
    HomePage.checkData(value1, value2, value3, value4)
})