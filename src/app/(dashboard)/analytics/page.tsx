import Card from '@/components/Card';
import prisma from '@/services/prisma';
import { getEmail } from '@/utils/user';
import PageHeader from '@/components/PageHeader';
import PageContainer from '@/components/PageContainer';
import { DonutChart, Color, BarChart, ListItem, List } from '@tremor/react';
import CardHeading from '@/components/CardHeading';
import CountriesChart from './CountriesChart';

async function fetchData() {
	const email = await getEmail();
	const lastSeventhDate = new Date();
	lastSeventhDate.setDate(lastSeventhDate.getDate() - 7);

	return await Promise.all([
		prisma.impression.groupBy({
			by: ['browser'],
			orderBy: {},
			_count: true,
			where: {
				link: {
					User: {
						email
					}
				}
			}
		}),

		prisma.impression.groupBy({
			by: ['device'],
			orderBy: {},
			_count: true,
			where: {
				link: {
					User: {
						email
					}
				}
			}
		}),

		prisma.impression.groupBy({
			by: ['os'],
			orderBy: {},
			_count: true,
			where: {
				link: {
					User: {
						email
					}
				}
			}
		}),

		prisma.impression.groupBy({
			by: ['country'],
			orderBy: {},
			_count: true,
			where: {
				link: {
					User: {
						email
					}
				}
			}
		}),

		// Grouping Impressions by Date
		prisma.impression.aggregateRaw({
			pipeline: [
				// {
				// 	$match: {
				// 		timestamp: { $gte: lastSeventhDate }
				// 	}
				// },
				{
					$project: {
						yearMonthDay: {
							$dateToString: { format: '%Y-%m-%d', date: '$timestamp' }
						}
					}
				},
				{
					$group: {
						_id: '$yearMonthDay',
						count: { $sum: 1 }
					}
				},
				{
					$sort: { _id: 1 }
				}
			]
		})
	]);
}



const AnalyticsPage = async () => {
	const [browserData, deviceData, OsData, countryData, impressionData] =
		await fetchData();
	console.log(impressionData);
	return (
		<PageContainer>
			<PageHeader
				heading='Analytics'
				subheading='Get a brief insights to boost your revenue'
			/>

			<div className='flex flex-col gap-6'>
				<div className='grid grid-cols-5 gap-6'>
					{/* Country */}
					<CountriesChart countryData={countryData} />

					<div className='flex col-span-3 flex-col gap-6'>
						{/* Operating System */}
						<Card>
							<CardHeading>Operating Systems</CardHeading>
							<DonutChart
								className='h-64'
								variant='pie'
								index='os'
								data={OsData}
								category='_count'
								colors={[
									'purple-700',
									'purple-500',
									'purple-300',
									'purple-100'
								]}
							/>
						</Card>

						{/* Browser */}
						<Card>
							<CardHeading>Browsers</CardHeading>
							<DonutChart
								className='h-64'
								variant='pie'
								index='browser'
								data={browserData}
								category='_count'
								colors={[
									'purple-700',
									'purple-500',
									'purple-300',
									'purple-100'
								]}
							/>
						</Card>
					</div>
				</div>
				<div className='grid grid-cols-5 gap-6'>
					{/* Impressions */}
					<Card className='col-span-3'>
						<CardHeading>Impressions</CardHeading>

						<BarChart
							data={Array(impressionData)}
							categories={['count']}
							index='_id'
						/>
					</Card>

					{/* Devices */}
					<Card className='col-span-2'>
						<CardHeading>Devices</CardHeading>

						<DonutChart
							showLabel
							index='browser'
							variant='donut'
							className='h-64'
							data={deviceData}
							category='_count'
							label='Device'
							colors={['purple-700', 'purple-500', 'purple-300', 'purple-100']}
						/>
					</Card>
				</div>
			</div>
		</PageContainer>
	);
};

export default AnalyticsPage;
