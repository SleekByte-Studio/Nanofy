import { cn } from '@/utils/cn';
import Card from '@/components/Card';
import { Prisma } from '@prisma/client';
import colors from '@/constants/colors';
import CardHeading from '@/components/CardHeading';
import countryCodes from '@/constants/country-codes';
import { DonutChart, ListItem, List } from '@tremor/react';

type CountriesChartProps = {
	countryData: (Prisma.PickEnumerable<
		Prisma.ImpressionGroupByOutputType,
		'country'[]
	> & {
		_count: number;
	})[];
	totalCount: number;
};

const CountriesChart = ({ countryData, totalCount }: CountriesChartProps) => {
	const data = countryData.map(({ _count, country }, index) => ({
		country: countryCodes[country!],
		impressions: _count,
		color: colors[index],
		share: `${Math.round((_count / totalCount) * 100)} %`
	}));
	return (
		<Card className='col-span-2'>
			<CardHeading>Countries</CardHeading>
			<DonutChart
				className='h-64'
				variant='donut'
				index='country'
				data={countryData}
				category='_count'
				colors={colors}
			/>
			<List className='w-full p-3 row-span-2 pan overflow-y-scroll'>
				{data.map((item) => (
					<ListItem
						key={item.country}
						className=''
					>
						<div className='flex items-center space-x-2.5 truncate'>
							<span
								className={cn(
									`bg-${item.color}`,
									'h-2.5 w-2.5 shrink-0 rounded-sm'
								)}
								aria-hidden={true}
							/>
							<span className='truncate'>{item.country}</span>
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
