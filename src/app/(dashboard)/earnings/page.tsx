import EarningsChart from './EarningsChart';
import PageHeader from '@/components/PageHeader';
import PageContainer from '@/components/PageContainer';
import Card from '@/components/Card';
import WithdrawlProgress from './WithdrawlProgress';
import { Button } from '@tremor/react';

const EarningsPage = () => {
	return (
		<PageContainer>
			<PageHeader
				heading='Earnings'
				subheading='Shorten your urls to earn upto 20$'
			/>
			<Card className='p-8'>
				<span className='font-medium flex-1 text-violet-600'>
					Earnings This Month
				</span>
				<div className='my-2'>
					<span className='font-bold text-violet-950 text-4xl'>₹ {4878}</span>
				</div>
				<EarningsChart />
			</Card>
			<div className='grid xl:grid-cols-2 gap-8'>
				<Card className=''>
					<div className='w-max m-auto flex p-8 gap-8'>
						<div className='flex-1 space-y-3'>
							<p className='font-medium h-max flex-1 text-violet-600'>
								Withdrawl
							</p>
							<span className='font-bold text-violet-950 text-3xl xl:text-4xl'>
								₹720 / ₹1000
							</span>
							<p className='text-gray-400 text-sm font-medium'>
								( Threshold Amount for Withdrawl )
							</p>
							<Button className='w-full max-w-72'>Withdraw</Button>
						</div>
						<WithdrawlProgress />
					</div>
				</Card>
				<Card className='p-8 '>
					<div className='w-max m-auto'>
						<p className='font-medium flex-1 text-violet-600'>
							Withdrawl Status
						</p>
						<div>
							<span className='text-xl'>Amount: ₹ 3023</span>
						</div>
					</div>
				</Card>
			</div>
		</PageContainer>
	);
};

export default EarningsPage;
