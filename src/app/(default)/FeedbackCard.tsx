type FeedbackCardProps = {
	name: string;
	designation: string;
	feedback: string;
};

const FeedbackCard = ({ name, feedback, designation }: FeedbackCardProps) => {
	return (
		<div className='shadow border rounded-lg p-6 bg-white'>
			<div>
				<span className='block text-lg font-semibold leading-5'>{name}</span>
				<span className='font-medium text-sm text-violet-600'>
					{designation}
				</span>
			</div>
			<blockquote className='text-xl text-gray-600 font-medium'>{feedback}</blockquote>
		</div>
	);
};

export default FeedbackCard;
