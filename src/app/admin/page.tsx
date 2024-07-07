'use client';
import { useFormState } from 'react-dom';
import AdminDashboard from './AdminDashboard';
import { signInAction } from '@/actions/admin';
import { Button, TextInput } from '@tremor/react';

const AdminPanelPage = () => {
	return <AdminDashboard />;

	const [state, action] = useFormState(signInAction, 'pending');
	if (state === 'authenticated') {
		return <AdminDashboard />;
	}
	return (
		<form
			action={action}
			className='max-w-sm mx-auto my-52 p-3 space-y-3 border rounded-xl'
		>
			<h1 className='text-xl font-semibold text-violet-500'>Admin - Sign In</h1>
			<span className='text-sm text-gray-500 font-medium'>
				This Page is not meant for Usual Users
			</span>
			<TextInput
				type='text'
				name='username'
				placeholder='Enter Username'
			/>
			<TextInput
				type='password'
				name='password'
				placeholder='Enter Password'
			/>
			<Button className='w-full'>SignIn</Button>
		</form>
	);
};

export default AdminPanelPage;
