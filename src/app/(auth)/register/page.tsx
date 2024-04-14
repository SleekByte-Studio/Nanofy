import Button from '@/components/Button';
import GoogleSignInButton from '@/components/GoogleSignInButton';
import Input from '@/components/Input';
import Link from 'next/link';

const RegisterPage = () => {
	return (
		<div className='grid gap-y-6 py-6 w-96'>
      <label className='flex flex-col gap-y-1'>
				<span className='font-medium text-gray-800'>Full Name</span>
				<Input type='email' />
			</label>
			<label className='flex flex-col gap-y-1'>
				<span className='font-medium text-gray-800'>Email Address</span>
				<Input type='email' />
			</label>
			<label className='flex flex-col gap-y-1'>
				<span className='font-medium text-gray-800'>Password</span>
				<Input type='password' />
			</label>
			<Button>Register</Button>
			<div className='flex justify-between font-medium text-violet-600'>
				<Link href='/login'>Already have an account?</Link>
			</div>
         <GoogleSignInButton />
		</div>
	);
};

export default RegisterPage;
