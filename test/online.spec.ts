import { getFileRecord } from '../lib/db/file';
import { RequestInit } from 'node-fetch';

test(`getFileRecord:error`, async (done) =>
{

	let actual = await getFileRecord({
			siteID: String(Date.now()),
			novelID: Date.now(),
		})
		.catch((r: any) => r.json())
	;

	//expect(actual).toStrictEqual(expected);
	//expect(actual).toBeInstanceOf(Date);
	expect(actual).toMatchSnapshot({
		error: true,
		timestamp: expect.any(Number),
		message: expect.any(String),
	});

	done();

});

test(`getFileRecord`, async (done) =>
{

	let actual = await getFileRecord({
			siteID: `wenku8`,
			novelID: 1695,
		})
	;

	//console.dir(actual)

	//expect(actual).toStrictEqual(expected);
	//expect(actual).toBeInstanceOf(Date);
	expect(actual).toMatchSnapshot({
		error: false,
		timestamp: expect.any(Number),
		data: {
			exists: true,
			filename: expect.any(String),
			href: expect.any(String),
			timestamp: expect.any(Number)
		}
	});

	done();

});

