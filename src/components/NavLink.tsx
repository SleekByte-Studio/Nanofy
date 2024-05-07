'use client';

import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/utils/cn';

type NavLinkProps = {
	href: string;
};

const NavLink = ({ children, href }: PropsWithChildren<NavLinkProps>) => {
	const pathname = usePathname();
	return (
		<Link href={href}>
			<li
				className={cn(
					'hover:text-violet-600',
					pathname === href && 'text-violet-600'
				)}
			>
				{children}
			</li>
		</Link>
	);
};

export default NavLink;
