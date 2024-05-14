'use client';

import { ProgressCircle } from '@tremor/react';

// Extracted into component as Context API is used

const WithdrawlProgress = () => {
	return (
		<ProgressCircle
			value={(720 / 1000) * 100}
			size='lg'
		/>
	);
};

export default WithdrawlProgress;
