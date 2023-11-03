import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './globals.css';

const rubik = Rubik({ subsets: ['latin'], weight: ['300', '400', '500'] });

export const metadata: Metadata = {
  title: 'Time-Tracking Dashboard',
  description: 'Project solution for Frontend Mentor',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
