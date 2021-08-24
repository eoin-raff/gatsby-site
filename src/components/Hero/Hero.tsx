import React from "react";
import { makeStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

export interface IHero {
  title: string;
  subtitle?: string;
}

const useStyles = makeStyles(() => {
  return {
    hero: {
      height: "100vh",
      backgroundColor: "#4b3da5",
      color: "#d3e6ea",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

export const Hero: React.FC<IHero> = ({ title, subtitle }) => {
  const classes = useStyles();
  return (
    <section className={classes.hero}>
      <Typography variant="h1">{title}</Typography>
      {subtitle && (
        <Typography variant="subtitle1">{subtitle}</Typography>
      )}
    </section>
  );
};
