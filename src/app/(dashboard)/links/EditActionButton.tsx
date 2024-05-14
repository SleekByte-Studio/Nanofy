'use client';

import Image from 'next/image';
import { FormEventHandler, useState } from 'react';
import axios from '@/config/axios';
import { Button, Dialog, DialogPanel, TextInput } from '@tremor/react';
import { useDebounce } from 'use-debounce';
import { useRouter } from 'next/navigation';

type EditActionButtonProps = {
	id: string;
	slug: string;
	name: string;
	destination: string;
};

const EditActionButton = ({
	id,
	slug,
	name,
	destination
}: EditActionButtonProps) => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		setIsLoading(true);
		await axios.put('/api/link', {
			data: {
				id,
				slug: formData.get('slug') || slug,
				name: formData.get('name') || name,
				destination: formData.get('destination') || destination
			}
		});
		setIsOpen(false);
		setIsLoading(false);
		router.refresh();
	};
	return (
		<>
			<button onClick={() => setIsOpen(true)}>
				<Image
					className='hover:opacity-60'
					src={'/icons/edit.svg'}
					height={18}
					width={18}
					alt='delete'
				/>
			</button>
			<Dialog
				open={isOpen}
				onClose={(val) => setIsOpen(val)}
				static={true}
			>
				<DialogPanel className='max-w-lg'>
					<h3 className='text-lg font-semibold text-tremor-content-strong'>
						Edit {name}
					</h3>
					<form onSubmit={handleSubmit}>
						<div className='flex flex-col gap-y-6 mt-6'>
							<TextInput
								name='name'
								type='text'
								placeholder='Name'
								defaultValue={name}
							/>
							<div className='flex gap-x-6'>
								<TextInput
									type='text'
									name='slug'
									placeholder='Slug'
									defaultValue={slug}
								/>
								<TextInput
									type='url'
									placeholder='URL'
									name='destination'
									defaultValue={destination}
								/>
							</div>
						</div>
						<Button
							type='submit'
							loading={isLoading}
							loadingText='Editing'
							className='mt-8 w-full'
						>
							Edit Link
						</Button>
					</form>
				</DialogPanel>
			</Dialog>
		</>
	);
};

export default EditActionButton;
