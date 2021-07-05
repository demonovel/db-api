import _fetch from 'cross-fetch';
import getProxy from '../getProxy';
import HttpProxyAgent from 'http-proxy-agent';
import AbortController from 'abort-controller';
import { RequestInit, RequestInfo, Response } from 'node-fetch';
import Bluebird from 'bluebird';
import isErrorCode from 'is-error-code';
import AbortControllerTimer from 'abort-controller-timer';
import { ITSResolvable } from 'ts-type/lib/generic';

export function fetchCore(url: RequestInfo,
	init?: RequestInit & {
		timeout?: number,
	}, ...argv
): Bluebird<Response>
export function fetchCore(...argv): Bluebird<Response>
{
	let proxy = getProxy();
	// @ts-ignore
	let options: RequestInit = argv[1] || {};

	if (proxy)
	{
		// @ts-ignore
		options.agent = HttpProxyAgent(proxy);
	}

	let cb = (): ITSResolvable<void> => {};

	if (options.timeout > 0 && !options.signal)
	{
		if (options.timeout |= 0)
		{
			const controller = new AbortControllerTimer();

			options.signal = controller.signal;

			cb = () => controller.clear();
		}
		else
		{
			delete options.timeout
		}
	}

	options.redirect = 'follow';

	// @ts-ignore
	argv[1] = options;

	// @ts-ignore
	return Bluebird.resolve(_fetch(...argv))
		.tap(v =>
		{
			if (isErrorCode(v.status))
			{
				return Promise.reject(v)
			}
		})
		.finally(cb)
}

export default fetchCore
