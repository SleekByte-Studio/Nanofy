import Link from 'next/link';
import { DetailedHTMLProps, PropsWithChildren, TdHTMLAttributes } from 'react';
import DeleteActionButton from './DeleteActionButton';
import CopyActionButton from './CopyActionButton';

type LinksTableProps = {
	links: {
		id: string;
		name: string;
		slug: string;
		destination: string;
		impressions: number;
	}[];
};

const COLUMNS = ['Name', 'Slug', 'Destination', 'Impressions', 'Action'];

const LinksTable = ({ links }: LinksTableProps) => {
	return (
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
							<span className='inline-flex gap-x-1'>
								{link.destination}
								<CopyActionButton link={link.destination} />
							</span>
						</LinksTableRow>
						<LinksTableRow>{link.impressions}</LinksTableRow>
						<LinksTableRow>
							<DeleteActionButton slug={link.slug} />
						</LinksTableRow>
					</tr>
				))}
			</tbody>
		</table>
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
