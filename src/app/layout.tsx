import './globals.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { manrope } from '@/fonts';

export const metadata: Metadata = {
	title: 'Nanofy',
	description: 'Shorten Your URLs'
};

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html lang='en'>
			<body style={manrope.style}>{children}</body>
		</html>
	);
}
