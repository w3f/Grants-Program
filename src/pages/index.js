import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';



function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title} </h1> 
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}            
          style={{
            display: "block"
          }}
          >
          <div>
            <Link
              className="button button--secondary button--lg"
              to="./docs/Process/how-to-apply">
              Apply
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="./docs/rfps"
              style={{
                marginLeft: "20px"
              }}>
              Browse RFPs
            </Link>
          </div>
          <br />
          <div>
            <Link
              className="button button--secondary button--lg"
              to="https://futures.web3.foundation"
              style={{
                marginLeft: "20px",
                backgroundColor: "rgb(250, 250, 250)"
              }}>
              Decentralized Futures <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://jam.web3.foundation"
              style={{
                marginLeft: "20px",
                backgroundColor: "rgb(250, 250, 250)"
              }}>
              JAM Prize <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#666" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Web3 Foundation Grants">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
