import { Hero, Jobs, Journey, Personal, Philosophy, Skills, Studies } from "@/components/about.components";
import { Footer, Navigation } from "@/components/components";

export default function About() {
    return (
        <div className="App text-white min-h-screen">
            <Navigation />

            <Hero />
            <Skills />
            <Philosophy />
            <Jobs />
            <Studies />
            <Personal />
            <Footer />

        </div>
    )
}