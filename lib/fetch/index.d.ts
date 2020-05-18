import { RequestInit } from 'node-fetch';
import Bluebird from 'bluebird';
export declare function fetch<T>(url: string, opts?: RequestInit): Bluebird<T>;
export default fetch;
