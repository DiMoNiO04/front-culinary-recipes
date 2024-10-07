import React from 'react';
import Link from 'next/link';
import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/components/icons';
import socialLinks from '@/data/socials';
import styles from './Socials.module.scss';

interface ISocials {
  facebook?: string;
  twitter?: string;
  instagram?: string;
}

const Socials: React.FC<ISocials> = ({
  facebook = socialLinks.facebook,
  twitter = socialLinks.twitter,
  instagram = socialLinks.instagram,
}) => {
  const links = [
    { href: facebook, icon: <FacebookIcon />, key: 'facebook' },
    { href: twitter, icon: <TwitterIcon />, key: 'twitter' },
    { href: instagram, icon: <InstagramIcon />, key: 'instagram' },
  ];

  return (
    <div className={styles.icons}>
      {links.map(
        ({ href, icon, key }) =>
          href && (
            <Link href={href} className={styles.icon} key={key}>
              {icon}
            </Link>
          )
      )}
    </div>
  );
};

export default Socials;
