"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newLinkURL = exports.newFileURL = void 0;
const hash_sum_1 = __importDefault(require("hash-sum"));
const server01 = `https://api-file-server.epub.now.sh/`;
function newFileURL(rootKey, dataKey, server = server01) {
    return new URL(`db/file/${rootKey}/${hash_sum_1.default(dataKey)}`, server);
}
exports.newFileURL = newFileURL;
function newLinkURL(rootKey, dataKey, server = server01) {
    return new URL(`file/${rootKey}/${hash_sum_1.default(dataKey)}`, server);
}
exports.newLinkURL = newLinkURL;
//# sourceMappingURL=util.js.map