'use server';

import { z } from 'zod';
import prisma from '@/services/prisma';
import { getUser } from '@/utils/user';

const formDataSchema = z.object({
	id: z.string(),
	paymentMethod: z.enum(['PAYPAL', 'GPAY', 'PHONEPAY'])
});

export async function updatePaymentMethod(formData: FormData) {
	const user = await getUser();

	const { id, paymentMethod } = formDataSchema.parse({
		id: formData.get('id'),
		paymentMethod: formData.get('payment-method')
	});

	await prisma.paymentMethod.upsert({
		create: {
			method: paymentMethod,
			details: {
				id
			},
			user: {
				connect: {
					id: user?.id
				}
			}
		},
		update: {
			method: paymentMethod,
			details: {
				id
			}
		},
		where: {
			userId: user?.id
		}
	});
}
