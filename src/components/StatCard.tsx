import Image from 'next/image';
import Card from './Card';

type StatCardProps = {
	icon: string;
	value: string | number;
	label: string;
};

const StatCard = ({ icon, label, value }: StatCardProps) => {
	return (
		<Card className='p-4'>
			<div className='flex'>
				<span className='font-medium flex-1 text-violet-600'>{label}</span>
				<div className='bg-violet-300 rounded-md p-2 overflow-hidden'>
					<Image
						height={24}
						width={24}
						src={icon}
						alt={label}
					/>
				</div>
			</div>
			<div>
				<span className='font-bold text-violet-950 text-4xl'>{value}</span>
			</div>
		</Card>
	);
};

export default StatCard;
