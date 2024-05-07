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
				fullName: {
					label: 'Full Name',
					type: 'text'
				},
				email: {
					label: 'Email',
					type: 'text'
				},
				password: {
					label: 'Password',
					type: 'password'
				}
			},
			async authorize(credentials, req) {
				const name = credentials?.fullName!;
				const email = credentials?.email!;
				const password = credentials?.password!;

				// Checks is the user already present
				try {
					const user = await prisma.user.findUnique({
						where: {
							email: credentials?.email
						}
					});
					// Return null if user already logged in with Google
					if (user?.authenticationMode !== 'EMAIL') return null;

					// Returns user if entered password in correct
					if (await compare(password, user.password!)) {
						return user;
					}

					return null;
				} catch {
					const hashedPassword = await hash(password!, 8);

					return await prisma.user.create({
						data: {
							name,
							email,
							password: hashedPassword,
							authenticationMode: 'EMAIL'
						}
					});
				}
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

					profile: {
							
					}
				},
				where: {
					email: params.user.email!
				}
			});
			return true;
		}
	}
};

