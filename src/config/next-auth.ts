import { hash, compare } from 'bcrypt';
import prisma from '@/services/prisma';
import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';

export const config: NextAuthOptions = {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!
		}),
		CredentialsProvider({
			name: 'Email',
			credentials: {
				email: {
					label: 'Email',
					type: 'text'
				},
				password: {
					label: 'Password',
					type: 'password'
				}
			},
			async authorize(credentials) {
				const email = credentials?.email!;
				const password = credentials?.password!;
				console.log(email, password)

				const user = await prisma.user.findUnique({
					where: {
						email
					}
				});

				// Return null if user already SignedUp with Google
				if (user?.authenticationMode !== 'EMAIL') return null;

				// Returns user if entered password in correct
				if (await compare(password, user.password!)) {
					console.log(true)
					return user;
				}
				console.log(false)

				return null;
			}
		})
	],
	callbacks: {
		async signIn(params) {
			await prisma.user.upsert({
				update: {
					image: params.user.image,
					name: params.user.name!
				},
				create: {
					password: null,
					email: params.user.email!,
					authenticationMode: 'GOOGLE',
					name: params.user.name || params.user.email?.split('@')[0]!, // Using the text section before '@' in email

					profile: {}
				},
				where: {
					email: params.user.email!
				}
			});
			return true;
		}
	}
};
