import clsx from 'clsx';
import { forJsonLd, forMetaData } from 'constants/forLayout';
import type { Metadata, Viewport } from 'next';
import { Lexend, Montserrat } from 'next/font/google';

import '@unity/styles/global.css';

import HeaderServer from '@/Components/Header/HeaderServer';
import HierarchyNav from '@/Components/HierarchyNav';
import SearchModal from '@/Components/SearchModal';
import AuthProvider from '@/Providers/SessionProvider';
import HeaderContextProvider from '@/Providers/contexts/HeaderContextProvider';
import HierarchyNavContextProvider from '@/Providers/contexts/HierarchyNavContextProvider';

type RootLayoutProps = {
  children: React.ReactNode;
};

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
};

export const metadata: Metadata = forMetaData;

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(forJsonLd) }} />
      </head>
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
