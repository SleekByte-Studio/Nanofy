import { config } from '@/config/next-auth';
import NextAuth from 'next-auth/next';

export const GET = NextAuth(config);
export const POST = NextAuth(config);
