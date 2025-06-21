import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
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
  description: "Tailor-made websites crafted with precision and creativity. Premium quality design, fast performance, and modern code for your business success.",
  openGraph: {
    title: "Rozs Norbert - Web Developer",
    description: "Tailor-made websites crafted with precision and creativity. Premium quality design, fast performance, and modern code for your business success.",
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
  },
  keywords: [
    "Norbert Rozs",
    "Next.js fejlesztő",
    "React portfólió",
    "TypeScript webfejlesztő",
    "senior technikai konzultáns",
    "webfejlesztés Magyarország",
    "Norbert Rozs",
    "Rozs Norbert",
    "személyes portfólió",
    "webfejlesztő portfólió",
    "front-end fejlesztő",
    "back-end fejlesztő",
    "full-stack fejlesztő",
    "programozó",
    "webfejlesztés",
    "React fejlesztő",
    "JavaScript fejlesztő",
    "HTML5",
    "CSS3",
    "webdesign",
    "responsive design",
    "webalkalmazás fejlesztés",
    "modern web technológiák",
    "projekt bemutató",
    "szakmai tapasztalat",
    "fejlesztési projektek",
    "digitális megoldások",
    "IT szakember",
    "kódolás",
    "web programozás",
    "fejlesztői portfólió",
    "egyéni fejlesztő",
    "webfejlesztő munkák",
    "technológiai szakértő",
    "web programozó",
    "Vercel projekt",
    "online portfólió",
    "UX/UI design alapok",
    "JavaScript keretrendszerek",
    "szakmai bemutatkozás",
    "személyes honlap",
    "frontend projektek",
    "backend projektek",
    "szoftver fejlesztés",
    "modern weboldal",
    "weboldal fejlesztés",
    "fejlesztői tapasztalat",
    "kódminták",
    "programozási nyelvek",
    "webalkalmazások",
    "tech portfólió",
    "fejlesztési kihívások",
    "online jelenlét",
    "karrier portfólió",
    "IT portfólió",
    "Rozs Norbert vercel",
    "Rozs Norbert Next.js",
    "Rozs Norbert React",
    "Rozs Norbert TypeScript",
    "Rozs Norbert webfejlesztő",
    "Rozs Norbert személyes portfólió",
    "Rozs Norbert web programozó",
    "Rozs Norbert fejlesztői portfólió",
    "Norbert Rozs vercel",
    "vercel",
    "development",
    "frontend",
    "frontend development",
    "backend",
    "backend development",
    "fullstack",
    "fullstack development",
    "web development",
    "web developer",
    "design",
    "web design",
  ]
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Rozs Norbert - Web Developer",
  "url": "https://rozsnorbert.vercel.app",
  "sameAs": [
    "https://www.linkedin.com/in/rozs-norbert",
    "https://github.com/rozsnorbert"
  ],
  "jobTitle": "Frontend Developer",
  "worksFor": {
    "@type": "Organization",
    "name": "..."
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
