import * as route from '@helpers/route';
import * as element from '@helpers/elements'
import * as assert from '@helpers/asserts'
import {ROUTES} from '@tests/const/routes';
import * as auth from '@tests/data/managerLogin.data';
import * as login from '@tests/page/managerLogin.page';

describe ('Manager Login', () => {
    before(() => {
            route.visit(ROUTES.home);
    });

    it('Ensure you can press the "Manager Login" button', () => {
            element.click(login.managerLogin);
            route.visit(ROUTES.manager);
        });

    describe('Positive - Add Customen in Manager Login page', () => {
        
        before(() => {
            route.visit(ROUTES.manager);
        });
    
        it('Positive tescase - Enure you can fill in your first name, last name, postcode in the form ', () => {
            element.click(login.addCustomer)
            element.fillField(login.firstName, auth.ADDCUSTOMER_VALID.firstname)
            element.fillField(login.lastName, auth.ADDCUSTOMER_VALID.lastname)
            element.fillField(login.postCode, auth.ADDCUSTOMER_VALID.postcode)
            element.dbclick(login.addCustomerButton);
            element.handlingAlert()
            // assert.shouldContainText(login.alertAddCus, )
        });

        it('Positive tescase - Enure you can fill in your first name, last name, postcode in the form ', () => {
            element.click(login.addCustomer)
            element.fillField(login.firstName, auth.ADDCUSTOMER_VALID.firstname)
            element.fillField(login.lastName, auth.ADDCUSTOMER_VALID.lastname)
            element.fillField(login.postCode, auth.ADDCUSTOMER_VALID.postcode)
            element.dbclick(login.addCustomerButton);
            element.handlingAlert()
            // assert.shouldContainText(login.alertAddCus, )
        }); 
    });

    // describe('Negative - Add Customen in Manager Login page', ()=> {
    //     beforeEach(() => {
    //         route.visit(ROUTES.manager);
    //     });
    //     it('Negative testcase - Make sure you cant submit an incorrect first name, last name, postcode', () => {
    //         element.click(login.addCustomer)
    //         element.fillField(login.firstName, auth.ADDCUSTOMER_INVALID.firstname)
    //         element.fillField(login.lastName, auth.ADDCUSTOMER_INVALID.lastname)
    //         element.fillField(login.postCode, auth.ADDCUSTOMER_INVALID.postcode)
    //         element.click2(login.addCustomerButton);
    //         element.handlingAlert()
    //     });

    //     it('Negative test case - Ensure you must fill in the firstname blank form', () => {
    //         element.click(login.addCustomer)
    //         element.fillField(login.lastName, auth.CUST_EMPTY_FIRSTNAME.lastname)
    //         element.fillField(login.postCode, auth.CUST_EMPTY_FIRSTNAME.postcode)
    //         element.click2(login.addCustomerButton);
    //         element.handlingAlert()
    //     });

    //     it('Negative test case - Ensure you must fill in the lastname blank form', () => {
    //         element.click(login.addCustomer)
    //         element.fillField(login.firstName, auth.CUST_EMPTY_LASTNAME.firstname)
    //         element.fillField(login.postCode, auth.CUST_EMPTY_LASTNAME.postcode)
    //         element.click2(login.addCustomerButton);
    //         element.handlingAlert()
    //     });

    //     it('Negative test case - Ensure you must fill in the firstname blank form', () => {
    //         element.click(login.addCustomer)
    //         element.fillField(login.firstName, auth.CUST_EMPTY_POSTCODE.firstname)
    //         element.fillField(login.lastName, auth.CUST_EMPTY_POSTCODE.lastname)
    //         element.click2(login.addCustomerButton);
    //         element.handlingAlert()
    //     });

    //     it('Negative testcase - Ensure you have to fill out the form in add customer', () => {
    //         element.click(login.addCustomer)
    //         element.click2(login.addCustomerButton);
    //         element.handlingAlert()
    //     });
    // })

});