'use client';
import Image from 'next/image';
import { Button } from '@tremor/react';
import { signOut } from 'next-auth/react';

const LogoutActionButton = () => {
	return (
		<Button onClick={() => signOut()}>
			<div className='flex gap-x-3'>
				<span className='font-semibold'>Logout</span>
				<Image
					className='rounded-full'
					src={'/icons/logout.svg'}
					height={18}
					width={18}
					alt='logout icon'
				/>
			</div>
		</Button>
	);
};

export default LogoutActionButton;
