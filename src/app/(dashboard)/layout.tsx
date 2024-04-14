import { PropsWithChildren } from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

const DashboardLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='flex h-screen'>
			<Sidebar />
			<main className='overflow-y-scroll flex-1'>{children}</main>
		</div>
	);
};

export default DashboardLayout;
