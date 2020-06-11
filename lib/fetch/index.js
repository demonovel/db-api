"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const fetch_1 = __importDefault(require("./fetch"));
const bluebird_1 = __importDefault(require("bluebird"));
function fetch(url, opts = {}, rawOptions) {
    var _a, _b;
    let signal = opts === null || opts === void 0 ? void 0 : opts.signal;
    opts = {
        method: 'POST',
        ...opts,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...opts.headers,
        },
        signal,
    };
    const fn = () => {
        opts.signal = signal;
        return fetch_1.default(url, opts);
    };
    rawOptions = {
        ...rawOptions,
        tapCheck: (_a = rawOptions === null || rawOptions === void 0 ? void 0 : rawOptions.tapCheck) !== null && _a !== void 0 ? _a : (() => { }),
        tapError: (_b = rawOptions === null || rawOptions === void 0 ? void 0 : rawOptions.tapError) !== null && _b !== void 0 ? _b : (() => { }),
    };
    return _reDo(fn, rawOptions)
        .then((response) => response.json());
}
exports.fetch = fetch;
function _reDo(fn, rawOptions) {
    var _a;
    let retry = ((_a = rawOptions.retry) !== null && _a !== void 0 ? _a : 1) | 0;
    return bluebird_1.default.resolve()
        .then(fn)
        .tapCatch(rawOptions.tapError)
        .tap(rawOptions.tapCheck)
        .catch(e => {
        if (retry-- > 0) {
            return _reDo(fn, {
                ...rawOptions,
                retry,
            });
        }
        return Promise.reject(e);
    });
}
exports.default = fetch;
//# sourceMappingURL=index.js.map