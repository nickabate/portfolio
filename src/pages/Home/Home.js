import "./Home.scss";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Portfolio />
        <Skills />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
