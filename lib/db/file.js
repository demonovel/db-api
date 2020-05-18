"use strict";
/**
 * Created by user on 2020/5/18.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putFileRecord = exports.getFileRecord = void 0;
const util_1 = require("../util");
const fetch_1 = __importDefault(require("../fetch"));
function getFileRecord(options) {
    var _a, _b;
    let url = util_1.newFileURL(options.siteID, String(options.novelID), options.server);
    return fetch_1.default(url.href, {
        ...options.fetchOptions,
        method: 'GET',
        timeout: (_b = (_a = options.fetchOptions) === null || _a === void 0 ? void 0 : _a.timeout) !== null && _b !== void 0 ? _b : 60 * 1000,
    });
}
exports.getFileRecord = getFileRecord;
function putFileRecord(options) {
    var _a, _b;
    let url = util_1.newFileURL(options.siteID, String(options.novelID), options.server);
    return fetch_1.default(url.href, {
        ...options.fetchOptions,
        body: JSON.stringify(options.data),
        timeout: (_b = (_a = options.fetchOptions) === null || _a === void 0 ? void 0 : _a.timeout) !== null && _b !== void 0 ? _b : 60 * 1000,
    });
}
exports.putFileRecord = putFileRecord;
//# sourceMappingURL=file.js.map