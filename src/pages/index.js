import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';



const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();

  const links = [
    {
      to: './docs/Process/how-to-apply',
      text: 'Apply',
      style: { backgroundColor: 'rgb(0, 0, 0)', color: 'rgb(250, 250, 250)' },
    },
    {
      to: './docs/office-hours',
      text: 'Office Hours',
    },
    {
      to: './docs/rfps',
      text: 'Browse RFPs',
    },
    {
      to: 'https://jam.web3.foundation',
      text: 'JAM Prize ↗',
      style: { backgroundColor: 'rgb(250, 250, 250)' },
    },
  ];

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src="img/web3 foundation grants_black.jpg" alt="Web3 Foundation Grants" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={clsx(styles.buttons, 'button-container')}>
          {links.map((link, index) => (
            <Link
              key={index}
              className="button button--secondary button--lg"
              to={link.to}
              style={{ marginLeft: '10px', marginBottom: '5px', ...link.style }}
            >
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="Web3 Foundation Grants">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
