"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newFileURL = void 0;
const hash_sum_1 = __importDefault(require("hash-sum"));
const server01 = `https://api-file-server.epub.now.sh/`;
function newFileURL(siteID, novelID, server = server01) {
    return new URL(`db/file/${siteID}/${hash_sum_1.default(novelID)}`, server);
}
exports.newFileURL = newFileURL;
//# sourceMappingURL=util.js.map