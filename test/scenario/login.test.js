import * as route from '@helpers/route';
import * as element from '@helpers/elements'
import * as assert from '@helpers/asserts'
import {ROUTES} from '@tests/const/routes';
import * as auth from '@tests/data/login.data';
import * as login from '@tests/page/login.page';

describe ('login', () => {
    beforeEach(() => {
        route.visit(ROUTES.login);
    });

    it.only('Ensure the error message is displayed when user input invalid password', () => {
        element.fillField(login.usernameField, auth.INVALID_LOGIN.username);
        element.fillField(login.passwordField, auth.INVALID_LOGIN.password);
        element.click(login.loginButton);
        assert.shouldContainText(login.errorAlert, 'Epic sadface: Username and password do not match any user in this service');
    });
    
    it('Ensure the user will direct to dashboard when user input valid passend', () => {
        element.fillField(login.usernameField, auth.VALID_LOGIN.username);
        element.fillField(login.passwordField, auth.VALID_LOGIN.password);
        element.click(login.loginButton);
        assert.shouldContainText(login.title, 'Product');
        
    });

});
