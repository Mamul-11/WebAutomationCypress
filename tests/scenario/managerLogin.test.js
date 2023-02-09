import * as route from '@helpers/route';
import * as element from '@helpers/elements'
import * as assert from '@helpers/asserts'
import {ROUTES} from '@tests/const/routes';
import * as auth from '@tests/data/managerLogin.data';
import * as login from '@tests/page/managerLogin.page';


describe ('Manager Login', () => {

beforeEach(() => {
    route.visit(ROUTES.home);
    // add csutomer psoitive
    element.click(login.managerLogin);

});
describe ('Add Costumer', () => {
    beforeEach(() => {
            assert.urlShouldBe(ROUTES.manager);
            //add ccustomer negative
            // element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);

    });

    describe('Positive Case', () => {
    it('Ensure you can press the "Manager Login" button', () => {
            // element.click(login.managerLogin);
            // route.visit(ROUTES.manager);
            element.click(login.addCustomer)
            element.fillField(login.firstName, auth.ADDCUSTOMER_VALID.firstname)
            element.fillField(login.lastName, auth.ADDCUSTOMER_VALID.lastname)
            element.fillField(login.postCode, auth.ADDCUSTOMER_VALID.postcode)
            element.dbclick(login.addCustomerButton);
            element.handlingAlert()
        });
    })

    describe('Negative Case', () => {
        it('Ensure you cant submit an incorrect first name, last name, postcode', () => {
                    element.click(login.addCustomer)
                    element.fillField(login.firstName, auth.ADDCUSTOMER_INVALID.firstname)
                    element.fillField(login.lastName, auth.ADDCUSTOMER_INVALID.lastname)
                    element.fillField(login.postCode, auth.ADDCUSTOMER_INVALID.postcode)
                    element.click2(login.addCustomerButton);
                    element.handlingAlert()
                });
        
                it('Negative test case - Ensure you must fill in the firstname blank form', () => {
                    element.click(login.addCustomer)
                    element.fillField(login.lastName, auth.CUST_EMPTY_FIRSTNAME.lastname)
                    element.fillField(login.postCode, auth.CUST_EMPTY_FIRSTNAME.postcode)
                    element.click2(login.addCustomerButton);
                    element.handlingAlert2()
                });
        
                it('Negative test case - Ensure you must fill in the lastname blank form', () => {
                    element.click(login.addCustomer)
                    element.fillField(login.firstName, auth.CUST_EMPTY_LASTNAME.firstname)
                    element.fillField(login.postCode, auth.CUST_EMPTY_LASTNAME.postcode)
                    element.click2(login.addCustomerButton);
                    element.handlingAlert2()
                });
        
                it('Negative test case - Ensure you must fill in the firstname blank form', () => {
                    element.click(login.addCustomer)
                    element.fillField(login.firstName, auth.CUST_EMPTY_POSTCODE.firstname)
                    element.fillField(login.lastName, auth.CUST_EMPTY_POSTCODE.lastname)
                    element.click2(login.addCustomerButton);
                    element.handlingAlert2()
                });
        
                it('Negative testcase - Ensure you have to fill out the form in add customer', () => {
                    element.click(login.addCustomer)
                    // element.fillField(login.firstName, auth.CUST_EMPTY.firstname)
                    // element.fillField(login.lastName, auth.CUST_EMPTY.lastname)
                    // element.fillField(login.postCode, auth.CUST_EMPTY.postcode)
                    element.click(login.addCustomerButton);
                    // element.handlingAlert()
                });
    })

});

describe('Open Acount', () => {
    beforeEach(() => {
        assert.urlShouldBe(ROUTES.manager);
        
    });

    describe('Positive Case', ()=>{
        it(' Ensure you can fill in choosing a customer and dollar currency ', () => {
            element.click(login.openAcount);
            element.select(login.customerSelect, auth.OPEN_ACOUNT.username);
            element.select(login.currencySelect, auth.OPEN_ACOUNT.currency1);
            element.click(login.submitOpen);
        });

        it(' Ensure you can fill in choosing a customer and  pound currency ', () => {
            element.click(login.openAcount);
            element.select(login.cutomerSelect, auth.OPEN_ACOUNT.username);
            element.select(login.currencySelect, auth.OPEN_ACOUNT.currency2);
            element.click(login.submitOpen);
        });

        it(' Ensure you can fill in choosing a customer and rupee currency ', () => {
            element.click(login.openAcount);
            element.select(login.cutomerSelect, auth.OPEN_ACOUNT.username);
            element.select(login.currencySelect, auth.OPEN_ACOUNT.currency3);
            element.click(login.submitOpen);
        });
    })

    describe('Negative Case ', ()=>{
        it(' Ensure you cant submit if the currency is empty', () => {
            element.click(login.openAcount);
            element.select(login.customerSelect, auth.OPEN_ACOUNT.username);
            element.click(login.submitOpen);
        });

        it(' Ensure you cant submit if the currency set Dollar and username is empty ', () => {
            element.click(login.openAcount);
            element.select(login.currencySelect, auth.OPEN_ACOUNT.currency1);
            element.click(login.submitOpen);
        });

        it('Ensure you cant submit if the currency set pounds and username is empty', () => {
            element.click(login.openAcount);
            element.select(login.currencySelect, auth.OPEN_ACOUNT.currency2);
            element.click(login.submitOpen);
        });

        it('Ensure you cant submit if the currency set rupee and username is empty', () => {
            element.click(login.openAcount);
            element.select(login.currencySelect, auth.OPEN_ACOUNT.currency3);
            element.click(login.submitOpen);
        });
    })
});

describe('Customers', () => {
    
    beforeEach(() => {
        assert.urlShouldBe(ROUTES.manager);
    });

    describe('positive case', ()=>{})
    it.only('Ensure you can fill in the search field by name', () => {
        element.click(login.customers)
        element.fillField(login.search, auth.OPEN_ACOUNT.nickname)
    }); 

    it.only('Ensure you can fill in the search field by name', () => {
        element.click(login.customers)
        element.fillField(login.search, auth.OPEN_ACOUNT.postcode)
    }); 

    it.only('Make sure you can fill in the search field by number ', () => {
        element.click(login.customers)
        element.fillField(login.search, auth.OPEN_ACOUNT.norek)
    }); 
    
    it.only('Ensure you can delete any of the data', () => {
        element.click(login.customers)
        assert.shouldContainText(login.del, auth.OPEN_ACOUNT.nickname);
        element.click(login.deleteButton);
    });
    

    });

})