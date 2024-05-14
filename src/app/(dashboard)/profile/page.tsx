import Image from 'next/image';
import Card from '@/components/Card';
import PageHeader from '@/components/PageHeader';
import PageContainer from '@/components/PageContainer';
import { Button, Divider, TextInput } from '@tremor/react';
import { updateProfileAction } from '@/actions/profile';
import { getUser } from '@/utils/user';
import Link from 'next/link';
import LogoutActionButton from './LogoutActionButton';

const ProfilePage = async () => {
	const user = await getUser();
	return (
		<PageContainer>
			<PageHeader
				heading='Profile'
				subheading='Shorten your urls to earn upto 20$'
			/>

			<Card>
				<div className='max-w-3xl mx-auto p-3 my-3 space-y-6'>
					<h2 className='text-2xl text-violet-950 font-semibold'>
						User Profile
					</h2>
					<div className='flex gap-x-6 items-center'>
						<Image
							className='rounded-full'
							src={user?.image || '/images/default-avatar.jpg'}
							height={80}
							width={80}
							alt='Profile Picture'
						/>
						<div className='flex-1'>
							<span className='block text-xl font-medium'>{user?.name}</span>
							<span className='block text-violet-600'>{user?.email}</span>
						</div>
						<div className='flex flex-col gap-y-3'>
							<LogoutActionButton />
							<Link href={'/reset-password'}>
								<Button className='font-semibold'>Reset Password</Button>
							</Link>
						</div>
					</div>
				</div>
			</Card>

			<Card>
				<div className='max-w-3xl mx-auto p-3 my-3 space-y-6'>
					<h2 className='text-2xl text-violet-950 font-semibold'>
						Update Profile
					</h2>
					<form action={updateProfileAction}>
						<div className='grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6'>
							<div className='col-span-full sm:col-span-3'>
								<label
									htmlFor='first-name'
									className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'
								>
									First name
									<span className='text-red-500'>*</span>
								</label>
								<TextInput
									type='text'
									id='first-name'
									name='first-name'
									autoComplete='given-name'
									placeholder='First name'
									className='mt-2'
									required
								/>
							</div>
							<div className='col-span-full sm:col-span-3'>
								<label
									htmlFor='last-name'
									className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'
								>
									Last name
									<span className='text-red-500'>*</span>
								</label>
								<TextInput
									type='text'
									id='last-name'
									name='last-name'
									autoComplete='family-name'
									placeholder='Last name'
									className='mt-2'
									required
								/>
							</div>
							<div className='col-span-full'>
								<label
									htmlFor='address'
									className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'
								>
									Address
								</label>
								<TextInput
									type='text'
									id='address'
									name='address'
									autoComplete='street-address'
									placeholder='Address'
									className='mt-2'
								/>
							</div>
							<div className='col-span-full sm:col-span-2'>
								<label
									htmlFor='city'
									className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'
								>
									City
								</label>
								<TextInput
									type='text'
									id='city'
									name='city'
									autoComplete='address-level2'
									placeholder='City'
									className='mt-2'
								/>
							</div>
							<div className='col-span-full sm:col-span-2'>
								<label
									htmlFor='state'
									className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'
								>
									State
								</label>
								<TextInput
									type='text'
									id='state'
									name='state'
									autoComplete='address-level1'
									placeholder='State'
									className='mt-2'
								/>
							</div>
							<div className='col-span-full sm:col-span-2'>
								<label
									htmlFor='postal-code'
									className='text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong'
								>
									Postal code
								</label>
								<TextInput
									id='postal-code'
									name='postal-code'
									autoComplete='postal-code'
									placeholder='Postal code'
									className='mt-2'
								/>
							</div>
						</div>
						<Divider />
						<div className='flex items-center justify-end space-x-4'>
							<Button type='submit'>Update</Button>
						</div>
					</form>
				</div>
			</Card>
		</PageContainer>
	);
};

export default ProfilePage;
