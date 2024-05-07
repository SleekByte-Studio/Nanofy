import { PropsWithChildren } from 'react';
import Header from './Header';
import Footer from './Footer';

const LandingPageLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className='py-20'>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default LandingPageLayout;
