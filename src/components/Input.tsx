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
				'py-3 focus:outline-purple-600 border-none placeholder-purple-600 outline outline-1 rounded-lg outline-gray-300 px-3',
				className
			)}
			{...props}
		/>
	);
};

export default Input;
