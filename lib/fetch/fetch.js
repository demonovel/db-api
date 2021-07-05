"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchCore = void 0;
const tslib_1 = require("tslib");
const cross_fetch_1 = (0, tslib_1.__importDefault)(require("cross-fetch"));
const getProxy_1 = (0, tslib_1.__importDefault)(require("../getProxy"));
const http_proxy_agent_1 = (0, tslib_1.__importDefault)(require("http-proxy-agent"));
const bluebird_1 = (0, tslib_1.__importDefault)(require("bluebird"));
const is_error_code_1 = (0, tslib_1.__importDefault)(require("is-error-code"));
const abort_controller_timer_1 = (0, tslib_1.__importDefault)(require("abort-controller-timer"));
function fetchCore(...argv) {
    let proxy = (0, getProxy_1.default)();
    // @ts-ignore
    let options = argv[1] || {};
    if (proxy) {
        // @ts-ignore
        options.agent = (0, http_proxy_agent_1.default)(proxy);
    }
    let cb = () => { };
    if (options.timeout > 0 && !options.signal) {
        if (options.timeout |= 0) {
            const controller = new abort_controller_timer_1.default();
            options.signal = controller.signal;
            cb = () => controller.clear();
        }
        else {
            delete options.timeout;
        }
    }
    options.redirect = 'follow';
    // @ts-ignore
    argv[1] = options;
    // @ts-ignore
    return bluebird_1.default.resolve((0, cross_fetch_1.default)(...argv))
        .tap(v => {
        if ((0, is_error_code_1.default)(v.status)) {
            return Promise.reject(v);
        }
    })
        .finally(cb);
}
exports.fetchCore = fetchCore;
exports.default = fetchCore;
//# sourceMappingURL=fetch.js.map