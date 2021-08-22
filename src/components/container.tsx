import React, { ReactElement, ReactNode } from "react";

interface IContainer {
  children: Array<ReactElement | ReactNode>
}

const styles = {
  root: { 
    maxWidth: 1180, 
    margin: "0 auto" 
  }
}

const Container: React.FC<IContainer> = ({ children }) => {
  return <div style={{...styles.root}}>{children}</div>;
};

export default Container