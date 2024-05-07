import { LineChart } from '@tremor/react';

type ImpressionsChartProps = {};

const ImpressionsChart = ({}: ImpressionsChartProps) => {
	return (
		<div>
			<LineChart
				categories={['Impressions']}
				data={[]}
				index='_count'
			/>
		</div>
	);
};

export default ImpressionsChart;
