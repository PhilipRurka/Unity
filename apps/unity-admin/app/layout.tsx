import clsx from 'clsx';
import type { Metadata } from 'next';
import { Lexend, Montserrat } from 'next/font/google';

import '@unity/styles/global.css';

import Header from '@/Components/Header';
import Sidebar from '@/Components/Sidebar';
import AuthProvider from '@/Providers/SessionProvider';
import SidebarProvider from '@/Providers/contexts/SidebarProvider';

export const fetchCache = 'default-no-store';

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
  metadataBase: new URL('https://www.admin.unitystory.info'),
  title: 'Unity Admin',
  robots: 'noindex, nofollow',
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang="en">
    <body
      className={clsx(
        'hide-scrollbar relative h-full min-h-screen w-screen overflow-x-hidden bg-white pt-16 text-ocean-blue',
        lexend.variable,
        montserrat.variable
      )}
    >
      <SidebarProvider>
        <AuthProvider>
          <Header />
          <Sidebar />
          <div className="padding mx-auto max-w-5xl bg-white px-6 pb-20 pt-32 sm:px-8 sm:py-16">{children}</div>
        </AuthProvider>
      </SidebarProvider>
    </body>
  </html>
);

export default RootLayout;
