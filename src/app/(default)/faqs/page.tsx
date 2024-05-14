import faqs from '@/constants/faqs';
import FaqCard from './FaqCard';

const FaqsPage = () => {
	return (
		<div className='min-h-screen'>
			<div className=' grid place-items-center mx-auto bg-violet-600 py-8'>
				<h1 className='text-4xl text-center font-bold text-white'>
					Frequently Asked Question
				</h1>
				<span className='text-white max-w-xl font-medium text-center'>
					Welcome to the FAQ section of our URL shortening service! Below, you
					will find answers to some common questions about our platform
				</span>
			</div>

			<div className='container mx-auto flex flex-col py-8 gap-y-8 items-center'>
				<div className='grid max-w-2xl gap-y-12'>
					{faqs?.map((faq, index) => (
						<FaqCard
							key={index}
							question={faq.question}
							answer={faq.answer}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default FaqsPage;
