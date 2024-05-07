import { cn } from '@/utils/cn';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

const CardHeading = ({
	className,
	...props
}: DetailedHTMLProps<
	HTMLAttributes<HTMLHeadingElement>,
	HTMLHeadingElement
>) => {
	return (
		<div className='py-3 px-4'>
			<h3
				className={cn('text-lg font-medium', className)}
				{...props}
			/>
		</div>
	);
};

export default CardHeading;
