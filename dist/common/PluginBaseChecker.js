"use strict";
/*
* PluginBaseChecker.ts
*
* Copyright (c) Microsoft Corporation. All rights reserved.
* Licensed under the MIT license.
*
* Type check all the pluginbase exports against the desired interface.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var AndroidPlugin = require("../android/PluginBase");
var iOSPlugin = require("../ios/PluginBase");
var macOSPlugin = require("../macos/PluginBase");
var WebPlugin = require("../web/PluginBase");
var WindowsPlugin = require("../windows/PluginBase");
/* tslint:disable:no-unused-variable */
var _typeCheckerAndroid = AndroidPlugin;
var _typeCheckeriOS = iOSPlugin;
var _typeCheckermacOS = macOSPlugin;
var _typeCheckerWeb = WebPlugin;
var _typeCheckerWindows = WindowsPlugin;
/* tslint:enable:no-unused-variable */
