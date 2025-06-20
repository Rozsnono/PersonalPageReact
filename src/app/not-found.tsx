import { Navigation } from "@/components/components";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white">
            <Navigation />

            <h1 className="text-[8rem] font-bold mb-4">404</h1>
            <h2 className="text-2xl mb-2">Page Not Found</h2>
            <p className="text-lg mb-8">The page you are looking for does not exist.</p>
        </div>
    );
}