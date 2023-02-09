export function shouldContainText(selector, ...args){
    return cy.get(selector).should('contain', ...args);
}

export function urlShouldBe(url) {
    return cy.url().should('include', url);
}

export function visible(selector) {
    return cy.get(selector).should('be.visible');
}

// expert function shouldInPage(Url){
//     return cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager')
// }