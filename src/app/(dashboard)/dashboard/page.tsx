import CPM from '@/constants/cpm';
import LinksTable from './LinksTable';
import prisma from '@/services/prisma';
import { getEmail } from '@/utils/user';
import StatCard from '@/components/StatCard';
import PageHeader from '@/components/PageHeader';
import PageContainer from '@/components/PageContainer';

async function fetchData() {
	const email = await getEmail();

	const [linksData, activeLinks, impressions, impressionsByCountry] =
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

			// Average CPM
			prisma.impression.groupBy({
				by: 'country',
				orderBy: {}
			})
		]);

	let averageCPM = 0;
	impressionsByCountry.forEach((impression) => {
		averageCPM += CPM[impression.country!];
	});

	return {
		// Formatting Links
		links: linksData.map(({ id, _count, destination, name, slug }) => ({
			id,
			name,
			slug,
			destination,
			impressions: _count.Impression,
			revenue: (_count.Impression * (40 * 82)) / 1000
		})),
		activeLinks,
		impressions,
		revenue: averageCPM * impressions
	};
}

const DashboardPage = async () => {
	const { links, activeLinks } = await fetchData();
	return (
		<PageContainer>
			<PageHeader
				heading='Dashboard'
				subheading='Shorten your urls to earn upto 20$'
			/>
			<div className='grid grid-cols-4 gap-x-8'>
				<StatCard
					icon='/dashboard/dollar.svg'
					label='Revenue'
					value='₹ 432'
				/>
				<StatCard
					icon='/dashboard/eye.svg'
					label='Impressions'
					value='3233'
				/>
				<StatCard
					icon='/dashboard/link.svg'
					label='Active Links'
					value={activeLinks}
				/>
				<StatCard
					icon='/dashboard/cursor.svg'
					label='Average CPM'
					value='₹ 0.40'
				/>
			</div>

			<LinksTable links={links} />
		</PageContainer>
	);
};

export default DashboardPage;
