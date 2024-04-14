import { PropsWithChildren } from 'react';

const PageContainer = ({ children }: PropsWithChildren) => {
	return (
		<div className='p-3'>
			<div className='container mx-auto p-8 grid gap-y-8'>{children}</div>
		</div>
	);
};

export default PageContainer;
