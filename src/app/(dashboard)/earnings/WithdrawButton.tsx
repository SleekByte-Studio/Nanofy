'use client';
import { useState } from 'react';
import { Button, Dialog, DialogPanel } from '@tremor/react';

const WithdrawButton = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button className='w-full max-w-72'>Withdraw</Button>

			<Dialog
				open={isOpen}
				onClose={(val) => setIsOpen(val)}
			>
				<DialogPanel>
					<Button
						className='mt-8 w-full'
						onClick={() => setIsOpen(false)}
					>
						Got it!
					</Button>
				</DialogPanel>
			</Dialog>
		</>
	);
};

export default WithdrawButton;
