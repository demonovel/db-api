"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetch = void 0;
const tslib_1 = require("tslib");
const fetch_1 = tslib_1.__importDefault(require("./fetch"));
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
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
        timeout: opts.timeout | 0,
        signal,
    };
    if (!opts.timeout || opts.timeout <= 0) {
        delete opts.timeout;
    }
    const fn = () => {
        opts.signal = signal;
        return (0, fetch_1.default)(url, opts);
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