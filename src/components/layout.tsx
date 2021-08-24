import React, { ReactElement, ReactNode, FC } from "react";
import "./base.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Hero, {IHero} from "./Hero";

interface ILayout {
  children: (ReactNode | ReactElement)[] | (ReactNode | ReactElement);
  hero?: IHero;
}

const Layout: FC<ILayout> = ({ children, hero }) => {
  return (
    <>
    {/* Helment - SEO details */}
      <Navigation />
      <main>
        {hero && <Hero {...hero}/>}
        {children}
        </main>
      <Footer />
    </>
  );
};

export default Layout;
