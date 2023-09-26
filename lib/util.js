"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newLinkURL = exports.newFileURL = void 0;
const tslib_1 = require("tslib");
const hash_sum_1 = tslib_1.__importDefault(require("hash-sum"));
const types_1 = require("./types");
//const server01 = `https://api-file-server.epub.now.sh/`;
const server01 = `https://api-file-server.vercel.app/`;
function newFileURL(rootKey, dataKey, server = server01, type = types_1.EnumApiType.file) {
    return new URL(`db/${type !== null && type !== void 0 ? type : null}/${rootKey}/${(0, hash_sum_1.default)(dataKey)}`, server);
}
exports.newFileURL = newFileURL;
function newLinkURL(rootKey, dataKey, server = server01) {
    return new URL(`file/${rootKey}/${(0, hash_sum_1.default)(dataKey)}`, server);
}
exports.newLinkURL = newLinkURL;
//# sourceMappingURL=util.js.map