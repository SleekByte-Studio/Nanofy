import { Button } from '@tremor/react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';

type LinksTableProps = {
	links: {
		id: string;
		name: string;
		slug: string;
		destination: string;
		impressions: number;
		revenue: number;
	}[];
};

const COLUMNS = ['Name', 'Slug', 'Destination', 'Impressions', 'Est Revenue'];

const LinksTable = ({ links }: LinksTableProps) => {
	return (
		<div className='flex flex-col shadow rounded-lg overflow-x-auto'>
			<div className=' min-w-full inline-block align-middle'>
				<div className='border rounded-lg divide-y divide-violet-200'>
					<div className='py-3 px-4'>
						<div className='relative max-w-xs'>
							<h3 className='text-xl font-semibold'>Active Links</h3>
						</div>
					</div>
					<div className='overflow-hidden'>
						<table className='min-w-full divide-y divide-violet-200'>
							<thead className='bg-gray-50'>
								<tr>
									{COLUMNS.map((column, index) => (
										<LinksTableHead key={index}>{column}</LinksTableHead>
									))}
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-200'>
								{links.map((link) => (
									<tr key={link.id}>
										<LinksTableRow>{link.name}</LinksTableRow>
										<LinksTableRow>{link.slug}</LinksTableRow>
										<LinksTableRow>
											<a
												title='Open Link'
												target='_blank'
												href={link.destination}
											>
												{link.destination}
											</a>
										</LinksTableRow>
										<LinksTableRow>{link.impressions}</LinksTableRow>
										<LinksTableRow>₹ {link.revenue}</LinksTableRow>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className='py-3 px-4 flex justify-center'>
						<Link href='/links'>
							<Button>View More</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export const LinksTableHead = ({ children }: PropsWithChildren) => {
	return (
		<th
			scope='col'
			className='px-6 py-3 text-ceter font-semibold text-sm tracking-wider text-violet-600 uppercase'
		>
			{children}
		</th>
	);
};

export const LinksTableRow = ({ children }: PropsWithChildren) => {
	return (
		<td className='px-6 py-4 font-medium whitespace-nowrap text-center text-gray-800'>
			{children}
		</td>
	);
};

export default LinksTable;
