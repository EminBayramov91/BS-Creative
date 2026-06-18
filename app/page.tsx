import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Gallery from "./_components/Gallery";
import About from "./_components/About";
import Logos from "./_components/Logos";
import MissionVision from "./_components/MissionVision";
import Team from "./_components/Team";
import Services from "./_components/Services";
import Portfolio from "./_components/Portfolio";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Gallery />
        <About />
        <Logos />
        <MissionVision />
        <Team />
        <Services />
        <Portfolio />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
