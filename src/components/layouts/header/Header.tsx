'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { MainHeader, SecondHeader } from '..';

const Header: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return <>{isHomePage ? <MainHeader /> : <SecondHeader />}</>;
};

export default Header;
