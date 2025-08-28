import clsx from 'clsx';
import type { Metadata, Viewport } from 'next';
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
  metadataBase: new URL('https://www.unitystory.info'),
  title: 'Unity Compendium',
  description:
    'Immerse yourself in a meticulously crafted fantasy world filled with rich lore, breathtaking landscapes, and unique creations. Explore a universe brought to life through detailed world-building, where imagination and creativity shape every corner.',
  keywords: [
    'fantasy',
    'world-building',
    'Unity Compendium',
    'lore',
    'legend',
    'legends',
    'myth',
    'myths',
    'culture',
    'unity',
    'ceremony',
    'ceremonies',
    'conflict',
    'conflicts',
    'deity',
    'deities',
    'god',
    'gods',
    'art',
    'imagination',
    'creation',
  ],
  authors: { name: 'Philip Rurka' },
  creator: 'Philip Rurka',
  publisher: 'Philip Rurka',
  openGraph: {
    images: {
      url: 'https://www.unitystory.info/unity-logo.png',
      width: 650,
      height: 650,
      type: 'image/png',
    },
    locale: 'en_US',
    type: 'article',
    url: 'https://www.unitystory.info',
    siteName: 'Unity Compendium',
    authors: ['Philip Rurka'],
  },
  icons: {
    icon: '/unity-logo.png',
  },
  verification: {
    google: 'google',
  },
  assets: [
    'https://fonts.googleapis.com/css2?family=Lexend:wght@300;500&display=swap',
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap',
    '/layout-background.jpg',
    '/search-modal-background.jpg',
    '/unity-logo.png',
  ],
  category: 'Fantasy',
  alternates: {
    canonical: 'https://unitystory.info',
  },
  other: {
    jsonLd: JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'CreativeWorkSeries',
          name: 'Unity Compendium',
          description: 'Immerse yourself in a meticulously crafted fantasy world...',
          author: { '@type': 'Person', name: 'Philip Rurka' },
          creator: { '@type': 'Person', name: 'Philip Rurka' },
          publisher: { '@type': 'Person', name: 'Philip Rurka' },
          genre: 'Fantasy',
          keywords: ['fantasy', 'world-building', 'lore', 'Unity Compendium'],
          inLanguage: 'en-US',
          url: 'https://www.unitystory.info',
          image: 'https://www.unitystory.info/unity-logo.png',
          mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.unitystory.info' },
        },
        {
          '@type': 'WebSite',
          url: 'https://www.unitystory.info',
          name: 'Unity Compendium',
        },
        {
          '@type': 'Organization',
          name: 'Unity Compendium',
          url: 'https://www.unitystory.info',
          logo: 'https://www.unitystory.info/unity-logo.png',
        },
      ],
    }),
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CreativeWorkSeries',
      name: 'Unity Compendium',
      description: 'Immerse yourself in a meticulously crafted fantasy world...',
      author: { '@type': 'Person', name: 'Philip Rurka' },
      creator: { '@type': 'Person', name: 'Philip Rurka' },
      publisher: { '@type': 'Person', name: 'Philip Rurka' },
      genre: 'Fantasy',
      keywords: ['fantasy', 'world-building', 'lore', 'Unity Compendium'],
      inLanguage: 'en-US',
      url: 'https://www.unitystory.info',
      image: 'https://www.unitystory.info/unity-logo.png',
      mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://www.unitystory.info' },
    },
    {
      '@type': 'WebSite',
      url: 'https://www.unitystory.info',
      name: 'Unity Compendium',
    },
    {
      '@type': 'Organization',
      name: 'Unity Compendium',
      url: 'https://www.unitystory.info',
      logo: 'https://www.unitystory.info/unity-logo.png',
    },
  ],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#000000',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
