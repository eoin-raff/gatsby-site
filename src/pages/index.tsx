import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";

interface ISiteIndex {
  siteTitle: string;
}

const SiteIndex: React.FC<ISiteIndex> = ({ siteTitle }) => {
  return (
    <>
      <Layout>
        <h1>Test</h1>
      </Layout>
    </>
  );
};

export default SiteIndex;
