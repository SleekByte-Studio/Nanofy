'use server';
import prisma from '@/services/prisma';
import { getEmail, getUser } from '@/utils/user';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const profileSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	address: z.string(),
	city: z.string(),
	state: z.string(),
	postalCode: z.string().max(10)
});

export async function updateProfileAction(formData: FormData) {
	const { firstName, lastName, address, city, postalCode, state } =
		profileSchema.parse({
			city: formData.get('city'),
			state: formData.get('state'),
			address: formData.get('address'),
			lastName: formData.get('last-name'),
			firstName: formData.get('first-name'),
			postalCode: formData.get('postal-code')
		});

	const user = await getUser();

	const profile = await prisma.profile.upsert({
		create: {
			firstName,
			lastName,
			address,
			city,
			postalCode,
			state,
			User: {
				connect: {
					email: user?.email
				}
			}
		},
		where: {
			userId: user?.id
		},
		update: {
			firstName
		}
	});

	revalidatePath('/profile');
}
