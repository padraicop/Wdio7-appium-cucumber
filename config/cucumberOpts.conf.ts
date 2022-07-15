// If you are using Cucumber you need to specify the location of your step definitions.
export const cucumberOpts: WebdriverIO.CucumberOpts = {
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> module used for processing required features
    requireModule: [],
    // <boolean< Treat ambiguous definitions as errors
    failAmbiguousDefinitions: true,
    // <boolean> invoke formatters without executing steps
    // dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> Enable this config to treat undefined definitions as
    // warnings
    ignoreUndefinedDefinitions: false,
    // <string[]> ("extension:module") require files with the given
    // EXTENSION after requiring MODULE (repeatable)
    names: [],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <string[]> (file/dir) require files before executing features
    require: [
        './src/steps/hooks.ts',
        './src/steps/given.ts',
        './src/steps/then.ts',
        './src/steps/when.ts',
        // Or search a (sub)folder for JS files with a wildcard
        // works since version 1.1 of the wdio-cucumber-framework
        // './src/**/*.js',
    ],
    scenarioLevelReporter: false,
    order: 'defined',
    // <string> specify a custom snippet syntax
    snippetSyntax: undefined,
    // <boolean> fail if there are any undefined or pending steps
    strict: true,
    // <string> (expression) only execute the features or scenarios with
    // tags matching the expression, see
    // https://docs.cucumber.io/tag-expressions/
    tagExpression: 'not @Pending',
    // <boolean> add cucumber tags to feature or scenario name
    tagsInTitle: false,
    // <number> timeout for step definitions
    timeout: 20000,
};
