import React from "react";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import QuickAccessCards from "./components/QuickAccessCards";
import About from "./components/About";
import Results from "./components/Results";
import Fixtures from "./components/Fixtures";
import Tournaments from "./components/Tournaments";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Sponsors from "./components/Sponsors";
import Join from "./components/Join";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="app-root">
      <Navbar />
      <MobileMenu />
      <main>
        <Hero />
        <QuickAccessCards />
        <About />
        <Results />
        <Fixtures />
        <Tournaments />
        <Team />
        <Gallery />
        <Sponsors />
        <Join />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
