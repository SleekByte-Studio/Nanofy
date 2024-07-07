'use client';
import { MouseEventHandler, useState } from 'react';
import { requestWithdrawl } from '@/actions/withdraw';
import { Button, Dialog, DialogPanel, NumberInput } from '@tremor/react';
import { useFormState, useFormStatus } from 'react-dom';

type WithdrawButtonProps = {
	balance: number;
};

const WithdrawButton = ({ balance }: WithdrawButtonProps) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button
				disabled={!(balance >= 1000)}
				onClick={() => setIsOpen(true)}
				className='w-full max-w-72'
			>
				Withdraw
			</Button>

			<Dialog
				open={isOpen}
				onClose={(val) => setIsOpen(val)}
			>
				<DialogPanel className='space-y-3'>
					<h3 className='text-violet-600 font-medium'>Request Withdrawl</h3>
					<span>You will receive the payment within 3 days</span>
					<form action={requestWithdrawl}>
						<NumberInput
							name='amount'
							placeholder='Enter amount'
							min={1000}
							max={balance}
						/>
						<RequestWithdrawlButton onClick={() => setIsOpen(false)} />
					</form>
				</DialogPanel>
			</Dialog>
		</>
	);
};

type RequestWithdrawlButtonProps = {
	onClick: MouseEventHandler<HTMLButtonElement>;
};

const RequestWithdrawlButton = ({ onClick }: RequestWithdrawlButtonProps) => {
	const { data, pending } = useFormStatus();
	return (
		<Button
			type='submit'
			onClick={onClick}
			loading={pending}
			className='mt-8 w-full'
			loadingText='Requesting'
		>
			Request Withdrawl
		</Button>
	);
};

export default WithdrawButton;
