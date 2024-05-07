import z from 'zod';
import redis from '@/services/redis';
import prisma from '@/services/prisma';
import { redirect } from 'next/navigation';
import { createHash, randomInt } from 'crypto';
import { NextRequest, userAgentFromString } from 'next/server';

export async function POST(req: NextRequest) {
	const { slug, country } = await req.json();
	const link = await prisma.link.findUnique({
		where: {
			slug
		}
	});

	// Extracting ip address from request header
	const ip = req.ip || req.headers.get('X-Forwarded-For') || '0.0.0.0';

	// Storing hash of IP Address on redis to maintain privacy
	const ipHash = createHash('md5').update(ip).digest('hex');

	const userAgent = userAgentFromString(req.headers.get('user-agent')!);

	const isIpAlreadyPresent = await redis.get(ipHash);

	const os = userAgent.os.name || 'linux';
	const device = userAgent.device.type || 'desktop';
	const browser = userAgent.browser.name || 'unknown';

	// Consider as impression only if the user have not visited the url in the past 24 hrs
	if (!isIpAlreadyPresent && !userAgent.isBot) {
		await prisma.impression.create({
			data: {
				ip,
				os,
				device,
				browser,
				country,

				link: {
					connect: {
						id: link?.id
					}
				}
			}
		});

		const ONEDAY_IN_SECONDS = 24 * 60 * 60;
		await redis.set(ipHash, '1', {
			EX: ONEDAY_IN_SECONDS
		});
	}

	const blogs = await prisma.blog.findMany({
		where: {
			active: true
		}
	});

	// Select a blog from available blog randomly
	const selectedBlog = blogs[randomInt(blogs.length)];

	// Redirecting the user to randomly selected blog with param "redirect_url" as the destination
	const url = new URL(selectedBlog.url);
	if (link) {
		url.searchParams.append('redirect_url', link.destination);
	}

	return new Response(url.href);
}

type DeleteBodyType = {
	slug: string;
};

export async function DELETE(req: NextRequest) {
	const body: DeleteBodyType = await req.json();

	const slug = body.slug;

	await prisma.link.delete({
		where: {
			slug
		},
		include: {
			Impression: true
		}
	});

	return new Response('Success');
}
