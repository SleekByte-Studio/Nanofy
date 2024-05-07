'use client';
import Image from 'next/image';
import Link from 'next/link';

type CopyActionButtonProps = {
	link: string;
};

const CopyActionButton = ({ link }: CopyActionButtonProps) => {
	function copyToClipboard() {
		navigator.clipboard.writeText(link);
	}
	return (
		<Image
			onClick={copyToClipboard}
			className='cursor-pointer'
			src={'/icons/copy-2.svg'}
			alt='copy icon'
			height={18}
			width={18}
		/>
	);
};

export default CopyActionButton;
