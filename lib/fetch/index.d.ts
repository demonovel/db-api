import { IFetchRecordOptionsBase } from '../types';
import { RequestInit } from 'node-fetch';
import Bluebird from 'bluebird';
export declare function fetch<T>(url: string, opts?: RequestInit, rawOptions?: IFetchRecordOptionsBase): Bluebird<T>;
export default fetch;
