import { Payout } from '@prisma/client';
import { formatDate } from '@/utils/date';
import { PropsWithChildren } from 'react';

type WithdrawlsTableProps = {
	payouts: Payout[];
};

const COLUMNS = ['No', 'Payment Date', 'Amount', 'Status', 'Method'];

const WithdrawlsTable = ({ payouts }: WithdrawlsTableProps) => {
	return (
		<table className='min-w-full divide-y divide-violet-200'>
			<thead className='bg-gray-50'>
				<tr>
					{COLUMNS.map((column, index) => (
						<WithdrawlsTableHead key={index}>{column}</WithdrawlsTableHead>
					))}
				</tr>
			</thead>
			<tbody className='divide-y divide-gray-200'>
				{payouts.map((payout, index) => (
					<tr key={payout.id}>
						<WithdrawlsTableRow>{index + 1}</WithdrawlsTableRow>
						<WithdrawlsTableRow>
							{formatDate(payout.timestamp)}
						</WithdrawlsTableRow>
						<WithdrawlsTableRow>{payout.amount}</WithdrawlsTableRow>
						<WithdrawlsTableRow>{payout.status}</WithdrawlsTableRow>
						<WithdrawlsTableRow>₹ {payout.method}</WithdrawlsTableRow>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export const WithdrawlsTableHead = ({ children }: PropsWithChildren) => {
	return (
		<th
			scope='col'
			className='px-6 py-3 text-ceter font-semibold text-sm tracking-wider text-violet-600 uppercase'
		>
			{children}
		</th>
	);
};

export const WithdrawlsTableRow = ({ children }: PropsWithChildren) => {
	return (
		<td className='px-6 py-4 font-medium whitespace-nowrap text-center text-gray-800'>
			{children}
		</td>
	);
};

export default WithdrawlsTable;
