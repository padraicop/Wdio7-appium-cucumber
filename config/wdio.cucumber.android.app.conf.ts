import path from 'path';
import { cucumberOpts } from "./cucumberOpts.conf.ts";
import {config} from './wdio.android.app.conf';
const { generate } = require('multiple-cucumber-html-reporter');
const { removeSync } = require('fs-extra');

config.cucumberOpts = cucumberOpts;

config.specs =
    [
        './src/features/**/*.feature',
    ];

config.framework = 'cucumber';

config.reporters = ['cucumberjs-json'];

config.onPrepare = () => {
           // Remove the `.tmp/` folder that holds the json and report files
           removeSync('.tmp/json');
         };

config.onComplete = function(exitCode, config, capabilities, results) {
               generate({
                   jsonDir: '.tmp/json/',
                   reportPath: './reports/html',
                   openReportInBrowser: true
               });
           };

exports.config = config;

