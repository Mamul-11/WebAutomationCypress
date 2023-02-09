export function get(selector){
    return cy.get(selector);
}

export function fillField(selector, value){
    return cy.get(selector).clear().type(value).should('have.value', value); 
}

export function click(selector, ...args){
    return cy.get(selector).click(...args);
} 

export function click2(selector){
    return cy.get(selector).click({ force: true });
} 

export function dbclick(selector){
    return cy.get(selector).dblclick({ force: true });
}

export function dropDown(selector){
    return cy.get(selector).click().contain('Albus Dumbledore').click()
}

export function handlingAlert(){
    cy.on('windows:alert', (str) => {
        expect(str).to.equal('Customer added successfully with customer id :' + id())
    });
}

// it('handling alert', function (){
//     cy.get('[type="submit"]').click()
//     cy.on('windows:alert', (str) => {
//         expect(str).to.equal('Please check the details. Customer may be duplicate.')
//     });
    
// });


