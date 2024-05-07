import { cn } from '@/utils/cn';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

const Input = ({
	className,
	...props
}: DetailedHTMLProps<
	InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>) => {
	return (
		<input
			className={cn(
				'py-3 focus:border-purple-600 outline-none placeholder-purple-600 border border-1 rounded-lg border-gray-300 px-3',
				className
			)}
			{...props}
		/>
	);
};

export default Input;
