'use server';

import { z } from 'zod';
import prisma from '@/services/prisma';
import { getUser } from '@/utils/user';

const updatePaymentMethodSchema = z.object({
	id: z.string(),
	paymentMethod: z.enum(['PAYPAL', 'GPAY', 'PHONEPAY'])
});

export async function updatePaymentMethod(formData: FormData) {
	const user = await getUser();

	const { id, paymentMethod } = updatePaymentMethodSchema.parse({
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

export async function requestWithdrawl(formData: FormData) {
	const user = await getUser();
	const payoutMethod = await prisma.paymentMethod.findUnique({
		where: {
			id: user?.id
		}
	});

	const { success, data, error } = z.number().safeParse(formData.get('name'));

	if (success) {
		const amount = data!;

		await prisma.payout.create({
			data: {
				amount,
				method: payoutMethod?.method,
				User: {
					connect: {
						id: user?.id
					}
				}
			}
		});

		return {
			status: 'success',
			error: null
		};
	} else {
		return {
			status: 'error',
			error: error.errors[0].message
		};
	}
}
