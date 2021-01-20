import * as React from "react";
import { useHistory } from "react-router-dom";
import Container from "../container";
import SearchInput from "../search-input";
import "./hero.css";

const Hero = () => {
  const history = useHistory();
  const pathname = history.location.pathname;

  return (
    <div className="hero__centralize hero__root">
      <Container>
        {pathname === "/" ||
          (pathname === "/mini-unsplash/" && <SearchInput />)}
        {pathname !== "/" && pathname !== "/mini-unsplash/" && (
          <h1>Search Results for "{pathname.substring(1)}"</h1>
        )}
      </Container>
    </div>
  );
};

export default Hero;
