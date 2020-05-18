"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProxy = void 0;
function getProxy(proxy) {
    const env = typeof process !== 'undefined' ? process.env : {};
    return proxy || env.HTTPS_PROXY || env.HTTP_PROXY || void 0;
}
exports.getProxy = getProxy;
exports.default = getProxy;
//# sourceMappingURL=getProxy.js.map