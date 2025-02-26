/// <reference types="react" />
import RX = require('reactxp');
import Types = require('./Types');
export declare abstract class TextI18n extends RX.Component<Types.TextI18nProps, {}> {
}
export interface PluginInterface {
    Types: typeof Types;
    default: typeof TextI18n;
}
