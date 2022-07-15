import { Given } from '@cucumber/cucumber';
import TabBar from '../../tests/screenobjects/components/TabBar';

Given(/^The Tab bar is shown/, async () => {
        await TabBar.waitForTabBarShown();
});

