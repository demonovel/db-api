"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putRawRecord = exports.getRawRecord = void 0;
const tslib_1 = require("tslib");
const util_1 = require("../util");
const fetch_1 = (0, tslib_1.__importDefault)(require("../fetch"));
function getRawRecord(options) {
    var _a, _b;
    let url = (0, util_1.newFileURL)(options.rootKey, String(options.dataKey), options.server);
    return (0, fetch_1.default)(url.href, {
        ...options.fetchOptions,
        method: 'GET',
        timeout: (_b = (_a = options.fetchOptions) === null || _a === void 0 ? void 0 : _a.timeout) !== null && _b !== void 0 ? _b : 60 * 1000,
    });
}
exports.getRawRecord = getRawRecord;
function putRawRecord(options) {
    var _a, _b, _c, _d, _e;
    let url = (0, util_1.newFileURL)(options.rootKey, String(options.dataKey), options.server);
    return (0, fetch_1.default)(url.href, {
        ...options.fetchOptions,
        method: ((_c = (_b = (_a = options.fetchOptions) === null || _a === void 0 ? void 0 : _a.method) === null || _b === void 0 ? void 0 : _b.toUpperCase) === null || _c === void 0 ? void 0 : _c.call(_b)) === 'PUT' ? 'PUT' : 'POST',
        body: JSON.stringify(options.data),
        timeout: (_e = (_d = options.fetchOptions) === null || _d === void 0 ? void 0 : _d.timeout) !== null && _e !== void 0 ? _e : 60 * 1000,
    });
}
exports.putRawRecord = putRawRecord;
//# sourceMappingURL=raw.js.map