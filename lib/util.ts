import hashSum from 'hash-sum';
import { EnumApiType } from './types';

//const server01 = `https://api-file-server.epub.now.sh/`;
const server01 = `https://api-file-server.vercel.app/`;

export function newFileURL(rootKey: string, dataKey: string | number, server = server01, type: EnumApiType = EnumApiType.file)
{
	return new URL(`db/${type ?? null}/${rootKey}/${hashSum(dataKey)}`, server);
}

export function newLinkURL(rootKey: string, dataKey: string | number, server = server01)
{
	return new URL(`file/${rootKey}/${hashSum(dataKey)}`, server);
}
