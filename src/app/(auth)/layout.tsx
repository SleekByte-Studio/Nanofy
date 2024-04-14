import Image from 'next/image';
import { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='w-screen min-h-screen bg-violet-100 flex items-center justify-center'>
			<div className='shadow-lg bg-white rounded-lg p-8 w-max'>
				
				<div>
					<div className='flex select-none items-center gap-x-1'>
						<Image
							className='rounded-xl'
							height={52}
							width={52}
							src={'/logo.png'}
							alt='nanofy logo'
						/>
						<span className='text-4xl font-semibold text-violet-600'>
							Nanofy
						</span>
					</div>
					<div>
						<span className='text-gray-600 select-none font-medium'>
							Please enter your credentials
						</span>
					</div>
				</div>
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
