import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={`container`}>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ textAlign: "center" }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/blog">
            🔦
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Una página sobre linternas`}
      description="Una linterna o lámpara de mano es un aparato portátil de iluminación que funciona por medio de pilas o baterías eléctricas."
    >
      <HomepageHeader />
    </Layout>
  );
}
