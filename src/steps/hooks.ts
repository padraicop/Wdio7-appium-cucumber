const {After, Before} = require('@cucumber/cucumber');

Before(function () {
    console.log('Before each scenario');
});
