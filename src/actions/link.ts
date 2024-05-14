'use server';

import { z } from 'zod';
import prisma from '@/services/prisma';
import { getEmail } from '@/utils/user';
import { revalidatePath } from 'next/cache';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

const linkSchema = z.object({
	name: z.string().max(20, "Name can't have more than 20 characters"),
	slug: z.string().max(12, "Slug can't have more than 10 characters"),
	destination: z.string().url('Enter a valid URL')
});

export type CreateNewLinkPayloadType = {
	status: string;
	payload: string;
};

export async function createNewLinkAction(
	_prevValue: CreateNewLinkPayloadType,
	formData: FormData
) {
	try {
		const { name, slug, destination } = linkSchema.parse({
			name: formData.get('name'),
			slug: formData.get('slug'),
			destination: formData.get('destination')
		});

		const email = await getEmail()

		const link = await prisma.link.create({
			data: {
				name,
				destination,
				slug,
				User: {
					connect: {
						email
					}
				}
			}
		});

		revalidatePath('/links');

		return {
			status: 'success',
			payload: `${process.env.NEXT_PUBLIC_URL_PREFIX}/${link.slug}`
		};
	} catch (err: any) {
		if (err instanceof PrismaClientKnownRequestError && err.code === 'P2002') {
		}
		return {
			status: 'failed',
			payload: String(err.errors[0].message)
		};
	}
}
