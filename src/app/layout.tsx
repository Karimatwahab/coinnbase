import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ChatwayWidget from '@/components/ChatwayWidget';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Coinbase Help Center',
  description: 'Get help with your Coinbase account',
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
