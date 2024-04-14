type PageHeaderProps = {
	heading: string;
	subheading: string;
};

const PageHeader = ({ heading, subheading }: PageHeaderProps) => {
	return (
		<div>
			<h1 className='text-3xl font-semibold text-violet-950'>{heading}</h1>
			<h2 className='text-violet-600 text-lg font-medium'>{subheading}</h2>
		</div>
	);
};

export default PageHeader;
