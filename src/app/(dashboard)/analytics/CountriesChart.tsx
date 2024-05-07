import { cn } from '@/utils/cn';
import CardHeading from '@/components/CardHeading';

import {
	DonutChart,
	Color,
	BarChart,
	ListItem,
	List,
	Card
} from '@tremor/react';
import { Prisma } from '@prisma/client';
const data = [
	{
		country: 'Travel',
		impressions: 6730,
		share: '32.1%',
		color: 'bg-cyan-500'
	},
	{
		country: 'IT & equipment',
		impressions: 4120,
		share: '19.6%',
		color: 'bg-blue-500'
	},
	{
		country: 'Training & development',
		impressions: 3920,
		share: '18.6%',
		color: 'bg-indigo-500'
	},
	{
		country: 'Office supplies',
		impressions: 3210,
		share: '15.3%',
		color: 'bg-violet-500'
	},
	{
		country: 'Communication',
		impressions: 3010,
		share: '14.3%',
		color: 'bg-fuchsia-500'
	}
];

type CountriesChartProps = {
	countryData: (Prisma.PickEnumerable<
		Prisma.ImpressionGroupByOutputType,
		'country'[]
	> & {
		_count: number;
	})[];
};

const CountriesChart = ({ countryData }: CountriesChartProps) => {
	return (
		<Card className='col-span-2'>
			<CardHeading>Countries</CardHeading>
			<DonutChart
				className='h-64'
				variant='donut'
				index='country'
				data={countryData}
				category='_count'
				colors={['purple-700', 'purple-500', 'purple-300', 'purple-100']}
			/>
			<List className='mt-2'>
				{data.map((item) => (
					<ListItem
						key={item.country}
						className='space-x-6'
					>
						<div className='flex items-center space-x-2.5 truncate'>
							<span
								className={cn(item.color, 'h-2.5 w-2.5 shrink-0 rounded-sm')}
								aria-hidden={true}
							/>
							<span className='truncate dark:text-dark-tremor-content-emphasis'>
								{item.country}
							</span>
						</div>
						<div className='flex items-center space-x-2'>
							<span className='font-medium tabular-nums text-tremor-content-strong dark:text-dark-tremor-content-strong'>
								{item.impressions}
							</span>
							<span className='rounded-tremor-small bg-tremor-background-subtle px-1.5 py-0.5 text-tremor-label font-medium tabular-nums text-tremor-content-emphasis dark:bg-dark-tremor-background-subtle dark:text-dark-tremor-content-emphasis'>
								{item.share}
							</span>
						</div>
					</ListItem>
				))}
			</List>
		</Card>
	);
};

export default CountriesChart;
