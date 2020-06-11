import { getFileRecord, putFileRecord } from './lib/db/file';
import { getRawRecord, putRawRecord } from './lib/db/raw';
export type { IFileRecordRow } from './lib/types';
export { getFileRecord, putFileRecord, getRawRecord, putRawRecord, };
declare const _default: {
    getFileRecord: typeof getFileRecord;
    putFileRecord: typeof putFileRecord;
    getRawRecord: typeof getRawRecord;
    putRawRecord: typeof putRawRecord;
};
export default _default;
