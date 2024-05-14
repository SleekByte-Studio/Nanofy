import Link from 'next/link';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { resetPassword } from '@/actions/reset-password';

const NewPasswordPage = ({ searchParams }: any) => {
	const code = searchParams['code'];
	return (
		<form
			action={resetPassword}
			className='grid gap-y-6 py-6 w-96'
		>
			<label className='flex flex-col gap-y-1'>
				<span className='font-medium text-gray-800'>New Password</span>

				{/* This input is to pass search params to server action */}
				<input
					disabled
					name='code'
					type='text'
					value={code}
					className='hidden'
				/>
				<Input
					name='password'
					type='password'
				/>
			</label>
			<Button type='submit'>Change Password</Button>
			<div className='flex justify-between font-medium text-violet-600'>
				<Link href='/login'>Login to my account</Link>
			</div>
		</form>
	);
};

export default NewPasswordPage;
