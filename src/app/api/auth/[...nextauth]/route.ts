import { config } from '@/config/next-auth';
import NextAuth from 'next-auth/next';

const handler = NextAuth(config);
export { handler as GET, handler as POST };
