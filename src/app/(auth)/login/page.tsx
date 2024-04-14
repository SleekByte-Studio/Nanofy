'use client';
import Button from '@/components/Button';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import Input from '@/components/Input';
import Link from 'next/link';

import login from '@/actions/login';
import { FormEventHandler } from 'react';
import { signIn } from 'next-auth/react';

const LoginPage = () => {
	const loginHandler: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		await signIn(
			'email',
			{},
			{
				email: String(formData.get('email')),
				password: String(formData.get('password'))
			}
		);
	};
	return (
		<form
			onSubmit={loginHandler}
			className='grid gap-y-6 py-6 w-96'
		>
			<label className='flex flex-col gap-y-1'>
				<span className='font-medium text-gray-800'>Email Address</span>
				<Input
					name='email'
					type='email'
				/>
			</label>
			<label className='flex flex-col gap-y-1'>
				<span className='font-medium text-gray-800'>Password</span>
				<Input
					name='password'
					type='password'
				/>
			</label>
			<Button type='submit'>Login</Button>
			<div className='flex justify-between font-medium text-violet-600'>
				<Link href='/register'>Create an Account</Link>
				<Link href='/reset-password'>Reset Password</Link>
			</div>
			<GoogleSignInButton />
		</form>
	);
};

export default LoginPage;
