import { NextRequest, NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

export async function GET(req: NextRequest, params: any) {
	const slug = params.params.slug[0];
	const ip = req.ip || req.headers.get('X-Forwarded-For');

	redirect('https://www.google.com');
}
