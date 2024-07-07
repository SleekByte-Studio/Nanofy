import CPM from '@/constants/cpm';
import LinksTable from './LinksTable';
import prisma from '@/services/prisma';
import { getEmail, getUser } from '@/utils/user';
import StatCard from '@/components/StatCard';
import PageHeader from '@/components/PageHeader';
import PageContainer from '@/components/PageContainer';
import { formatNumber } from '@/utils/number';

async function fetchData() {
	const user = await getUser();

	const [linksData, activeLinks, impressions, impressionsByCountry, balance] =
		await Promise.all([
			prisma.link.findMany({
				where: {
					User: {
						email: user?.email
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
						email: user?.email
					}
				}
			}),

			// Impressions Count
			prisma.impression.count({
				where: {
					link: {
						User: {
							email: user?.email
						}
					}
				}
			}),

			// Impressions by Country
			prisma.impression.groupBy({
				by: 'country',
				orderBy: {},
				where: {
					link: {
						User: {
							email: user?.email
						}
					}
				}
			}),

			// Balance
			prisma.user.findUnique({
				where: {
					email: user?.email
				},
				select: {
					balance: true
				}
			})
		]);

	return {
		balance: balance?.balance,
		activeLinks,
		impressions,
		averageCPM: user?.averageCPM,

		// Formatting Links
		links: linksData.map(({ id, _count, destination, name, slug }) => ({
			id,
			name,
			slug,
			destination,
			impressions: _count.Impression,
			revenue: user?.averageCPM
				? _count.Impression * (user?.averageCPM / 1000)
				: 0
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
					value={`₹ ${averageCPM || 0}`}
				/>
			</div>

			<LinksTable links={links} />
		</PageContainer>
	);
};

export default DashboardPage;
