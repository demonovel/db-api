import { IFileRecordData, IFileRecordRow, IRawRecordRow, IFetchRecordOptionsBase, EnumApiType } from '../types';
import { newFileURL } from '../util';
import fetch from '../fetch';
import { RequestInit } from 'node-fetch';
import Bluebird from 'bluebird';

export interface IRawRecordOptions extends IFetchRecordOptionsBase
{
	rootKey: string;
	dataKey: string | number;
}

export function getRawRecord<T>(options: IRawRecordOptions, type: EnumApiType = EnumApiType.raw)
{
	let url = newFileURL(options.rootKey, String(options.dataKey), options.server, type);

	return fetch<IRawRecordRow<T>>(url.href, {
		...options.fetchOptions,
		method: 'GET',
		timeout: options.fetchOptions?.timeout || 60 * 1000,
	})
}

export function putRawRecord<T extends any = unknown>(options: IRawRecordOptions & {
	data: T
}, type: EnumApiType = EnumApiType.raw)
{
	let url = newFileURL(options.rootKey, String(options.dataKey), options.server, type);

	return fetch<IRawRecordRow<T>>(url.href, {
		...options.fetchOptions,
		method: options.fetchOptions?.method?.toUpperCase?.() === 'PUT' ? 'PUT' : 'POST',
		body: JSON.stringify(options.data),
		timeout: options.fetchOptions?.timeout || 60 * 1000,
	})
}
