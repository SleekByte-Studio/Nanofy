import prisma from '@/services/prisma';
import { getServerSession } from 'next-auth';

// Extracting logged in user's email from session and
// Fetching data using email from Database
export async function getUser() {
	const session = await getServerSession();
	const email = session?.user?.email!;

	const user = await prisma.user.findUnique({
		where: {
			email
		}
	});

	return user;
}

export async function getEmail() {
	const session = await getServerSession();
	const email = session?.user?.email!;
	return email;
}
