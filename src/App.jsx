import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import { Contact } from "./components/Contact";
function App() {
  return (
    <div className="font-primary">
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <Experience />
      <Achievements />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
