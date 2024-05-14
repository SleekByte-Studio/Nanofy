import Card from '@/components/Card';
import LinksTable from './LinksTable';
import prisma from '@/services/prisma';
import { Link } from '@prisma/client';
import { getServerSession } from 'next-auth';
import PageHeader from '@/components/PageHeader';
import PageContainer from '@/components/PageContainer';
import CardHeading from '@/components/CardHeading';

async function fetchLinks() {
	const session = await getServerSession();

	const links = await prisma.link.findMany({
		where: {
			User: {
				email: session?.user?.email!
			}
		},
		include: {
			_count: true
		}
	});

	return links.map(({ id, _count, destination, name, slug }) => ({
		id,
		name,
		slug,
		destination,
		impressions: _count.Impression,
	}));
}

const LinksPage = async () => {
	const links = await fetchLinks();
	return (
		<PageContainer>
			<PageHeader
				heading='Links'
				subheading='Shorten your urls to earn upto 20$'
			/>
			<Card>
				<CardHeading>Your Links</CardHeading>
				<LinksTable links={links} />
			</Card>
		</PageContainer>
	);
};

export default LinksPage;
