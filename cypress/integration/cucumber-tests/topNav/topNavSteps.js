import {Given, And} from 'cypress-cucumber-preprocessor/steps'
import TopNavPage from './topNavPage'

Given('I open web page', () => {
    TopNavPage.visit()
})