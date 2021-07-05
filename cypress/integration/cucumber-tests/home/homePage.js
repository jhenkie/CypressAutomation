// cy.fixture('user').then((user) =>{
//     cy.login(user.user_username,user.user_password,user.username,user.password)
// })

const onlineBanking = '#online_banking_features'
const accountActivity = '#account_activity_link'
const transferFunds = '#transfer_funds_link'
const moneyMap = '#money_map_link'

class homePage{
    static visit(){
        cy.fixture('example').then((find) =>{
            cy.visit(find.url)
        })
    }

    static checkData(value1, value2, value3, value4){
        cy.get(onlineBanking).should('contain.text',value1)
        cy.get(accountActivity).should('contain.text',value2)
        cy.get(transferFunds).should('contain.text',value3)
        cy.get(moneyMap).should('contain.text',value4)
    }
}

export default homePage