import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

const Button = ({
	className,
	...props
}: DetailedHTMLProps<
	ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
>) => {
	return (
		<button
			className={cn(
				'bg-violet-600 transition-colors hover:bg-violet-700 font-semibold rounded-lg px-6 py-3 text-white ',
				className
			)}
			{...props}
		/>
	);
};

export default Button;
