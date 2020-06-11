"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putRawRecord = exports.getRawRecord = exports.putFileRecord = exports.getFileRecord = void 0;
const file_1 = require("./lib/db/file");
Object.defineProperty(exports, "getFileRecord", { enumerable: true, get: function () { return file_1.getFileRecord; } });
Object.defineProperty(exports, "putFileRecord", { enumerable: true, get: function () { return file_1.putFileRecord; } });
const raw_1 = require("./lib/db/raw");
Object.defineProperty(exports, "getRawRecord", { enumerable: true, get: function () { return raw_1.getRawRecord; } });
Object.defineProperty(exports, "putRawRecord", { enumerable: true, get: function () { return raw_1.putRawRecord; } });
exports.default = {
    getFileRecord: file_1.getFileRecord,
    putFileRecord: file_1.putFileRecord,
    getRawRecord: raw_1.getRawRecord,
    putRawRecord: raw_1.putRawRecord,
};
//# sourceMappingURL=index.js.map