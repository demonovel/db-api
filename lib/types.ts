/**
 * Created by user on 2020/5/18.
 */

export interface IFileRecordRow<T = IFileRecordData>
{
	error: boolean,
	timestamp: number,
	data: T
}

export interface IFileRecordData
{
	timestamp: number,
	exists: true,

	filename: string,

	href: string,
}
