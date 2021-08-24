import React, { FC } from "react";
import { IHero } from "../components/Hero";
import Layout from "../components/layout";

const Projects: FC = () => {
  const heroProps:IHero = {
    title: "Projects"
  }
  return (
    <Layout hero={heroProps}>
      <h1>Projects page is under construction</h1>
      <p>Check back later</p>
    </Layout>
    );
};

export default Projects;
