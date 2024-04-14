
import { signIn } from 'next-auth/react';

export default async function login(formData: FormData) {
	signIn(
		'email',
		{},
		{
			email: String(formData.get('email')),
			password: String(formData.get('password'))
		}
	);
}
