/**
 * Created by user on 2020/5/18.
 */

export interface IRawRecordRow<T>
{
	error: boolean,
	timestamp: number,
	data: T
}

export interface IFileRecordRow<T extends IFileRecordData = IFileRecordData> extends IRawRecordRow<T>
{

}

export interface IFileRecordData
{
	timestamp: number,
	exists: true,

	filename: string,

	href: string,
}
