import { Footer, Navigation, Prices, PricingFooter, TimeLine } from "@/components/components";

export default function Home() {
    return (
        <div className="App text-white min-h-screen">
            <Navigation />
            <>
                <Prices />
                <TimeLine />
                <PricingFooter/>
                <Footer />
            </>
        </div>
    );
}

