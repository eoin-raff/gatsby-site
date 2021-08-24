import React from "react";
import { Link } from "gatsby";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { useScroll } from "../../hooks";
import { useEffect } from "react";

const useStyles = makeStyles(() => {
  return {
    root: {
      padding: "0",
      margin: "0",
      height: "20vh",
      maxHeight: "100px",
      fontSize: "1.25em",
      position: "fixed",
      width: "100%",
      backgroundColor: "#4b3da5",

    },
    light: {
      color: "#4b3da5",
    },
    dark: {
      color: "#d3e6ea",
    },
    navigation: {
      justifyContent: "center",
      display: "flex",
      listStyle: "none",
    },
    visible: {
      visibility: "visible",
      transition: "all 0.5s",
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)",
    },
    navigationItem: {
      display: "inlineFlex",
      alignSelf: "center",
      margin: "0 1em",
    },
    navigationItemLink: {
      color: "currentColor",
    },
  };
});

interface INavigation {
  darkMode?: boolean;
}

export const Navigation: React.FC<INavigation> = ({ darkMode = true }) => {
  const classes = useStyles();
  const { scrollDirection } = useScroll();
  const [isVisible, setIsVisible] = useState(true);

  //only update navbar visiblity if scroll direction changes
  useEffect(() => {
    setIsVisible(scrollDirection === "down");
  }, [scrollDirection]);

  //manually set visiblity on initial load, as default value for scrollDirection is "up"
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav
      role="navigation"
      className={`${classes.root} ${darkMode ? classes.dark : classes.light} ${
        isVisible ? classes.visible : classes.hidden
      }`}
    >
      <ul className={classes.navigation}>
        <li className={classes.navigationItem}>
          <Link className={classes.navigationItemLink} to="/">
            Home
          </Link>
        </li>
        <li className={classes.navigationItem}>
          <Link className={classes.navigationItemLink} to="/projects/">
            Projects
          </Link>
        </li>
        <li className={classes.navigationItem}>
          <Link className={classes.navigationItemLink} to="/contact/">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
