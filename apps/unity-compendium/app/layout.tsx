import clsx from 'clsx';
import type { Metadata } from 'next';
import { Lexend, Montserrat } from 'next/font/google';

import '@unity/styles/global.css';

import HeaderServer from '@/Components/Header/HeaderServer';
import HierarchyNav from '@/Components/HierarchyNav';
import SearchModal from '@/Components/SearchModal';
import AuthProvider from '@/Providers/SessionProvider';
import HeaderContextProvider from '@/Providers/contexts/HeaderContextProvider';
import HierarchyNavContextProvider from '@/Providers/contexts/HierarchyNavContextProvider';

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

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={clsx(
          'hide-scrollbar relative h-full min-h-screen w-screen overflow-x-hidden bg-layout bg-cover bg-fixed bg-bottom bg-no-repeat text-ocean-blue',
          lexend.variable,
          montserrat.variable
        )}
      >
        <HierarchyNavContextProvider>
          <HeaderContextProvider>
            <AuthProvider>
              <SearchModal />
              <HierarchyNav />
              <HeaderServer />
              <div className="sm:px-6 sm:py-16">{children}</div>
            </AuthProvider>
          </HeaderContextProvider>
        </HierarchyNavContextProvider>
      </body>
    </html>
  );
}
