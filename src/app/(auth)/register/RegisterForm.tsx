'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import Input from '@/components/Input';
import { Callout } from '@tremor/react';
import { useFormState } from 'react-dom';
import { signIn } from 'next-auth/react';
import Button from '@/components/Button';
import { register } from '@/actions/register';
import GoogleSignInButton from '@/components/GoogleSignInButton';

const RegisterForm = () => {
	const [state, action] = useFormState(register, {
		error: null,
		credentials: null,
		status: 'pending'
	});

	useEffect(() => {
		if (state.status === 'success') {
			signIn('credentials', {
				email: state.credentials?.email!,
				password: state.credentials?.password!
			});
		}
	}, [state]);
	return (
		<form
			action={action}
			className='grid gap-y-6 py-6 w-96'
		>
			{state.error && <Callout title='Validation Error'>{state.error}</Callout>}
			<label className='flex flex-col gap-y-1'>
				<span className='font-medium text-gray-800'>Full Name</span>
				<Input
					name='name'
					type='text'
				/>
			</label>
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
			<Button type='submit'>Register</Button>
			<div className='flex justify-between font-medium text-violet-600'>
				<Link href='/login'>Already have an account?</Link>
			</div>
			<GoogleSignInButton />
		</form>
	);
};

export default RegisterForm;
