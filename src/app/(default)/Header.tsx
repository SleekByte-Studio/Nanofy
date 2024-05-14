import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@tremor/react';
import NavLink from '@/components/NavLink';
import { getServerSession } from 'next-auth/next';

const Header = async () => {
	const session = await getServerSession();
	return (
		<header className='fixed top-0 left-0 flex z-40 items-center w-screen h-20 backdrop-blur border-b'>
			<div className='container mx-auto flex'>
				{/* Branding Section */}
				<div className='flex select-none items-center'>
					<div>
						<Image
							className='max-md:bg-white rounded-xl'
							height={48}
							width={48}
							src={'/logo.png'}
							alt='nanofy logo'
						/>
					</div>

					<h3 className='text-[1.8rem] -ml-1.5 font-medium -mb-1.5 text-violet-600'>
						anofy
					</h3>
				</div>

				{/* Navigation Section */}
				<nav className='flex-1 font-medium flex justify-center'>
					<ul className='flex gap-x-6 items-center'>
						<NavLink href='/'>Home</NavLink>
						<NavLink href='/payout-rates'>Payout Rates</NavLink>
						<NavLink href='/faqs'>FAQs</NavLink>
						<NavLink href='/blog'>Blog</NavLink>
					</ul>
				</nav>

				{/* Action Section */}
				<div className='flex items-center gap-x-3'>
					{session ? (
						<Link href={'/dashboard'}>
							<Button>Open Dashboard</Button>
						</Link>
					) : (
						<>
							<Link href={'/login'}>
								<Button>Login</Button>
							</Link>
							<Link href={'/register'}>
								<Button>Register</Button>
							</Link>
						</>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
