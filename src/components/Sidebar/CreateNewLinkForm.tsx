'use client';
import Image from 'next/image';
import { TextInput } from '@tremor/react';
import { Button, Callout } from '@tremor/react';
import { useFormState, useFormStatus } from 'react-dom';
import { createNewLinkAction, CreateNewLinkPayloadType } from '@/actions/link';

const CreateNewLinkForm = () => {
	const [state, action] = useFormState<CreateNewLinkPayloadType, any>(
		createNewLinkAction,
		{
			status: 'pending',
			payload: ''
		}
	);
	const { pending: loading } = useFormStatus();

	const handleCopyToClipboard = async () => {
		await navigator.clipboard.writeText(state.payload);
	};
	return (
		<form action={action}>
			<h3 className='text-lg font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong'>
				Create New Link
			</h3>
			<div className='flex flex-col gap-y-6 mt-6'>
				<TextInput
					required
					name='name'
					placeholder='Name'
					type='text'
				/>
				<div className='flex gap-x-6'>
					<TextInput
						required
						name='slug'
						placeholder='Slug'
						type='text'
					/>
					<TextInput
						required
						name='destination'
						placeholder='URL'
						type='url'
					/>
				</div>
				{state.status === 'failed' && (
					<Callout title='Validation Error'>{state.payload}</Callout>
				)}
			</div>
			{state.status === 'pending' || state.status === 'failed' ? (
				<Button
					className='mt-8 w-full'
					loadingText='Creating'
					type='submit'
					loading={loading}
				>
					Create
				</Button>
			) : (
				<Button
					onClick={handleCopyToClipboard}
					className='mt-8 w-full'
					type='button'
				>
					<span className='flex gap-x-1 font-semibold'>
						Copy to Clipboard
						<Image
							src={'/icons/copy.svg'}
							height={18}
							width={18}
							alt='copy'
						/>
					</span>
				</Button>
			)}
		</form>
	);
};

export default CreateNewLinkForm;
