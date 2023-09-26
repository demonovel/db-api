export function getProxy(proxy?: string)
{
	const env = typeof process !== 'undefined' ? process.env : {};
	return proxy || env["HTTPS_PROXY"] || env["HTTP_PROXY"] || void 0;
}

export default getProxy
