'use client';

import Image from 'next/image';
import Button from '../Button';
import { Dialog, DialogPanel } from '@tremor/react';
import { PropsWithChildren, useState } from 'react';

const CreateNewLinkButton = ({ children }: PropsWithChildren) => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	return (
		<>
			<Button
				onClick={() => setIsModalOpen(true)}
				className='text-violet-600 hover:bg-gray-200 flex justify-center gap-3 items-center bg-white mx-3'
			>
				Create New Link
				<Image
					src={'/dashboard/link.svg'}
					height={18}
					width={18}
					alt='plus'
				/>
			</Button>

			{/* Modal */}
			<Dialog
				open={isModalOpen}
				onClose={(val) => setIsModalOpen(val)}
				static={true}
			>
				<DialogPanel>{children}</DialogPanel>
			</Dialog>
		</>
	);
};

export default CreateNewLinkButton;
