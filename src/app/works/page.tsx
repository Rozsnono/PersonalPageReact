import Ticker, { About, Contact, Footer, Navigation, WorksPage } from "@/components/components";

export default function Home() {
    return (
        <div className="App text-white min-h-screen">
            <Navigation />
            <>
                <WorksPage />
                <About />
                <Ticker />
                <Contact />
                <Footer />
            </>
        </div>
    );
}
