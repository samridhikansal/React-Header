import React from "react";
import { Route } from "react-router-dom";

// import pages from pages directory

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Work from "./pages/Work";

//import component called nav from the components directory

import Nav from "./components/nav.js";

const Main = () => {
  return (
    <div className="container">
      <div>
        <Nav />
      </div>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/blog" component={Blog} />
        <Route path="/work" component={Work} />
      </div>
    </div>
  );
};

export default Main;
