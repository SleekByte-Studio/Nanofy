import Card from '@/components/Card';
import EarningsChart from './EarningsChart';
import WithdrawButton from './WithdrawButton';
import WithdrawlsTable from './WithdrawlsTable';
import PageHeader from '@/components/PageHeader';
import CardHeading from '@/components/CardHeading';
import WithdrawlProgress from './WithdrawlProgress';
import PageContainer from '@/components/PageContainer';
import { updatePaymentMethod } from '@/actions/withdraw';
import { Button, Select, TextInput, SelectItem } from '@tremor/react';
import { getEmail, getUser } from '@/utils/user';
import prisma from '@/services/prisma';

async function fetchData() {
	const user = await getUser();
	console.log(user);
	return await Promise.all([
		// Payment Method Data
		prisma.paymentMethod.findUnique({
			where: {
				userId: user?.id
			}
		})
	]);
}

const EarningsPage = async () => {
	const [paymentMethod] = await fetchData();
	console.log(paymentMethod)
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
							<WithdrawButton />
						</div>
						<WithdrawlProgress />
					</div>
				</Card>
				<Card>
					<div className='w-max m-auto p-3 space-y-3'>
						<p className='font-medium flex-1 text-violet-600'>
							Update Payment Method
						</p>
						<form
							className='space-y-3'
							action={updatePaymentMethod}
						>
							<Select
								name='payment-method'
								defaultValue={paymentMethod?.method || 'PAYPAL'}
							>
								<SelectItem value='PAYPAL'>Paypal</SelectItem>
								<SelectItem value='GPAY'>Google Pay</SelectItem>
								<SelectItem value='PHONEPAY'>PhonePay</SelectItem>
							</Select>
							<TextInput
								name='id'
								placeholder='Email / UPI ID :'
								defaultValue={paymentMethod?.details?.id!}
							/>
							<Button
								type='submit'
								className='min-w-72'
							>
								Update
							</Button>
						</form>
					</div>
				</Card>
			</div>
			<Card>
				<CardHeading>Payouts History</CardHeading>
				<WithdrawlsTable payouts={[]} />
			</Card>
		</PageContainer>
	);
};

export default EarningsPage;
