import { cookies } from 'next/headers';
import { PropsWithChildren } from 'react';
import { redirect } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';

const DashboardLayout = ({ children }: PropsWithChildren) => {
	const sessionToken = cookies().get("next-auth.session-token")
	if (!sessionToken) {
		redirect('/login')
	} 
	return (
		<div className='flex h-screen'>
			<Sidebar />
			<main className='overflow-y-scroll flex-1'>{children}</main>
		</div>
	);
};

export default DashboardLayout;
