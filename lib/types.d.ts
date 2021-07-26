/**
 * Created by user on 2020/5/18.
 */
import { RequestInit, Response } from 'node-fetch';
export interface IRawRecordRow<T> {
    error: boolean;
    timestamp: number;
    data: T;
}
export interface IFileRecordRow<T extends IFileRecordData = IFileRecordData> extends IRawRecordRow<T> {
}
export interface IFileRecordData {
    timestamp: number;
    exists: true;
    filename: string;
    href: string;
}
export interface IFetchRecordOptionsBase {
    fetchOptions?: RequestInit;
    server?: string;
    retry?: number;
    tapCheck?(r: Response): any;
    tapError?(e: any): any;
}
export declare enum EnumApiType {
    file = "file",
    raw = "raw"
}
