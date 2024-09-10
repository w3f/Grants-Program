import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';

const buttonLinks = [
  { to: './docs/Process/how-to-apply', text: 'Apply', className: styles.buttonDark },
  { to: './docs/office-hours', text: 'Office Hours' },
  { to: './docs/rfps', text: 'Browse RFPs' },
  { to: 'https://futures.web3.foundation', text: 'Decentralized Futures ↗', className: styles.buttonCustom },
  { to: 'https://jam.web3.foundation', text: 'JAM Prize ↗', className: styles.buttonCustom },
];

function HomepageHeader({ siteConfig }) {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="img/web3 foundation grants_black.jpg" alt="Web3 Foundation Grants" width="500" height="300" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          {buttonLinks.map((link, idx) => (
            <Link
              key={idx}
              className={clsx("button button--secondary button--lg", link.className || "")}
              to={link.to}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Web3 Foundation Grants">
      <HomepageHeader siteConfig={siteConfig} />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
