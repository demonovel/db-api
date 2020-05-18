/**
 * Created by user on 2020/5/18.
 */

import { IFileRecordRow } from '../types';
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

export function getFileRecord(options: IFileRecordOptions)
{
	let url = newFileURL(options.siteID, String(options.novelID), options.server);

	return fetch<IFileRecordRow>(url.href, {
		...options.fetchOptions,
		method: 'GET',
		timeout: options.fetchOptions?.timeout ?? 60 * 1000,
	})
}

export function putFileRecord(options: IFileRecordOptions & {
	data: IFileRecordRow
})
{
	let url = newFileURL(options.siteID, String(options.novelID), options.server);

	return fetch<IFileRecordRow>(url.href, {
		...options.fetchOptions,
		body: JSON.stringify(options.data),
		timeout: options.fetchOptions?.timeout ?? 60 * 1000,
	})
}
