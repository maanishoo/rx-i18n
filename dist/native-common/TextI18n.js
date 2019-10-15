"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var RX = require("reactxp");
var react_native_1 = require("react-native");
var react_native_i18n_1 = require("react-native-i18n");
var TextI18n = /** @class */ (function (_super) {
    __extends(TextI18n, _super);
    function TextI18n() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextI18n.prototype.render = function () {
        react_native_i18n_1.default.fallbacks = true;
        react_native_i18n_1.default.translations = this.props.translations;
        return React.createElement(react_native_1.Text, null, react_native_i18n_1.default.t(this.props.toTranslate, this.props.customization));
    };
    return TextI18n;
}(RX.Component));
exports.default = TextI18n;
