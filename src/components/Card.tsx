import { cn } from '@/utils/cn';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

const Card = ({
	className,
	...props
}: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => {
	return (
		<div
			className={cn('rounded-md shadow border', className)}
			{...props}
		/>
	);
};

export default Card;
