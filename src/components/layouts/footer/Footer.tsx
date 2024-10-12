'use client';

import React, { useState } from 'react';
import styles from './Footer.module.scss';
import { Socials } from '@/components/ui';
import { LogoIcon } from '@/components/icons';
import Link from 'next/link';

const menuBlocksData = [
  {
    title: 'Tastebite',
    links: [
      { text: 'About us', href: '#' },
      { text: 'Careers', href: '#' },
      { text: 'Contact Us', href: '#' },
      { text: 'Feedback', href: '#' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Terms', href: '#' },
      { text: 'Conditions', href: '#' },
      { text: 'Cookies', href: '#' },
      { text: 'Copyright', href: '#' },
    ],
  },
  {
    title: 'Follow',
    links: [
      { text: 'Facebook', href: '#' },
      { text: 'Twitter', href: '#' },
      { text: 'Instagram', href: '#' },
      { text: 'Youtube', href: '#' },
    ],
  },
];

const Footer: React.FC = () => {
  const [openBlocks, setOpenBlocks] = useState(() =>
    menuBlocksData.reduce(
      (acc, block) => {
        acc[block.title] = false;
        return acc;
      },
      {} as Record<string, boolean>
    )
  );

  const toggleBlock = (title: string) => {
    setOpenBlocks((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.topLeft}>
            <LogoIcon className={styles.logo} />
            <p className={styles.topText}>
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment
            </p>
          </div>
          <ul className={styles.menu}>
            {menuBlocksData.map((block) => (
              <li key={block.title} className={`${styles.menuBlock} ${openBlocks[block.title] ? styles.open : ''}`}>
                <div className={styles.menuBlockTitle} onClick={() => toggleBlock(block.title)}>
                  {block.title}
                </div>
                <ul className={`${styles.menuBlockList}`}>
                  {block.links.map((link) => (
                    <li key={link.text}>
                      <Link href={link.href}>{link.text}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom}>
          <p className={styles.year}>© 2024 Tastebite - All rights reserved</p>
          <Socials color={'#7F7F7F'} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
