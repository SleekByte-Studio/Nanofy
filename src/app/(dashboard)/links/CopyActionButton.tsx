'use client';
import Image from 'next/image';
import Link from 'next/link';

type CopyActionButtonProps = {
	slug: string;
};

const CopyActionButton = ({ slug }: CopyActionButtonProps) => {
	function copyToClipboard() {
		navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL_PREFIX}/${slug}`);
	}
	return (
		<Image
			onClick={copyToClipboard}
			className='cursor-pointer hover:opacity-60'
			src={'/icons/copy-2.svg'}
			alt='copy icon'
			height={18}
			width={18}
		/>
	);
};

export default CopyActionButton;
