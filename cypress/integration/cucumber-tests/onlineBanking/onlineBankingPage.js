const accountSummary = '#account_summary_link'
const accountActivity = '#account_activity_link'
const transferFunds = '#transfer_funds_link'

class onlineBankingPage{
    static visit(){
        cy.fixture('example').then((find) =>{
            cy.visit(find.url)
        })
    }

    static checkData(value1, value2, value3){
        cy.get(accountSummary).should('contain.text',value1)
        cy.get(accountActivity).should('contain.text',value2)
        cy.get(transferFunds).should('contain.text',value3)
    }
}

export default onlineBankingPage