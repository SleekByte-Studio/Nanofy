import Card from '@/components/Card';
import PageHeader from '@/components/PageHeader';
import PageContainer from '@/components/PageContainer';
import LinksTable from './LinksTable';

const LinksPage = () => {
	return (
		<PageContainer>
			<PageHeader
				heading='Links'
				subheading='Shorten your urls to earn upto 20$'
			/>
			<Card>
				<div className='py-3 px-4'>
					<div className='relative max-w-xs'>
						<h3 className='text-xl font-semibold'>Active Links</h3>
					</div>
				</div>
				<LinksTable />
			</Card>
		</PageContainer>
	);
};

export default LinksPage;
