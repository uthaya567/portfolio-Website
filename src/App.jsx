import Navbar from "./components/Navbar";
import "./App.css"
import HeroCarousel from "./components/HeroCarousel";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
export default function App() {
  return (
    <>
      <Navbar />
	  <section id="home">
		<HeroCarousel />
	  </section>
	  <section id="about">
		<About />
	  </section>
	  <section id="resume">
		<Resume />
	  </section>
	  <section id="projects">
		<Projects />
	  </section>
	  <section id="contact">
		<Contact />
	  </section>
	  <Footer />
    </>
  );
}
