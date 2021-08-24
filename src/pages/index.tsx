import React from "react";
import Layout from "../components/layout";
import { IHero } from "../components/Hero"

interface ISiteIndex {
  siteTitle: string;
}

const heroProps:IHero = {
  title: "Eoin Rafferty",
  subtitle: "Frontend Developer"
}

const SiteIndex: React.FC<ISiteIndex> = ({ siteTitle }) => {
  return (
    <>
      <Layout hero={heroProps}>
        <h1>Test</h1>
        <p>Check back later</p>
      </Layout>
    </>
  );
};

export default SiteIndex;
