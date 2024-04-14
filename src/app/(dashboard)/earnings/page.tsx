import EarningsChart from './EarningsChart';
import PageHeader from '@/components/PageHeader';
import PageContainer from '@/components/PageContainer';
import Card from '@/components/Card';

const EarningsPage = () => {
	return (
		<PageContainer>
			<PageHeader
				heading='Earnings'
				subheading='Shorten your urls to earn upto 20$'
			/>
			<Card className='p-8'>
				<span className='font-medium flex-1 text-violet-600'>
					Earnings Last Month
				</span>
				<div className='my-2'>
					<span className='font-bold text-violet-950 text-4xl'>₹ {4878}</span>
				</div>
				<EarningsChart />
			</Card>
		</PageContainer>
	);
};

export default EarningsPage;
