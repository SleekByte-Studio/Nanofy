'use client';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { MouseEventHandler } from 'react';

const GoogleSignInButton = () => {
	const clickHandler: MouseEventHandler<HTMLButtonElement> = async (event) => {
		await signIn('google', {});
	};
	return (
		<button
			onClick={clickHandler}
			className='flex outline-1 hover:bg-purple-50 transition-colors gap-x-3 justify-center  outline outline-gray-400 rounded-lg px-6 py-3'
		>
			<Image
				src={'/google.png'}
				height={24}
				width={24}
				alt='google icon'
			/>
			<span className='font-medium'>Continue with Google</span>
		</button>
	);
};

export default GoogleSignInButton;
