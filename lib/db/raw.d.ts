import { IRawRecordRow, IFetchRecordOptionsBase, EnumApiType } from '../types';
import Bluebird from 'bluebird';
export interface IRawRecordOptions extends IFetchRecordOptionsBase {
    rootKey: string;
    dataKey: string | number;
}
export declare function getRawRecord<T>(options: IRawRecordOptions, type?: EnumApiType): Bluebird<IRawRecordRow<T>>;
export declare function putRawRecord<T extends any = unknown>(options: IRawRecordOptions & {
    data: T;
}, type?: EnumApiType): Bluebird<IRawRecordRow<T>>;
