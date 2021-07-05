import { newFileURL, newLinkURL } from '../lib/util';

describe(`describe`, () =>
{
	const siteID = `wenku8` as const;
	const novelID = 2451 as const;

	test(`url`, () =>
	{

		let u1 = newFileURL(siteID, novelID);
		let u2 = newLinkURL(siteID, novelID);

		expect(u1.toString()).toStrictEqual('https://api-file-server.vercel.app/db/file/wenku8/3007a3f8');
		expect(u2.toString()).toStrictEqual('https://api-file-server.vercel.app/file/wenku8/3007a3f8');

		expect(u1).toMatchSnapshot();
		expect(u2).toMatchSnapshot();

	});

})
