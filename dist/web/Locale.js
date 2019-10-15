"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var locale = require('browser-locale')();
var I18n = require("i18n-js");
function getCurrentLocale() {
    return locale || I18n.currentLocale();
}
exports.getCurrentLocale = getCurrentLocale;
