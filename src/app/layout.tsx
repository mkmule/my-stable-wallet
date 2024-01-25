import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Stablecoin Wallet',
  description: 'Simplified stablecoin wallet overview page using Next.',
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/dashboard', label: 'Dashboard' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <body className={`${inter.className} min-h-screen flex flex-col`}>
    <header className="py-8 px-16 border-b border-black">
      <nav>
        <ul className="flex justify-center items-center">
          {links.map(({ label, href }) => (
            <li key={href} className="px-4 text-2xl"><Link href={href}>{label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
    <main className="flex-grow container mx-auto">
      {children}
    </main>
    <footer className="py-8 px-16 border-t border-black">
      <p>Lorem ipsum copyrights 2024</p>
    </footer>
    </body>
    </html>
  );
}
