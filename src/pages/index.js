import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import KudosLogo from '../../static/img/kudos-white.svg'

const sections = [
  {
    title: 'Installation',
    href: './docs/installation/requirements',
    description: 'Check the requirements, install the plugin, and set up your first campaign.',
  },
  {
    title: 'Campaigns',
    href: './docs/campaigns',
    description: 'Create and configure campaigns, set goals, customise themes, and embed donation forms.',
  },
  {
    title: 'Plus',
    href: './docs/plus',
    description: 'Unlock advanced features: dashboard, CSV exports, custom branding, and newsletter integrations.',
  },
  {
    title: 'Developers',
    href: './docs/developers/hooks',
    description: 'Extend and integrate Kudos Donations using the available actions, filters, and hooks.',
  },
];

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description="Kudos Donations documentation">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div style={{width: '18vw', minWidth: '160px', margin: '0 auto 1rem'}}><KudosLogo /></div>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.sectionGrid}>
            {sections.map(({title, href, description}) => (
              <Link key={title} to={href} className={styles.sectionCard}>
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
              </Link>
            ))}
          </div>
        </div>
      </header>
    </Layout>
  );
}