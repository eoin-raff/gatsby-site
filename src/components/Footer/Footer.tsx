import React, { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link } from "gatsby";

interface IFooter {}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: "#218292",
      color: '#d3e6ea',
      flexShrink: 3
    },
  };
});

export const Footer: FC<IFooter> = () => {
  const classes = useStyles();

  return <footer className={classes.root}>
      <Link to='#'>Github</Link>
      <Link to='#'>Twitter</Link>
  </footer>;
};
