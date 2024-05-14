'use client';

import Image from 'next/image';
import { useState } from 'react';
import axios from '@/config/axios';
import { Button, Dialog, DialogPanel } from '@tremor/react';
import { useDebounce } from 'use-debounce';
import { useRouter } from 'next/navigation';

type DeleteActionButtonProps = {
	slug: string;
};

const DeleteActionButton = ({ slug }: DeleteActionButtonProps) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	async function handleDelete() {
		setIsLoading(true);
		await axios.delete('/api/link', {
			data: {
				slug
			}
		});
		setIsOpen(false);
		setIsLoading(false);
		router.refresh();
	}
	return (
		<>
			<button onClick={() => setIsOpen(true)}>
				<Image
					className='hover:opacity-60'
					src={'/icons/delete.svg'}
					height={20}
					width={20}
					alt='delete'
				/>
			</button>
			<Dialog
				open={isOpen}
				onClose={(val) => setIsOpen(val)}
				static={true}
			>
				<DialogPanel className='max-w-sm'>
					<h3 className='text-lg font-semibold text-tremor-content-strong'>
						Are you sure to Continue?
					</h3>
					<p className='mt-2 leading-6 text-tremor-default text-tremor-content'>
						This action is irreversible
					</p>

					<Button
						loading={isLoading}
						loadingText='Deleting'
						onClick={handleDelete}
						className='mt-8 w-full'
					>
						Delete
					</Button>
				</DialogPanel>
			</Dialog>
		</>
	);
};

export default DeleteActionButton;
