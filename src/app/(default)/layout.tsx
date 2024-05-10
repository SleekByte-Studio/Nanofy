import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

const LandingPageLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='pt-20 max-w-[100vw] overflow-hidden'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default LandingPageLayout;
