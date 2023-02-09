export function shouldContainText(selector, ...args){
    return cy.get(selector).should('contain', ...args);
}

// expert function shouldInPage(Url){
//     return cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager')
// }