import Image from 'next/image';
import { getServerSession } from 'next-auth';
import { SidebarMenu } from '@/components/Sidebar';
import CreateNewLinkForm from './CreateNewLinkForm';
import SidebarMenus from '@/constants/sidebar-menus';
import CreateNewLinkButton from './CreateNewLinkButton';
import { getUser } from '@/utils/user';

const Sidebar = async () => {
	const user = await getUser()
	return (
		<aside className='h-screen w-[18rem] bg-violet-600 flex flex-col'>
			{/* Header Section */}
			<div className='flex select-none p-6 items-center gap-x-1'>
				<Image
					className='bg-white rounded-xl'
					height={52}
					width={52}
					src={'/logo.png'}
					alt='nanofy logo'
				/>
			</div>

			{/* Navigation Section */}
			<div className='flex-1'>
				<nav className='grid gap-y-3'>
					{SidebarMenus.map((menu) => (
						<SidebarMenu
							key={menu.label}
							{...menu}
						/>
					))}
				</nav>
			</div>

			{/* Create new line button */}
			<CreateNewLinkButton>
				<CreateNewLinkForm />
			</CreateNewLinkButton>

			{/* Profile Section */}

			<div className='bg-white flex rounded-lg p-3 m-3 gap-x-3'>
				<div className='flex items-center'>
					<div className='overflow-hidden aspect-square h-8 rounded-full'>
						<Image
							src={user?.image || '/images/default-avatar.jpg'}
							height={32}
							width={32}
							alt='Profile Picture'
						/>
					</div>
				</div>
				<div className=''>
					<span className='block font-semibold'>{user?.name}</span>
					<span className='block text-sm'>{user?.email}</span>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
