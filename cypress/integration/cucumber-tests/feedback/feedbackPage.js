const name = '#name'
const email = '#email'
const subject = '#subject'
const comment = '#comment'
const btnsend = 'Send Message'
const feedbacktitle = '#feedback-title'
const feedbackbody = '//*[*[*[@id="feedback-title"]]]'

class feedbackPage{
    static visit(){
        cy.fixture('example').then((find) =>{
            cy.visit(find.url)
        })
    }

    static fillInData(value1, value2, value3, value4){
        cy.get(name).type(value1)
        cy.get(email).type(value2)
        cy.get(subject).type(value3)
        cy.get(comment).type(value4)
        cy.contains(btnsend).click()
    }

    static checkData() {
        cy.get(feedbacktitle).should('be.visible')
        cy.xpath(feedbackbody).should('be.visible')
    }
}

export default feedbackPage