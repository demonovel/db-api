/**
 * Created by user on 2020/5/18.
 */

import { IFileRecordRow, IFileRecordData } from '../types';
import { RequestInit } from 'node-fetch';
import { newFileURL } from '../util';
import fetch from '../fetch';
import Bluebird from 'bluebird';
import { IFetchRecordOptionsBase } from '../fetch/fetch';
import { getRawRecord, putRawRecord } from './raw';

export interface IFileRecordOptions extends IFetchRecordOptionsBase
{
	siteID: string;
	novelID: string | number;
}

export function getFileRecord<T extends IFileRecordData = IFileRecordData>(options: IFileRecordOptions): Bluebird<IFileRecordRow<T>>
{
	return getRawRecord<T>({
		...options,
		rootKey: options.siteID,
		dataKey: options.novelID,
	})
}

export function putFileRecord<T extends IFileRecordData = IFileRecordData>(options: IFileRecordOptions & {
	data: T
}): Bluebird<IFileRecordRow<T>>
{
	return putRawRecord<T>({
		...options,
		rootKey: options.siteID,
		dataKey: options.novelID,
	})
}

