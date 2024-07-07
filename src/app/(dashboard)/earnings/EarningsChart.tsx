'use client';
import { AreaChart } from '@tremor/react';

type EarningsChartProps = {
	revenue: {
		date: string;
		Revenue: number;
	}[];
};

const EarningsChart = ({ revenue }: EarningsChartProps) => {
	return (
		<AreaChart
			className='h-80'
			data={revenue}
			index='date'
			colors={['violet-600']}
			categories={['Revenue']}
			yAxisWidth={60}
			valueFormatter={(num) => `₹ ${num}`}
		/>
	);
};

export default EarningsChart;
