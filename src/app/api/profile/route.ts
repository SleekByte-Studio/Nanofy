import prisma from '@/services/prisma';
import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, params: any) {
	await prisma.link.deleteMany({
		where: {
			slug: 'google'
		}
	});
	return new Response();
}
