import * as route from '@helpers/route';
import * as element from '@helpers/elements'
import * as assert from '@helpers/asserts'
import {ROUTES} from '@tests/const/routes';
import * as auth from '@tests/data/customerLogin.data';
import * as login from '@tests/page/customerLogin.page';

describe ('login', () => {
    beforeEach(() => {
        route.visit(ROUTES.home);
    });

    it('Ensure you can press the "Customer Login" button', () => {
        element.click(login.loginButton);
    });
    
    // it('Ensure the user will direct to dashboard when user input valid passend', () => {
    //     element.fillField(login.usernameField, auth.VALID_LOGIN.username);
    //     element.fillField(login.passwordField, auth.VALID_LOGIN.password);
    //     element.click(login.loginButton);
    //     assert.shouldContainText(login.title, 'Product');
        
    // });

});
