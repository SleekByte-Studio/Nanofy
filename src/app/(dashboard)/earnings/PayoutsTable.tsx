import { Payout } from '@prisma/client';
import { formatDate } from '@/utils/date';
import { PropsWithChildren } from 'react';

type PayoutsTableProps = {
	payouts: Payout[];
};

const COLUMNS = ['No', 'Payment Date', 'Amount', 'Status', 'Method'];

const PayoutsTable = ({ payouts }: PayoutsTableProps) => {
	return (
		<table className='min-w-full divide-y divide-violet-200'>
			<thead className='bg-gray-50'>
				<tr>
					{COLUMNS.map((column, index) => (
						<PayoutsTableHead key={index}>{column}</PayoutsTableHead>
					))}
				</tr>
			</thead>
			<tbody className='divide-y divide-gray-200'>
				{payouts?.map((payout, index) => (
					<tr key={payout.id}>
						<PayoutsTableRow>{index + 1}</PayoutsTableRow>
						<PayoutsTableRow>{formatDate(payout.timestamp)}</PayoutsTableRow>
						<PayoutsTableRow>{payout.amount}</PayoutsTableRow>
						<PayoutsTableRow>{payout.status}</PayoutsTableRow>
						<PayoutsTableRow>₹ {payout.method}</PayoutsTableRow>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export const PayoutsTableHead = ({ children }: PropsWithChildren) => {
	return (
		<th
			scope='col'
			className='px-6 py-3 text-ceter font-semibold text-sm tracking-wider text-violet-600 uppercase'
		>
			{children}
		</th>
	);
};

export const PayoutsTableRow = ({ children }: PropsWithChildren) => {
	return (
		<td className='px-6 py-4 font-medium whitespace-nowrap text-center text-gray-800'>
			{children}
		</td>
	);
};

export default PayoutsTable;
