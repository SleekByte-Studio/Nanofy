export function base64ToData(code: string) {
	return JSON.parse(Buffer.from(code, 'base64').toString('ascii'));
}

export function dataToBase64(data: any) {
	return Buffer.from(JSON.stringify(data)).toString('base64');
}
