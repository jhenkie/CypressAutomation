import {defineStep} from 'cypress-cucumber-preprocessor/steps'
import TopNavPage from '../cucumber-tests/topNav/topNavPage'

defineStep('I want to wait {int} milliseconds', time =>{
    cy.wait(time)
})

defineStep('I see {string} in the title', title =>{
    cy.title().should('include', title)
})

defineStep('I login', ()=>{
    cy.login('username','password')
})

defineStep('I should click home', () => {
    TopNavPage.goToHome()
})

defineStep('I should click online banking', () => {
    TopNavPage.goToOnlineBanking()
})

defineStep('I should click feedback', () => {
    TopNavPage.goToFeedback()
})