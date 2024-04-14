'use client';
import { cn } from '@/utils/cn';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type SidebarMenuType = {
	label: string;
	href: string;
	icon: string;
	alt: string;
};

const SidebarMenu = ({ href, label, icon, alt }: SidebarMenuType) => {
	const pathname = usePathname();
	const isCurrentRoute = pathname.includes(href);
	return (
		<div
			className={cn(
				'mx-3 hover:bg-violet-700 transition-colors rounded-lg py-3 px-4',
				isCurrentRoute && 'bg-violet-800'
			)}
		>
			<Link
				className='flex gap-x-3 text-white font-medium text-xl'
				href={href}
			>
				<Image
					className={isCurrentRoute ? 'stroke-gray-50' : ''}
					height={24}
					width={24}
					src={icon}
					alt={alt}
				/>
				<span>{label}</span>
			</Link>
		</div>
	);
};

export default SidebarMenu;
