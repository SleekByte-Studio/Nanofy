'use client';

import {
	Button,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	TextInput
} from '@tremor/react';
import Image from 'next/image';
import CardHeading from '@/components/CardHeading';

const AdminDashboard = () => {
	return (
		<div className='p-3 space-y-3'>
			<Card>
				<CardHeading className='text-2xl text-violet-600'>
					Admin Dashboard
				</CardHeading>
			</Card>
			<Card>
				<CardHeading>CRON Jobs</CardHeading>
				<div className='flex gap-x-6'>
					<Button>Update Balance</Button>
					<Button>Update Balance</Button>
					<Button>Update Balance</Button>
				</div>
			</Card>
			<Card>
				<CardHeading>Payouts Approval</CardHeading>
				<Table>
					<TableHead>
						<TableRow>
							<TableHeaderCell>Name</TableHeaderCell>
							<TableHeaderCell>Email</TableHeaderCell>
							<TableHeaderCell>Amount</TableHeaderCell>
							<TableHeaderCell>Method</TableHeaderCell>
							<TableHeaderCell>Email / UPI</TableHeaderCell>
							<TableHeaderCell>Action</TableHeaderCell>
						</TableRow>
					</TableHead>

					<TableBody>
						<TableRow>
							<TableCell>Wilhelm Tell</TableCell>
							<TableCell>1</TableCell>
							<TableCell>Uri, Schwyz, Unterwalden</TableCell>
							<TableCell>National Hero</TableCell>
							<TableCell>National Hero</TableCell>
							<TableCell>
								<Button>
									<Image
										src={'/admin/tick.svg'}
										height={18}
										width={18}
										alt='tick'
									/>
								</Button>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Card>
			<Card>
				<CardHeading>Links Removal</CardHeading>
				<TextInput
					className='max-w-xl'
					placeholder='Search with Destination...'
				/>
				<Table>
					<TableHead>
						<TableRow>
							<TableHeaderCell>Name</TableHeaderCell>
							<TableHeaderCell>Slug</TableHeaderCell>
							<TableHeaderCell>Destination</TableHeaderCell>
							<TableHeaderCell>User Email</TableHeaderCell>
							<TableHeaderCell>Action</TableHeaderCell>
						</TableRow>
					</TableHead>

					<TableBody>
						<TableRow>
							<TableCell>Wilhelm Tell</TableCell>
							<TableCell>1</TableCell>
							<TableCell>Uri, Schwyz, Unterwalden</TableCell>
							<TableCell>National Hero</TableCell>
							<TableCell>
								<Button>
									<Image
										src={'/admin/delete.svg'}
										height={18}
										width={18}
										alt='tick'
									/>
								</Button>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Card>
		</div>
	);
};

export default AdminDashboard;
