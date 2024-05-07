'use client';
import { AreaChart } from '@tremor/react';
import generateDateTextsFromDate from '@/utils/date';

type EarningsChartProps = {};

const chartdata = generateDateTextsFromDate(new Date()).map((date) => ({
	date,
	Revenue: Math.floor(Math.random()*1000)
}));

const EarningsChart = ({}: EarningsChartProps) => {
	return (
		<AreaChart
			className='h-80'
			data={chartdata}
			index='date'
			colors={["violet-600"]}
			categories={['Revenue']}
			yAxisWidth={60}
			valueFormatter={(num) => `₹ ${num}`}
		/>
	);
};

export default EarningsChart;
