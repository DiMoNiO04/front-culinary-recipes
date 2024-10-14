'use client';

import React, { useState, useEffect } from 'react';
import { SearchIcon } from '@/components/icons';
import { EButtonType } from '@/components/ui';
import { SearchPanel } from '@/components/layouts';
import styles from './SearchToggle.module.scss';

const SearchToggle: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchToggle = () => setIsSearchOpen((prev) => !prev);

  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isSearchOpen]);

  return (
    <>
      <button type={EButtonType.BUTTON} className={styles.searchBtn} onClick={handleSearchToggle}>
        <SearchIcon />
      </button>
      <SearchPanel onClose={handleSearchToggle} isOpen={isSearchOpen} />
    </>
  );
};

export default SearchToggle;
