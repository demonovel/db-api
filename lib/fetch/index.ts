import { IFileRecordRow, IFetchRecordOptionsBase } from '../types';
import { RequestInit, Response } from 'node-fetch';
import { newFileURL } from '../util';
import _fetch from './fetch';
import Bluebird from 'bluebird';
import { IRawRecordOptions } from '../db/raw';

export function fetch<T>(url: string, opts: RequestInit = {}, rawOptions?: IFetchRecordOptionsBase): Bluebird<T>
{
	let signal = opts?.signal;

	opts = {
		method: 'POST',
		...opts,
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			...opts.headers,
		},
		signal,
	}

	const fn = () => {
		opts.signal = signal;
		return _fetch(url, opts)
	};

	rawOptions = {
		...rawOptions,
		tapCheck: rawOptions?.tapCheck ?? (() => {}),
		tapError: rawOptions?.tapError ?? (() => {}),
	}

	return _reDo(fn, rawOptions)
		.then((response) => response.json())
}

function _reDo<T extends Response>(fn: () => Bluebird<T>, rawOptions: IFetchRecordOptionsBase): Bluebird<T>
{
	let retry = (rawOptions.retry ?? 1) | 0;

	return Bluebird.resolve()
		.then(fn)
		.tapCatch(rawOptions.tapError)
		.tap(rawOptions.tapCheck)

		.catch(e => {
			if (retry-- > 0)
			{
				return _reDo(fn, {
					...rawOptions,
					retry,
				})
			}
			return Promise.reject(e)
		})
}

export default fetch
