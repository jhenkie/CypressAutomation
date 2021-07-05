const URL = "http://zero.webappsecurity.com/login.html"
const username = '#user_login'
const password = '#user_password'
const button = 'Sign in'


class loginPage{
    static visit(){
        cy.visit(URL)
    }

    static fillData(name, pass){
        cy.get(username).type(name)
        cy.get(password).type(pass)
        cy.contains(button).click()
    }
}

export default loginPage