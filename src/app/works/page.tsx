import Ticker, { About, Contact, Experience, FAQ, Footer, Hero, Navigation, Skills, WorksPage } from "@/components/components";

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
