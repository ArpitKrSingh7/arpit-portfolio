import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arpitdev.blog"),
  alternates: {
    canonical: '/',
  },
  title: {
    default: "Arpit Kumar Singh | IIITDM | Full-Stack & GenAI Engineer",
    template: "%s | Arpit Kumar Singh",
  },
  description:
    "Explore the portfolio of Arpit Kumar Singh, a graduate of IIITDM Kancheepuram, Full-Stack & GenAI Engineer specializing in scalable web apps, sophisticated RAG pipelines, and high-performance microservices.",
  keywords: [
    "Arpit Kumar Singh",
    "Arpit Kumar Singh IIITDM",
    "Arpit IIITDM",
    "IIITDM Kancheepuram",
    "IIITDM graduate",
    "Full-Stack Developer",
    "GenAI Engineer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "RAG",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Arpit Kumar Singh" }],
  creator: "Arpit Kumar Singh",
  openGraph: {
    title: "Arpit Kumar Singh | IIITDM | Full-Stack & GenAI Engineer",
    description:
      "Explore the portfolio of Arpit Kumar Singh, a graduate of IIITDM Kancheepuram, Full-Stack & GenAI Engineer specializing in scalable web apps, sophisticated RAG pipelines, and high-performance microservices.",
    url: "https://arpitdev.blog",
    siteName: "Arpit Kumar Singh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Kumar Singh | IIITDM | Full-Stack & GenAI Engineer",
    description:
      "Explore the portfolio of Arpit Kumar Singh, a graduate of IIITDM Kancheepuram, Full-Stack & GenAI Engineer specializing in scalable web apps, sophisticated RAG pipelines, and high-performance microservices.",
    creator: "@ArpitKrSingh7",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#050505] text-white">
        {/* Subtle grid background */}
        <div className="fixed inset-0 z-[-1] pointer-events-none" 
             style={{
               backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)`,
               backgroundSize: `40px 40px`,
               maskImage: `radial-gradient(ellipse 80% 80% at 50% 0%, #000 70%, transparent 110%)`
             }} 
        />
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange={true}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
