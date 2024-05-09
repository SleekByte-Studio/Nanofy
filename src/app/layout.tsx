import './globals.css';
import { manrope } from '@/fonts';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
	title: 'Nanofy',
	description: 'Shorten Your URLs',
	keywords: 'url shortener, earn money online, make money, money earning app'
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1.0'
				/>
			</head>
			<body style={manrope.style}>{children}</body>
		</html>
	);
}
