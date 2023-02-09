import * as route from '@helpers/route';
import * as element from '@helpers/elements';
import * as asserts from '@helpers/asserts';
import {
    ROUTES
} from '@tests/const/routes';
import * as auth from '@tests/data/customerLogin.data';
import * as customerLogin from '@tests/page/customerLogin.page';

describe('Customer Login', () => {
    // create a test case to login as a customer
    beforeEach(() => {
        // navigate to the customer login page
        route.visit(ROUTES.home);
    });

    it('Verify success login as a registered customer with selected currency Dollar', () => {
        element.click(customerLogin.pageLogin);
        asserts.urlShouldBe(ROUTES.customer);
        element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
        element.click(customerLogin.loginButton);
        asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
        asserts.urlShouldBe(ROUTES.account);
        element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
        asserts.visible(customerLogin.accountNumber);
        asserts.shouldContainText(customerLogin.accountNumber, 1004);
        asserts.visible(customerLogin.selectedCurrency);
        asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
        asserts.visible(customerLogin.logoutButton);
        asserts.visible(customerLogin.transactionsButton);
        asserts.visible(customerLogin.depositButton);
        asserts.visible(customerLogin.withdrawlButton);
    });

    it('Verify success login as a registered customer with selected currency Pound', () => {
        element.click(customerLogin.pageLogin);
        asserts.urlShouldBe(ROUTES.customer);
        element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
        element.click(customerLogin.loginButton);
        asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
        asserts.urlShouldBe(ROUTES.account);
        element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
        asserts.visible(customerLogin.accountNumber);
        asserts.shouldContainText(customerLogin.accountNumber, 1005);
        asserts.visible(customerLogin.selectedCurrency);
        asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
        asserts.visible(customerLogin.logoutButton);
        asserts.visible(customerLogin.transactionsButton);
        asserts.visible(customerLogin.depositButton);
        asserts.visible(customerLogin.withdrawlButton);
    });

    it('Verify success login as a registered customer with selected currency rupee', () => {
        element.click(customerLogin.pageLogin);
        asserts.urlShouldBe(ROUTES.customer);
        element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
        element.click(customerLogin.loginButton);
        asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
        asserts.urlShouldBe(ROUTES.account);
        element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
        asserts.visible(customerLogin.accountNumber);
        asserts.shouldContainText(customerLogin.accountNumber, 1006);
        asserts.visible(customerLogin.selectedCurrency);
        asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
        asserts.visible(customerLogin.logoutButton);
        asserts.visible(customerLogin.transactionsButton);
        asserts.visible(customerLogin.depositButton);
        asserts.visible(customerLogin.withdrawlButton);
    });

    afterEach(() => {
        element.click(customerLogin.logoutButton);
    });

});

describe('Customer Deposit', () => {
    // create a test case to login as a customer
    beforeEach(() => {
        // navigate to the customer login page
        route.visit(ROUTES.home);
        // login as a customer
        element.click(customerLogin.pageLogin);
        asserts.urlShouldBe(ROUTES.customer);
        element.select(customerLogin.usernameChoice, auth.CUSTOMER.name);
        element.click(customerLogin.loginButton);
        asserts.shouldContainText(customerLogin.customerName, auth.CUSTOMER.name);
        asserts.urlShouldBe(ROUTES.account);
        asserts.visible(customerLogin.logoutButton);
        asserts.visible(customerLogin.transactionsButton);
        asserts.visible(customerLogin.depositButton);
        asserts.visible(customerLogin.withdrawlButton);
    });

    describe('Positive Cases', () => {
        it('Verify success deposit with currency dollar as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1004);
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, auth.CUSTOMER.amount);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
        });

        it('Verify success deposit with currency pound as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1005);
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, auth.CUSTOMER.amount);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
        });

        it('Verify success deposit with currency rupee as a registered customer ', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1006);
            element.click(customerLogin.depositButton);
            element.fillField(customerLogin.amountInput, auth.CUSTOMER.amount);
            element.click(customerLogin.depositButton2);
            asserts.shouldContainText(customerLogin.depositMessage, auth.CUSTOMER.depositMessage);
            asserts.shouldContainText(customerLogin.depositAmount, auth.CUSTOMER.amount);
        });

        // afterEach(() => {
        //     element.click(customerLogin.logoutButton);
        // });

    });

    describe('Negative Cases', () => {
        it('Verify error message when depositing with empty amount on Dollar Currency', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.dollar);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1004);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Dollar');
            element.click(customerLogin.depositButton);
            element.click(customerLogin.depositButton2);
            cy.wait(500)
            // check validate message is displayed when amount is empty
            // asserts.shouldContainText('[ng-model="amount"]:invalid', auth.CUSTOMER.emptyAmountMessage);
            cy.get('[ng-model="amount"]:invalid').should("have.length", 1).then(($input) => {
                expect($input[0].validationMessage).to.eq(auth.CUSTOMER.emptyAmountMessage);
            });
        });

        it('Verify error message when depositing with empty amount on Pound Currency', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.pound);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1005);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Pound');
            element.click(customerLogin.depositButton);
            element.click(customerLogin.depositButton2);
            cy.wait(500)
            // check validate message is displayed when amount is empty
            // asserts.shouldContainText('[ng-model="amount"]:invalid', auth.CUSTOMER.emptyAmountMessage);
            cy.get('[ng-model="amount"]:invalid').should("have.length", 1).then(($input) => {
                expect($input[0].validationMessage).to.eq(auth.CUSTOMER.emptyAmountMessage);
            });
        });

        it('Verify error message when depositing with empty amount on Rupee Currency', () => {
            element.select(customerLogin.currencyChoice, auth.CUSTOMER.rupee);
            asserts.visible(customerLogin.selectedCurrency);
            asserts.visible(customerLogin.accountNumber);
            asserts.shouldContainText(customerLogin.accountNumber, 1006);
            asserts.shouldContainText(customerLogin.selectedCurrency, 'Rupee');
            element.click(customerLogin.depositButton);
            element.click(customerLogin.depositButton2);
            // check validate message is displayed when amount is empty
            // asserts.shouldContainText('[ng-model="amount"]:invalid', auth.CUSTOMER.emptyAmountMessage);
            cy.get('[ng-model="amount"]:invalid').should("have.length", 1).then(($input) => {
                expect($input[0].validationMessage).to.eq(auth.CUSTOMER.emptyAmountMessage);
            });
        });
    });


});