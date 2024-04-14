import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

const LinksTable = () => {
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
									<th
										scope='col'
										className='px-6 py-3 text-start font-medium text-violet-600 uppercase'
									>
										Link
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-start font-medium text-violet-600 uppercase'
									>
										Age
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-start font-medium text-violet-600 uppercase'
									>
										Address
									</th>
									<th
										scope='col'
										className='px-6 py-3 text-end font-medium text-violet-600 uppercase'
									>
										Action
									</th>
								</tr>
							</thead>
							<tbody className='divide-y divide-gray-200'>
								<tr>
									<td className='px-6 py-4 whitespace-nowrap font-medium text-gray-800'>
										John Brown
									</td>
									<td className='px-6 py-4 whitespace-nowrap text-gray-800'>
										45
									</td>
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

export default LinksTable;
