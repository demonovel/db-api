"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const fetch_1 = __importDefault(require("./fetch"));
function fetch(url, opts = {}) {
    return fetch_1.default(url, {
        method: 'POST',
        ...opts,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...opts.headers,
        },
    })
        .then((response) => response.json());
}
exports.fetch = fetch;
exports.default = fetch;
//# sourceMappingURL=index.js.map