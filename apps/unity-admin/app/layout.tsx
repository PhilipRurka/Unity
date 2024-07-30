import clsx from 'clsx';
import type { Metadata } from 'next';
import { Lexend, Montserrat } from 'next/font/google';

import '@unity/styles/global.css';

const lexend = Lexend({
  weight: ['300', '500'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lexend',
});

const montserrat = Montserrat({
  weight: ['400', '500'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Unity Compendium',
  robots: 'noindex, nofollow',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body
      className={clsx(
        'relative h-full min-h-screen w-screen overflow-x-hidden text-ocean-blue',
        lexend.variable,
        montserrat.variable
      )}
    >
      <div className="sm:px-6 sm:py-16">{children}</div>
    </body>
  </html>
);

export default RootLayout;
