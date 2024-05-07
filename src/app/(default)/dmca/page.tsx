import React from 'react';

const DmcaPage = () => {
	return (
		<div className='container mx-auto'>
			<p>
				Nanofy.in provides an URL shortening service, it allows all our members
				to earn for sharing their shorten links anywhere online legitimately.
				Please report any abuse of Nanofy service including DMCA notices by
				sending email to{' '}
				<a
					className='hover:text-white text-violet-600 transition-colors cursor-pointer hover:bg-violet-600 rounded-lg pb-0.5 px-1'
					href='mailto:contact@nanofy.in'
				>
					contact@nanofy.in
				</a>
				. Nanofy.in does not host any content so, we can only remove the
				requested url links from our site. Usually we remove reported url links
				within 24 hours but some time it may take upto 48 hours.
			</p>
		</div>
	);
};

export default DmcaPage;
