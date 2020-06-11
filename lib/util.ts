import hashSum from 'hash-sum';

const server01 = `https://api-file-server.epub.now.sh/`;

export function newFileURL(rootKey: string, dataKey: string, server = server01)
{
	return new URL(`db/file/${rootKey}/${hashSum(dataKey)}`, server);
}

export function newLinkURL(rootKey: string, dataKey: string, server = server01)
{
	return new URL(`file/${rootKey}/${hashSum(dataKey)}`, server);
}
