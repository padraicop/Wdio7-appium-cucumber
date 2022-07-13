import { Then } from '@cucumber/cucumber';
import TabBar from '../../tests/screenobjects/components/TabBar';
import WebViewScreen from '../../tests/screenobjects/WebviewScreen';
import { openDeepLinkUrl } from '../../tests/helpers/Utils';

Then(/^I should be able to open the webview/, async () => {
        await TabBar.waitForTabBarShown();
        await openDeepLinkUrl('webview');
        await WebViewScreen.waitForWebsiteLoaded();
});
