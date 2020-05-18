/**
 * Created by user on 2020/5/18.
 */
import { IFileRecordRow } from '../types';
import { RequestInit } from 'node-fetch';
import Bluebird from 'bluebird';
export interface IFileRecordOptions {
    siteID: string;
    novelID: string | number;
    fetchOptions?: RequestInit;
    server?: string;
}
export declare function getFileRecord(options: IFileRecordOptions): Bluebird<IFileRecordRow>;
export declare function putFileRecord(options: IFileRecordOptions & {
    data: IFileRecordRow;
}): Bluebird<IFileRecordRow>;
