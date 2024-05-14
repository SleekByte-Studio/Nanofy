import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='py-4 border-t'>
			<div className='container mx-auto flex items-center py-6'>
				<div className='flex select-none items-center'>
					<div>
						<Image
							className='bg-white rounded-xl'
							height={38}
							width={38}
							src={'/logo.png'}
							alt='nanofy logo'
						/>
					</div>

					<h3 className='text-[1.5rem] -ml-1.5 font-semibold -mb-1.5 text-violet-600'>
						anofy
					</h3>
				</div>
				<div className='flex-1 flex justify-end'>
					<nav>
						<ul className='flex gap-x-6 font-medium items-center'>
							<Link href='/payout-rates'>
								<li>Payout Rates</li>
							</Link>
							<Link href='/terms-of-use'>
								<li>Terms of Use</li>
							</Link>
							<Link href='/dmca'>
								<li>DMCA</li>
							</Link>
							<Link href='/privacy-policies'>
								<li>Privacy Policies</li>
							</Link>
						</ul>
					</nav>
				</div>
			</div>
			<div className='container mx-auto flex items-center justify-center text-violet-600 rounded-lg py-3'>
				<span className='font-medium'>
					© 2024 Nanofy.in | All Rights Reserved
				</span>
			</div>
		</footer>
	);
};

export default Footer;
