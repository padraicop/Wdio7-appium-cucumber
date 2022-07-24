import { Given } from '@cucumber/cucumber';
import TabBar from '../../tests/screenobjects/components/TabBar';
import LoginScreen from '../../tests/screenobjects/LoginScreen';

Given(/^The Tab bar is shown/, async () => {
        await TabBar.waitForTabBarShown();
});

Given(/^The LoginScreen is shown/, async () => {
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
});
