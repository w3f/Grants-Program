import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import CountUp from 'react-countup';


const FeatureList = [
  {
    title: 1500,
    description: (
      <>applications
      </>
    ),
  },
  {
    title: 600,
    description: (
      <>projects funded
      </>
    ),
  },
  {
    title: 54,
    description: (
      <>countries
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className="number--count"><CountUp end={title} />+</h3>
        <p className="number--title">{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
