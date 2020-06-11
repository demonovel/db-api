/**
 * Created by user on 2020/5/18.
 */
import { IFileRecordRow, IFileRecordData } from '../types';
import Bluebird from 'bluebird';
import { IFetchRecordOptionsBase } from '../fetch/fetch';
export interface IFileRecordOptions extends IFetchRecordOptionsBase {
    siteID: string;
    novelID: string | number;
}
export declare function getFileRecord<T extends IFileRecordData = IFileRecordData>(options: IFileRecordOptions): Bluebird<IFileRecordRow<T>>;
export declare function putFileRecord<T extends IFileRecordData = IFileRecordData>(options: IFileRecordOptions & {
    data: T;
}): Bluebird<IFileRecordRow<T>>;
