import { RequestInit, RequestInfo, Response } from 'node-fetch';
import Bluebird from 'bluebird';
export interface IFetchRecordOptionsBase {
    fetchOptions?: RequestInit;
    server?: string;
}
export declare function fetch(url: RequestInfo, init?: RequestInit & {
    timeout?: number;
}, ...argv: any[]): Bluebird<Response>;
export default fetch;
