import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className="hero__title gradient-text">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg glow"
              to="/docs/en/module-01-foundations/chapter-01-what-is-physical-ai">
              Start Reading → 📚
            </Link>
          </div>
          <div className={styles.robotIllustration}>
            <svg
              className={styles.robotSvg}
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke="var(--accent-cyan)" strokeWidth="2">
                {/* Robot head */}
                <rect x="80" y="40" width="40" height="50" rx="10" stroke="var(--accent-cyan)" />
                {/* Robot eyes */}
                <circle cx="95" cy="60" r="3" fill="var(--accent-cyan)" />
                <circle cx="105" cy="60" r="3" fill="var(--accent-cyan)" />
                {/* Robot body */}
                <rect x="75" y="90" width="50" height="60" rx="15" stroke="var(--accent-purple)" />
                {/* Robot arms */}
                <line x1="65" y1="100" x2="45" y2="120" stroke="var(--accent-pink)" strokeWidth="3" />
                <line x1="135" y1="100" x2="155" y2="120" stroke="var(--accent-pink)" strokeWidth="3" />
                {/* Robot legs */}
                <line x1="85" y1="150" x2="85" y2="170" stroke="var(--accent-purple)" strokeWidth="3" />
                <line x1="115" y1="150" x2="115" y2="170" stroke="var(--accent-purple)" strokeWidth="3" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
