const transferfund = '#transfer_funds_tab'
const fromaccount = '#tf_fromAccountId'
const toaccount = '#tf_toAccountId'
const amount = '#tf_amount'
const desc = '#tf_description'
const btnsubmit = '#btn_submit'
const successmessage = 'successfully submitted'

class transferFundsPage{
    static goTo(){
        cy.get(transferfund).click()
    }

    static fillInData(value1, value2){
        cy.get(fromaccount).select('4').then(($hehe) => {
            cy.log($hehe.text())
        })
        cy.get(toaccount).select('5')
        cy.get(amount).type(value1)
        cy.get(desc).type(value2)
        cy.get(btnsubmit).click()
    }

    static confirmData(value1, value2){        
        cy.get(amount).should('be.disabled').should('have.value',value1)
        cy.get(desc).should('be.disabled').should('have.value',value2)
        cy.get(btnsubmit).click()
    }

    static checkData() {
        cy.contains(successmessage).should('be.visible')
        
    }
}

export default transferFundsPage