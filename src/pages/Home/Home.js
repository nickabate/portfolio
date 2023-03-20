import "./Home.scss";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import Portfolio from "../../components/Portfolio/Portfolio";
import Skills from "../../components/Skills/Skills";
import Experience from "../../components/Experience/Experience";
import Footer from "../../components/Footer/Footer";

import scroll from "../../assets/images/tech/scroll.png";

export default function Home() {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);

    element.scrollIntoView({ behaviour: "smooth" });
  };

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="home__divider"></div>
        <Portfolio />
        {/* <div className="home__divider"></div> */}
        <Skills />
        {/* <div className="home__divider"></div> */}
        <Experience />
      </main>
      <img
        className="home__scroll"
        src={scroll}
        alt="Scroll up"
        onClick={() => {
          handleClickScroll("header");
        }}
      ></img>
      <Footer />
    </>
  );
}
