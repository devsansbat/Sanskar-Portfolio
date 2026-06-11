import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import WhatImDoing from "./components/WhatImDoing";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Testimonials from "./components/Testimonials";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NoInternet from "./components/NoInternet";
import CopyProtection from "./components/CopyProtection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "0 28px" }}>
        <Hero />
        <About />
        <Qualifications />
        <WhatImDoing />
        <Skills />
        <Projects />
        <Certificates />
        <Testimonials />
        <Clients />
        <Contact />
        <Footer />
      </main>
      <NoInternet />
      <CopyProtection />
    </>
  );
}
