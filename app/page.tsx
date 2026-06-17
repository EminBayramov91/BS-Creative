import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
