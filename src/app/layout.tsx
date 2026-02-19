import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ChatwayWidget from '@/components/ChatwayWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coinbase Help Center - Support and Knowledge Base',
  description: 'Get help with your Coinbase account, trading, and transactions. Find answers to common questions and contact support.',
  icons: {
    icon: '/coinLogo.png',
    apple: '/coinLogo.png',
  },
  openGraph: {
    title: 'Coinbase Help Center',
    description: 'Official Coinbase Support. Get help with your account, trading, taxes, and more.',
    images: [{
      url: '/coinLogo.png',
      width: 800,
      height: 600,
    }],
    siteName: 'Coinbase Help',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <ChatwayWidget />
      </body>
    </html>
  );
}
