import { Chat, ContactForm, Footer, Navigation } from "@/components/components";

export default function Home() {
  return (
    <div className="App text-white min-h-screen">
      <Navigation />
      <>
        {/* <ContactForm contactPage/> */}
        <Chat />
        {/* <Footer /> */}
      </>
    </div>
  );
}
