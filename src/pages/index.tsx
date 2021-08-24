import React from "react";
import Layout from "../components/layout";
import { IHero } from "../components/Hero";
import Section from "../components/Section";
import { makeStyles, Typography } from "@material-ui/core";
import { classes } from "istanbul-lib-coverage";
interface ISiteIndex {
  siteTitle: string;
}

const useStyles = makeStyles(()=>{
  return {
    textBlock: {
      margin: '24px'
    }
  }
})
const heroProps: IHero = {
  title: "Eoin Rafferty",
  subtitle: "Frontend Developer",
};


const SiteIndex: React.FC<ISiteIndex> = ({ siteTitle }) => {
  const classes = useStyles()
  return (
    <>
      <Layout hero={heroProps}>
        <Section>
          <Typography className={classes.textBlock}>Hi, I'm Eoin. I'm a developer from Ireland and based in Copenhagen. People give me money to make websites, but I also develop games, interactive experiences and VR applications</Typography>
          <Typography className={classes.textBlock}>I use React and Typescript for most of my frontend work. For backend I move between python and Node. For the fun stuff, I like to use Unity (C#) or Unreal Engine (C++)</Typography>
          <Typography className={classes.textBlock}>I've published some stuff about VR, Interactive Narratives and Procedural Generation</Typography>
        </Section>
      </Layout>
    </>
  );
};

export default SiteIndex;
