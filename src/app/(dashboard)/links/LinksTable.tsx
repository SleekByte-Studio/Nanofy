'use client';

import Link from 'next/link';
import Button from '@/components/Button';
import { PropsWithChildren } from 'react';
import { ColumnDef, RowModel, Table, useReactTable } from '@tanstack/react-table';

type LinksTableProps = {};

const COLUMNS: ColumnDef<{}, any>[] = [
	{ accessorKey: 'Name' },
	{ accessorKey: 'Slug' },
	{ accessorKey: 'Status' },
	{ accessorKey: 'Impressions' },
	{ accessorKey: 'Revenue' }
];

const LinksTable = ({}: LinksTableProps) => {
	const {} = useReactTable({
		data: [{}],
		columns: COLUMNS,
		getCoreRowModel: function (table: Table<any>): () => RowModel<any> {
			throw new Error('Function not implemented.');
		}
	});
	return (
		<table className='min-w-full divide-y divide-violet-200'>
			<thead className='bg-gray-50'>
				<tr>
					<LinksTableHead>Name</LinksTableHead>
					<LinksTableHead>Slug</LinksTableHead>
					<LinksTableHead>Status</LinksTableHead>
					<LinksTableHead>Impressions</LinksTableHead>
					<LinksTableHead>Revenue</LinksTableHead>
				</tr>
			</thead>
			<tbody className='divide-y divide-gray-200'>
				<tr>
					<td className='px-6 py-4 whitespace-nowrap font-medium text-gray-800'>
						John Brown
					</td>
					<td className='px-6 py-4 whitespace-nowrap text-gray-800'>45</td>
					<td className='px-6 py-4 whitespace-nowrap text-gray-800'>
						New York No. 1 Lake Park
					</td>
					<td className='px-6 py-4 whitespace-nowrap text-end text-sm font-medium'>
						<button
							type='button'
							className='inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none'
						>
							Delete
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export const LinksTableHead = ({ children }: PropsWithChildren) => {
	return (
		<th
			scope='col'
			className='px-6 py-3 text-start font-semibold text-sm tracking-wider text-violet-600 uppercase'
		>
			{children}
		</th>
	);
};

export const LinksTableRow = () => {
	return;
};

export default LinksTable;
