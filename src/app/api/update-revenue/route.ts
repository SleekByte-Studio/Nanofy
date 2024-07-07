import CPM from '@/constants/cpm';
import prisma from '@/services/prisma';

export async function GET() {
	// Today's Date with time 12:00 am
	const date = new Date();
	date.setDate(date.getDate());

	const users = await prisma.user.findMany();
	users.forEach(async (user) => {
		let currentDayRevenue = 0;

		const impressionsCount = await prisma.impression.count({
			where: {
				link: {
					userId: user.id
				}
			}
		});

		const impressionsByCountry = await prisma.impression.groupBy({
			by: 'country',
			_count: true,
			where: {
				link: {
					userId: user.id
				}
			}
		});

		impressionsByCountry.forEach((impression) => {
			if (impression.country) {
				currentDayRevenue +=
					impression._count * (CPM[impression.country] / 1000);
			}
		});

		const averageCPM = (currentDayRevenue * 1000) / impressionsCount;
		await prisma.user.update({
			where: {
				id: user.id
			},
			data: {
				averageCPM,
				balance: {
					increment: currentDayRevenue
				}
			}
		});
	});
}
