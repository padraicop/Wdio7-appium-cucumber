Feature: WebdriverIO and Appium, when interacting with a login form

    Background:
        Given The Tab bar is shown
        And   The LoginScreen is shown

    Scenario: should be able to login successfully
        Given
        When I login as a valid user
        Then I should see alert with Success\nYou are logged in!
        And I should be able to close Alert with OK button
