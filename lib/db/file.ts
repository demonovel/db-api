/**
 * Created by user on 2020/5/18.
 */

import { IFileRecordRow, IFileRecordData } from '../types';
import { RequestInit } from 'node-fetch';
import { newFileURL } from '../util';
import fetch from '../fetch';
import Bluebird from 'bluebird';

export interface IFileRecordOptions
{
	siteID: string;
	novelID: string | number;
	fetchOptions?: RequestInit;
	server?: string;
}

export function getFileRecord<T = IFileRecordData>(options: IFileRecordOptions)
{
	let url = newFileURL(options.siteID, String(options.novelID), options.server);

	return fetch<IFileRecordRow<T>>(url.href, {
		...options.fetchOptions,
		method: 'GET',
		timeout: options.fetchOptions?.timeout ?? 60 * 1000,
	})
}

export function putFileRecord<T extends IFileRecordData = IFileRecordData>(options: IFileRecordOptions & {
	data: T
})
{
	let url = newFileURL(options.siteID, String(options.novelID), options.server);

	return fetch<IFileRecordRow<T>>(url.href, {
		...options.fetchOptions,
		body: JSON.stringify(options.data),
		timeout: options.fetchOptions?.timeout ?? 60 * 1000,
	})
}
