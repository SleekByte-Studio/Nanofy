import CPM from '@/constants/cpm';
import LinksTable from './LinksTable';
import prisma from '@/services/prisma';
import { getEmail } from '@/utils/user';
import StatCard from '@/components/StatCard';
import PageHeader from '@/components/PageHeader';
import PageContainer from '@/components/PageContainer';
import { formatNumber } from '@/utils/number';

async function fetchData() {
	const email = await getEmail();

	const [linksData, activeLinks, impressions, impressionsByCountry, balance] =
		await Promise.all([
			prisma.link.findMany({
				where: {
					User: {
						email
					}
				},
				include: {
					_count: true
				},
				orderBy: {
					Impression: {
						_count: 'desc'
					}
				},
				take: 8
			}),

			// Active Links Count
			prisma.link.count({
				where: {
					User: {
						email
					}
				}
			}),

			// Impressions Count
			prisma.impression.count({
				where: {
					link: {
						User: {
							email
						}
					}
				}
			}),

			// Impressions by Country
			prisma.impression.groupBy({
				by: 'country',
				orderBy: {}
			}),

			prisma.user.findUnique({
				where: {
					email
				},
				select: {
					balance: true
				}
			})
		]);

	let totalCPM = 0;
	impressionsByCountry.forEach((impression) => {
		totalCPM += CPM[impression.country!];
	});

	return {
		balance: balance?.balance,
		activeLinks,
		impressions,
		averageCPM: totalCPM / impressionsByCountry.length,

		// Formatting Links
		links: linksData.map(({ id, _count, destination, name, slug }) => ({
			id,
			name,
			slug,
			destination,
			impressions: _count.Impression,
			revenue: (_count.Impression * (40 * 82)) / 1000
		}))
	};
}

const DashboardPage = async () => {
	const { links, activeLinks, averageCPM, impressions, balance } =
		await fetchData();
	return (
		<PageContainer>
			<PageHeader
				heading='Dashboard'
				subheading='Get an minimal overview of this month'
			/>
			<div className='grid grid-cols-4 gap-x-8'>
				<StatCard
					icon='/dashboard/dollar.svg'
					label='Balance'
					value={`₹ ${balance || 0}`}
				/>
				<StatCard
					icon='/dashboard/eye.svg'
					label='Impressions'
					value={formatNumber(impressions)}
				/>
				<StatCard
					icon='/dashboard/link.svg'
					label='Active Links'
					value={activeLinks}
				/>
				<StatCard
					icon='/dashboard/cursor.svg'
					label='Average CPM'
					value={`₹ ${averageCPM}`}
				/>
			</div>

			<LinksTable links={links} />
		</PageContainer>
	);
};

export default DashboardPage;
