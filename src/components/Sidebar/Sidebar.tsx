import Image from 'next/image';
import SidebarMenus from '@/data/sidebar_menus';
import { SidebarMenu } from '@/components/Sidebar';
import Button from '../Button';

const Sidebar = () => {
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
			<Button className='text-violet-600 flex justify-center gap-3 items-center bg-white mx-3'>
				Create New Link
				<Image
					src={'/dashboard/link.svg'}
					height={18}
					width={18}
					alt='plus'
				/>
			</Button>

			{/* Profile Section */}

			<div className='bg-white flex rounded-lg p-3 m-3'>
				<div>
					<div className='overflow-hidden rounded-full'>
						<Image
							src={''}
							height={32}
							width={32}
							alt='Profile Picture'
						/>
					</div>
				</div>
				<div>
					<span className='text-sm'>ramakrishnan@gmail.com</span>
				</div>
			</div>
		</aside>
	);
};

export default Sidebar;
