import Ticker, { About, ContactForm, Experience, FAQ, Footer, Hero, Navigation, Skills } from "@/components/components";

export default function Home() {
  return (
    <div className="App text-white min-h-screen">
      <Navigation />
      <>
        <Hero />
        <About />
        <Ticker />
        <Skills />
        <Experience />
        <FAQ />
        <ContactForm />
        <Footer />
      </>
    </div>
  );
}
