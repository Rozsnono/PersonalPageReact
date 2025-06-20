import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rozs Norbert - Web Developer",
  description: "Tailor-made websites. Premium quality",
  openGraph: {
    title: "Rozs Norbert - Web Developer",
    description: "Tailor-made websites. Premium quality",
    url: "https://rozs-norbert.vercel.app",
    siteName: "Rozs Norbert - Web Developer",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "Rozs Norbert - Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://rozs-norbert.vercel.app",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
