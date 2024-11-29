import Image from 'next/image';
import Link from 'next/link';

import HeaderClient from './HeaderClient';

const Header = () => (
  <nav className="cHeader shadow-black-500/10 absolute left-0 top-0 z-40 flex h-16 w-screen justify-between bg-white bg-opacity-90 shadow-lg">
    <div className="p-4">
      <Link href="/">
        <Image src="/unity-logo.png" width={32} height={32} alt="Unity Logo" />
      </Link>
    </div>
    <HeaderClient />
  </nav>
);

export default Header;
