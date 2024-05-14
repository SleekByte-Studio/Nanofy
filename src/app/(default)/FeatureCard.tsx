import Image from 'next/image';

type FeatureCardProps = {
	heading: string;
	iconUrl: string;
	body: string;
};

const FeatureCard = ({ body, heading, iconUrl }: FeatureCardProps) => {
	return (
		<div className='border bg-white rounded-xl p-8 space-y-3'>
			<div className='flex gap-x-3 items-center'>
				<div className='p-2 rounded bg-violet-600'>
					<Image
						width={20}
						height={20}
						alt='rupee icon'
						src={iconUrl}
					/>
				</div>
				<h3 className='text-xl text-violet-600 font-semibold'>
					{heading}
				</h3>
			</div>
			<p className='text-violet-500 font-medium'>
				{body}
			</p>
		</div>
	);
};

export default FeatureCard;
