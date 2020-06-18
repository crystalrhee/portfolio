import React from "react";
import Layout from "./components/layout";
import About from "./pages/about.js";
import Education from "./pages/education.js";
import Career from "./pages/career.js";
import Projects from "./pages/projects.js";
import Contact from './pages/contact.js';
import NotFound from './pages/404.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/portfolio">
          <About />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/career">
          <Career />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/*" >
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
