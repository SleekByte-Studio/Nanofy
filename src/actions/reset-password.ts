'use server';
import { randomUUID } from 'crypto';
import { z } from 'zod';
import nodemailer from 'nodemailer';
import redis from '@/services/redis';
import prisma from '@/services/prisma';
import { dataToBase64, base64ToData } from '@/utils/encoding';

export async function resetPassword(formData: FormData) {
	const email = String(formData.get('email'));
	const secret = randomUUID();

	redis.set(email, secret, {
		EX: 60 * 1000 * 10
	});

	const code = dataToBase64({
		email,
		secret
	});

	const transporter = nodemailer.createTransport({
		// @ts-expect-error
		host: process.env.SMTP_HOST,
		port: process.env.SMTP_PORT,
		secure: false,
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD
		}
	});

	transporter.sendMail(
		{
			to: email,
			from: process.env.EMAIL_FROM,
			subject: 'Nanofy.in - Reset Password Request',
			html: `<h1>Reset Your Password Using : <a href="${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${code}">Reset Password</a></h1><p>This link is valid only for 10 minutes.</p>`
		},
		(err, info) => {
			return err?.message;
		}
	);
}

const newPasswordFormSchema = z.object({
	code: z.string(),
	newPassword: z.string().max(6, 'Password should be atleast 6 characters')
});

export async function setNewPassword(formData: FormData) {
	const { data, error } = newPasswordFormSchema.safeParse({
		code: formData.get('code'),
		newPassword: formData.get('password')
	});

	if (data) {
		const { email, secret } = base64ToData(data.code);
		const cachedSecret = await redis.get(email);

		if (cachedSecret === secret) {
			await prisma.user.update({
				data: {
					password: data.newPassword
				},
				where: {
					email
				}
			});

			return {
				status: 'success',
				error: null
			};
		}

		return {
			status: 'error',
			error: 'Unexpected Error Occured'
		};
	} else {
		return {
			status: 'error',
			error: error.errors[0].message
		};
	}
}
