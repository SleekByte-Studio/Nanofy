'use server';

import { z } from 'zod';
import { hash } from 'bcrypt';
import prisma from '@/services/prisma';

const registerFormSchema = z.object({
	name: z.string().min(3, 'Name must have atleast 3 Characters'),
	email: z.string().email(),
	password: z.string().min(6, 'Password must have atleast 6 Characters')
});

type RegisterStateType = {
	status: 'pending' | 'success' | 'error';
	error: string | null;
	credentials: {
		email: string;
		password: string;
	} | null;
};

export async function register(
	_state: RegisterStateType,
	formData: FormData
): Promise<RegisterStateType> {
	const { data, error } = registerFormSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		password: formData.get('password')
	});

	if (data) {
		const hashedPassword = await hash(data.password!, 8);

		try {
			await prisma.user.findUniqueOrThrow({
				where: {
					email: data.email
				}
			});

			return {
				error: 'User Already Exist',
				credentials: null,
				status: 'error'
			};
		} catch {
			await prisma.user.create({
				data: {
					name: data.name,
					email: data.email,
					password: hashedPassword,
					authenticationMode: 'EMAIL'
				}
			});

			return {
				status: 'success',
				error: null,
				credentials: {
					email: data.email,
					password: data.password
				}
			};
		}
	}

	return {
		error: error.errors[0].message,
		credentials: null,
		status: 'error'
	};
}
