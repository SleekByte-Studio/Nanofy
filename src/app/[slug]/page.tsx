'use client';

import { useEffect } from 'react';
import axios from '@/config/axios';
import { useParams } from 'next/navigation';
import { getCountryCode } from '@/utils/country';

const RedirectionPage = () => {
	const params = useParams();
	useEffect(() => {
		(async () => {
			const country = getCountryCode();
			const { data } = await axios.post('/api/link', {
				country,
				...params
			});
			// location.href = data;
		})();
	}, [params]);
	return <div>

	</div>
};

export default RedirectionPage;
