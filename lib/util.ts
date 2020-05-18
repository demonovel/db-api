import hashSum from 'hash-sum';

const server01 = `https://api-file-server.epub.now.sh/`;

export function newFileURL(siteID: string, novelID: string, server = server01)
{
	return new URL(`db/file/${siteID}/${hashSum(novelID)}`, server);
}
