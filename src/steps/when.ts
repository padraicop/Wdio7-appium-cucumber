import { When } from '@cucumber/cucumber';
import LoginScreen from '../../tests/screenobjects/LoginScreen';

When(/^I login as a valid user/, async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' });
});
