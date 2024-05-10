import Image from 'next/image';
import FeedbackCard from './FeedbackCard';
import FeatureCard from './FeatureCard';
import { Button } from '@tremor/react';

const HomePage = () => {
	return (
		<div>
			{/* Hero Section */}
			<div className='container mx-auto flex gap-y-6 flex-col items-center my-20'>
				<div className='bg-violet-600 text-white px-6 rounded-xl font-medium'>
					<span>Earn Upto 300% more than your existing URL Shortener</span>
				</div>
				<h1 className='text-violet-600 text-6xl max-w-screen-md text-center font-bold'>
					Shorten your URLs, Lengthen your wallet!
				</h1>
				<h2 className='max-w-4xl text-center font-medium text-gray-600'>
					Empower your online presence with our innovative URL shortening
					service, where every click counts towards your earnings. Shorten
					links, maximize potential, and make money with every share!
				</h2>

				<button className='px-6 py-3 bg-violet-600 hover:bg-violet-800 text-white rounded-lg font-medium'>
					Get Started
				</button>

				<figure className='relative max-w-full z-0 w-[50rem] h-auto bg-gray-200 overflow-hidden rounded-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(221_214_254),_0_0_5rem_-2rem_rgb(124_58_237)]'>
					<div className='relative flex items-center max-w-[50rem] bg-gray-200  py-2 px-24'>
						<div className='flex space-x-1 absolute top-2/4 start-4 -translate-y-1'>
							<span className='size-2 bg-gray-400 rounded-full'></span>
							<span className='size-2 bg-gray-400 rounded-full'></span>
							<span className='size-2 bg-gray-400 rounded-full'></span>
						</div>
						<div className='flex justify-center items-center size-full bg-gray-300 text-[.25rem] text-gray-400 rounded-sm sm:text-[.5rem]'>
							www.nanofy.in
						</div>
					</div>

					<div className='bg-gray-200 border-4 border-gray-200 overflow-hidden rounded-lg'>
						<Image
							src={'/images/dashboard.png'}
							alt='nanofy dashboard image'
							height={600}
							width={900}
						/>
					</div>
				</figure>
			</div>

			{/* Features Section */}
			<div className='flex bg-violet-600 gap-y-6 flex-col items-center py-20'>
				<h2 className='text-4xl font-semibold text-white'>
					Why Should you use Nanofy?
				</h2>
				<div className='w-full p-20'>
					<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6'>
						<FeatureCard
							heading='Highest CPM in the Market'
							iconUrl='/landing-page/rupee-icon.svg'
							body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
									mollitia dolorem repudiandae ratione nesciunt consectetur. Nesciunt
									nam amet odit nostrum?'
						/>
						<FeatureCard
							heading='Highest CPM in the Market'
							iconUrl='/landing-page/rupee-icon.svg'
							body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
									mollitia dolorem repudiandae ratione nesciunt consectetur. Nesciunt
									nam amet odit nostrum?'
						/>
						<FeatureCard
							heading='Highest CPM in the Market'
							iconUrl='/landing-page/rupee-icon.svg'
							body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
									mollitia dolorem repudiandae ratione nesciunt consectetur. Nesciunt
									nam amet odit nostrum?'
						/>
						<FeatureCard
							heading='Highest CPM in the Market'
							iconUrl='/landing-page/rupee-icon.svg'
							body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
									mollitia dolorem repudiandae ratione nesciunt consectetur. Nesciunt
									nam amet odit nostrum?'
						/>
						<FeatureCard
							heading='Highest CPM in the Market'
							iconUrl='/landing-page/rupee-icon.svg'
							body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
									mollitia dolorem repudiandae ratione nesciunt consectetur. Nesciunt
									nam amet odit nostrum?'
						/>
						<FeatureCard
							heading='Highest CPM in the Market'
							iconUrl='/landing-page/rupee-icon.svg'
							body='Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
									mollitia dolorem repudiandae ratione nesciunt consectetur. Nesciunt
									nam amet odit nostrum?'
						/>
					</div>
				</div>
			</div>

			{/* Feedbacks Section */}
			<div className='flex relative gap-y-6 flex-col bg-violet-50 items-center py-20'>
				<h2 className='text-4xl font-semibold'>
					<span>Feedbacks from </span>
					<span className='text-violet-600'>people using Nanofy</span>
				</h2>
				<div className=' container mx-auto grid grid-cols-3 gap-6'>
					<div className='flex flex-col gap-6'>
						<FeedbackCard
							name='Carryminati'
							designation='Youtuber'
							feedback='I made around 5k last month using nanofy as a side hustle.'
						/>
						<FeedbackCard
							name='Carryminati'
							designation='Youtuber'
							feedback='I made around 5k last month using nanofy as a side hustle.'
						/>
						<FeedbackCard
							name='Carryminati'
							designation='Youtuber'
							feedback='I made around 5k last month using nanofy as a side hustle.'
						/>
					</div>
					<div className='flex flex-col gap-6'>
						<FeedbackCard
							name='Carryminati'
							designation='Youtuber'
							feedback='I made around 5k last month using nanofy as a side hustle.dasdwas dwashda daw hawudawd'
						/>
						<FeedbackCard
							name='Carryminati'
							designation='Youtuber'
							feedback='I made around 5k last month using nanofy as a side hustle.'
						/>
						<FeedbackCard
							name='Carryminati'
							designation='Youtuber'
							feedback='I made around 5k last month using nanofy as a side hustle.'
						/>
					</div>
					<div className='flex flex-col gap-6'>
						<FeedbackCard
							name='Carryminati'
							designation='Youtuber'
							feedback='I made around 5k last month using nanofy as a side hustle.'
						/>
						<FeedbackCard
							name='Carryminati'
							designation='Youtuber'
							feedback='I made around 5k last month using nanofy as a side hustle.'
						/>
						<FeedbackCard
							name='Carryminati'
							designation='Youtuber'
							feedback='I made around 5k last month using nanofy as a side hustle.'
						/>
					</div>
				</div>
				<div className='absolute bottom-0 left-0 w-screen h-64 bg-gradient-to-t from-violet-100 to-transparent flex justify-center items-end pb-8 z-20'>
					<Button>Learn More</Button>
				</div>
			</div>

			<div className='my-8 p-6 flex overflow-hidden relative h-32 bg-violet-600'>
				<Image
					className='absolute top-0 left-0 w-full object-cover'
					src={'/landing-page/violet-texture.svg'}
					alt='nanofy dashboard image'
					height={600}
					width={900}
				/>
				<h3 className='text-2xl max-w-xl  text-violet-600 font-bold z-20'>
					Embark on your journey to financial success with a single click,
					starting now!
				</h3>
			</div>
		</div>
	);
};

export default HomePage;
