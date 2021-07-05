"use strict";
/**
 * Created by user on 2020/5/18.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.putFileRecord = exports.getFileRecord = void 0;
const raw_1 = require("./raw");
function getFileRecord(options) {
    return (0, raw_1.getRawRecord)({
        ...options,
        rootKey: options.siteID,
        dataKey: options.novelID,
    });
}
exports.getFileRecord = getFileRecord;
function putFileRecord(options) {
    return (0, raw_1.putRawRecord)({
        ...options,
        rootKey: options.siteID,
        dataKey: options.novelID,
    });
}
exports.putFileRecord = putFileRecord;
//# sourceMappingURL=file.js.map