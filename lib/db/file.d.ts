/**
 * Created by user on 2020/5/18.
 */
import { IFileRecordRow, IFileRecordData } from '../types';
import { RequestInit } from 'node-fetch';
import Bluebird from 'bluebird';
export interface IFileRecordOptions {
    siteID: string;
    novelID: string | number;
    fetchOptions?: RequestInit;
    server?: string;
}
export declare function getFileRecord<T = IFileRecordData>(options: IFileRecordOptions): Bluebird<IFileRecordRow<T>>;
export declare function putFileRecord<T extends IFileRecordData = IFileRecordData>(options: IFileRecordOptions & {
    data: T;
}): Bluebird<IFileRecordRow<T>>;
