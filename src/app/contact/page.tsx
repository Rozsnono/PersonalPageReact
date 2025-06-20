import { ContactForm, Footer, Navigation } from "@/components/components";

export default function Home() {
  return (
    <div className="App text-white min-h-screen">
      <Navigation />
      <>
        <ContactForm contactPage/>
        <div className="fixed bottom-0 w-full">
          <Footer />
        </div>
      </>
    </div>
  );
}
