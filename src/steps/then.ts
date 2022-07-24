import { Then } from '@cucumber/cucumber';
import WebViewScreen from '../../tests/screenobjects/WebviewScreen';
import LoginScreen from '../../tests/screenobjects/LoginScreen';
import FormsScreen from '../../tests/screenobjects/FormsScreen';
import { openDeepLinkUrl } from '../../tests/helpers/Utils';
import SwipeScreen from '../../tests/screenobjects/SwipeScreen';
import HomeScreen from '../../tests/screenobjects/HomeScreen';
import DragScreen from '../../tests/screenobjects/DragScreen';
import NativeAlert from '../../tests/screenobjects/components/NativeAlert';

Then(/^I should be able to open the webview/, async () => {
        await openDeepLinkUrl('webview');
        await WebViewScreen.waitForWebsiteLoaded();
});

Then(/^I should be able to open the login form screen/, async () => {
        await openDeepLinkUrl('login');
        await LoginScreen.waitForIsShown(true);
});

Then(/^I should be able to open the forms screen/, async () => {
        await openDeepLinkUrl('forms');
        await FormsScreen.waitForIsShown(true);
});

Then(/^I should be able to open the swipe screen/, async () => {
        await openDeepLinkUrl('swipe');
        await SwipeScreen.waitForIsShown(true);
});

Then(/^I should be able to open the drag and drop screen/, async () => {
        await openDeepLinkUrl('drag');
        await DragScreen.waitForIsShown(true);
});

Then(/^I should be able to open the home screen/, async () => {
        await openDeepLinkUrl('home');
        await HomeScreen.waitForIsShown(true);
});

Then(/^I should see alert with (.*)$/, async (message) => {
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        const output = await NativeAlert.text();
        const updatedOutput = output.replace('\n', '\\n');
        await expect(updatedOutput).toEqual(message);
});

Then(/^I should be able to close Alert with OK button/, async () => {
        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
});
