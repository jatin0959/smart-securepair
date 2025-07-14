import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import LayoutClient from '@/components/LayoutClient'; // the client-side loader wrapper

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata = {
  title: 'Jatin Dubey',
  icons: {
    icon: '/jatin.jpeg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
