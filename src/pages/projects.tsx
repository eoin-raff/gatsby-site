import React, { FC } from "react";
import { IHero } from "../components/Hero";
import Layout from "../components/layout";
import Section from "../components/Section"

const Projects: FC = () => {
  const heroProps:IHero = {
    title: "Projects"
  }
  return (
    <Layout>
      <Section>
      <h1>Projects page is under construction</h1>
      <p>Check back later</p>
      </Section>
    </Layout>
    );
};

export default Projects;
