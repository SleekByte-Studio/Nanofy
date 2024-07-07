'use server';
import { z } from 'zod';

type SignInActionStateType = 'pending' | 'authenticated' | 'error';
const SignInActionSchema = z.object({
	username: z.string(),
	password: z.string()
});

export async function signInAction(
	_state: SignInActionStateType,
	formData: FormData
) {
	const { success, error, data } = SignInActionSchema.safeParse({
		username: formData.get('username'),
		password: formData.get('password')
	});

	if (success) {
		if (
			data.username === process.env.ADMIN_USER &&
			data.password === process.env.ADMIN_PASSWORD
		) {
			return 'authenticated';
		} else {
			console.error('Invalid Credentials');
			return 'error';
		}
	} else {
		console.error(error.errors);
		return 'error';
	}
}
