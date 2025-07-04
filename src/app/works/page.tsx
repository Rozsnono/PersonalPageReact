import { About, ContactForm, Footer, Navigation, Ticker, WorksPage } from "@/components/components";

export default function Home() {
    return (
        <div className="App text-white min-h-screen">
            <Navigation />
            <>
                <WorksPage />
                <About />
                <Ticker />
                <ContactForm />
                <Footer />
            </>
        </div>
    );
}
