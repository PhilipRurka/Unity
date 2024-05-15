import clsx from 'clsx';
import type { Metadata } from 'next';
import { Lexend, Montserrat } from 'next/font/google';

import Header from '@/Components/Header';
import HierarchyNav from '@/Components/HierarchyNav';
import getByContentModel from '@/Fetchers/contentful/getByContentModel';
import HeaderContextProvider from '@/Providers/contexts/HeaderContextProvider';
import HierarchyNavContextProvider from '@/Providers/contexts/HierarchyNavContextProvider';
import '@/Styles/globals.css';
import { HierarchyLayoutType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

const lexend = Lexend({
  weight: ['300', '500'],
  style: 'normal',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lexend',
});

export const montserrat = Montserrat({
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
  const [hierarchyLayout] = (await getByContentModel('hierarchyLayout')) as HierarchyLayoutType[];

  return (
    <html lang="en">
      <body
        className={clsx(
          'relative h-full min-h-screen w-screen overflow-x-hidden bg-layout bg-cover bg-fixed bg-bottom bg-no-repeat text-ocean-blue',
          lexend.variable,
          montserrat.variable
        )}
      >
        <HierarchyNavContextProvider>
          <HeaderContextProvider>
            <Header />
            <HierarchyNav hierarchyLayout={hierarchyLayout} />
            <main className="py-16">{children}</main>
          </HeaderContextProvider>
        </HierarchyNavContextProvider>
      </body>
    </html>
  );
}
