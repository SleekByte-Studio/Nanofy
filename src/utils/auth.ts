import type {
	NextApiRequest,
	NextApiResponse,
	GetServerSidePropsContext
} from 'next';
import { getServerSession } from 'next-auth';
import { config } from '@/config/next-auth';

export function auth(
	...args:
		| [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
		| [NextApiRequest, NextApiResponse]
		| []
) {
	return getServerSession(...args, config);
}
