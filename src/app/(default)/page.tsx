import Image from 'next/image';

const HomePage = () => {
	return (
		<div>
			<div className='container mx-auto flex gap-y-6 flex-col items-center my-20'>
				<h1 className='text-violet-600 text-4xl font-semibold'>
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

				<figure className='relative max-w-full z-0 w-[50rem] h-auto bg-gray-200 overflow-hidden rounded-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(124_58_237_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)]'>
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
		</div>
	);
};

export default HomePage;
