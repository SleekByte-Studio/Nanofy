import Link from 'next/link';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { resetPassword } from '@/actions/reset-password';

const ResetPasswordPage = ({ searchParams }: any) => {
	return (
		<form
			action={resetPassword}
			className='grid gap-y-6 py-6 w-96'
		>
			<label className='flex flex-col gap-y-1'>
				<span className='font-medium text-gray-800'>Email Address</span>
				<Input
					name='email'
					type='email'
					defaultValue={searchParams['email']}
				/>
			</label>
			<Button type='submit'>Send Mail</Button>
			<div className='flex justify-between font-medium text-violet-600'>
				<Link href='/login'>Login to my account</Link>
			</div>
		</form>
	);
};

export default ResetPasswordPage;
