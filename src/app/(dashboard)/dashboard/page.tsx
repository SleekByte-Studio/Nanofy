import PageHeader from '@/components/PageHeader';
import StatCard from '@/components/StatCard';
import LinksTable from './LinksTable';
import PageContainer from '@/components/PageContainer';

const DashboardPage = () => {
	return (
		<PageContainer>
			<PageHeader
				heading='Dashboard'
				subheading='Shorten your urls to earn upto 20$'
			/>
			<div className='grid grid-cols-4 gap-x-8'>
				<StatCard
					icon='/dashboard/dollar.svg'
					label='Revenue'
					value='₹ 432'
				/>
				<StatCard
					icon='/dashboard/eye.svg'
					label='Impressions'
					value='3233'
				/>
				<StatCard
					icon='/dashboard/link.svg'
					label='Active Links'
					value='23'
				/>
				<StatCard
					icon='/dashboard/cursor.svg'
					label='Average CPM'
					value='₹ 0.40'
				/>
			</div>

			<LinksTable />
		</PageContainer>
	);
};

export default DashboardPage;
