Cypress.Commands.add("setResolution", (size)=> {
    if(Cypress._.isArray(size)){
        cy.viewport(size[0], size[1])
    }else{
        cy.viewport(size)
    }
})

Cypress.Commands.add('login', (username, password)=> {
    cy.fixture('example').then((find) =>{
        cy.visit(find.url_login)
    })
    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.contains('Sign in').click()
})

// Cypress.Commands.add('login', (user_username,user_password,username, password) => {
//     // cy.clearCookies()
//     // cy.clearLocalStorage()
//     cy.get(user_username).type(username)
//     cy.get(user_password).type(password)
//     cy.contains('Sign in').click()
// })