type FaqCardProps = {
	question: string;
	answer: string;
};

const FaqCard = ({ question, answer }: FaqCardProps) => {
	return (
		<div>
			<p className='text-lg items-center text-purple-600 flex'>
				<span className='h-2 flex items-center justify-center w-2 mr-2 rounded-full bg-violet-600 text-white' />
				<span className="font-semibold">{question}</span>
			</p>
			<p className='font-medium text-gray-600 pl-4'>{answer}</p>
		</div>
	);
};

export default FaqCard;
