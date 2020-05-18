import { IFileRecordRow } from '../types';
import { RequestInit } from 'node-fetch';
import { newFileURL } from '../util';
import _fetch from './fetch';
import Bluebird from 'bluebird';

export function fetch<T>(url: string, opts: RequestInit = {}): Bluebird<T>
{
	return _fetch(url, {
		method: 'POST',
		...opts,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			...opts.headers,
		},
	})
		.then((response) => response.json())
}

export default fetch
