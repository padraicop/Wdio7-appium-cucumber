import path from 'path';
import { cucumberOpts } from "./cucumberOpts.conf.ts";
import {config} from './wdio.ios.app.conf';

config.cucumberOpts = cucumberOpts;

config.specs =
    [
        './src/features/**/*.feature',
    ];

config.framework = 'cucumber';

exports.config = config;

