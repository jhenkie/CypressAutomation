const homePage = '#homeMenu'
const onlineBankingPage = '#onlineBankingMenu'
const feedbackPage = '#feedback'

class topNavPage{
    static visit(){
        cy.fixture('example').then((find) =>{
            cy.visit(find.url)
        })
    }

    static goToHome(){
        cy.get(homePage).click()
    }

    static goToOnlineBanking(){
        cy.get(onlineBankingPage).click()
    }

    static goToFeedback(){
        cy.get(feedbackPage).click()
    }
}

export default topNavPage