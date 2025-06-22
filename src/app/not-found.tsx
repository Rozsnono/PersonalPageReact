// "use client";
import { Navigation } from "@/components/components";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function NotFound() {
    const t = useTranslations("notFound");
    return (
        <div className="min-h-screen text-white flex items-center justify-center">
            <Navigation />
            <div className="max-w-2xl mx-auto px-4 text-center">
                {/* Navigation */}

                {/* 404 Content */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="pt-20">
                        <div className="text-8xl font-bold text-blue-400 mb-8">404</div>
                        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                           {t("title")}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            {t("description")}
                        </p>

                        <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                            <Link href={"/"}>
                                <button className="cursor-pointer bg-linear-to-l from-[#2563eb] to-[#14b8a6] inline-flex items-center space-x-2 px-8 py-4 rounded-full text-lg font-semibold text-white relative z-10 hover:bg-blue-700 transition-all transform hover:scale-105">
                                    {t("button")}
                                </button>
                            </Link>
                        </div>

                        <p className="mt-8 text-gray-400">
                            {t("error")}
                        </p>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}