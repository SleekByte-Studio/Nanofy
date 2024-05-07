import { SidebarMenuType } from '@/components/Sidebar';

const SidebarMenus: SidebarMenuType[] = [
	{
		label: 'Dashboard',
		href: '/dashboard',
		icon: '/navigation/dashboard.svg',
		alt: 'dashboard icon'
	},
	{
		label: 'Analytics',
		href: '/analytics',
		icon: '/navigation/analytics.svg',
		alt: 'analytics icon'
	},
	{
		label: 'Links',
		href: '/links',
		icon: '/navigation/links.svg',
		alt: 'links icon'
	},
	{
		label: 'Earnings',
		href: '/earnings',
		icon: '/navigation/earnings.svg',
		alt: 'earnings icon'
	},
	{
		label: 'Profile',
		href: '/profile',
		icon: '/navigation/profile.svg',
		alt: 'profile icon'
	}
];

export default SidebarMenus;
