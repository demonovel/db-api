"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putFileRecord = exports.getFileRecord = void 0;
const file_1 = require("./lib/db/file");
Object.defineProperty(exports, "getFileRecord", { enumerable: true, get: function () { return file_1.getFileRecord; } });
Object.defineProperty(exports, "putFileRecord", { enumerable: true, get: function () { return file_1.putFileRecord; } });
exports.default = {
    getFileRecord: file_1.getFileRecord,
    putFileRecord: file_1.putFileRecord,
};
//# sourceMappingURL=index.js.map