import React, { FC } from "react";
import { makeStyles } from "@material-ui/styles";
import { Link as GatsbyLink } from "gatsby";
import { Box, Container } from "@material-ui/core";

interface IFooter {}

const useStyles = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: "#218292",
      color: '#d3e6ea',
      flexShrink: 1,
      height: '20vh',
      maxHeight: '250px',
      display: 'flex'
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    link: {
      alignSelf: "center",
        display: "inlineFlex",
        margin: "0 1em",
        color: "currentColor",
    }
  };
});

export const Footer: FC<IFooter> = () => {
  const classes = useStyles();

  return <Box component="footer" className={classes.root}>
    <Container className={classes.container} maxWidth='md'>
      <GatsbyLink className={classes.link} to='#'>Github</GatsbyLink>
      <GatsbyLink className={classes.link} to='#'>LinkedIn</GatsbyLink>
      <GatsbyLink className={classes.link} to='#'>Twitter</GatsbyLink>
    </Container>
  </Box>;
};
