import Button from '@/components/Button';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import Input from '@/components/Input';
import Link from 'next/link';

const ResetPasswordPage = ({ searchParams }: PageProps) => {
	return (
		<div className='grid gap-y-6 py-6 w-96'>
			<label className='flex flex-col gap-y-1'>
				<span className='font-medium text-gray-800'>Email Address</span>
				<Input
					type='email'
					defaultValue={searchParams['email']}
				/>
			</label>
			<Button>Reset Password</Button>
			<div className='flex justify-between font-medium text-violet-600'>
				<Link href='/login'>Login to my account</Link>
			</div>
		</div>
	);
};

export default ResetPasswordPage;
