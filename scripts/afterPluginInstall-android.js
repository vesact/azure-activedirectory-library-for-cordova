#!/usr/bin/env node

// Copyright (c) Microsoft Open Technologies, Inc.  All rights reserved.  Licensed under the Apache License, Version 2.0.  See License.txt in the project root for license information.

/*
    To comply with the Apache 2.0 Licence:
    This file been modified by Actemium Schweiz AG after being forked from its original repo.
*/

module.exports = function (ctx) {
    var shell = require('shelljs');
    var path = require('path');
    var configFile = path.resolve(ctx.opts.projectRoot, 'config.xml');

    // check if minSdkReference is already set
    if (shell.grep('android-minSdkVersion', configFile)) {
        return;
    }
    // add required minSdkVersion to config
    shell.sed('-i',
        '</widget>',
        '    <preference name="android-minSdkVersion" value="14" />\n' + 
        '</widget>',
        configFile);
};
