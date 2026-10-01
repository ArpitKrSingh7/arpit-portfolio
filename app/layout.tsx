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
  title: {
    default: "Arpit Kumar Singh | Full-Stack & GenAI Engineer",
    template: "%s | Arpit Kumar Singh",
  },
  description:
    "Portfolio of Arpit Kumar Singh — Full-Stack & GenAI Engineer building scalable web apps, RESTful APIs, microservices, and RAG-powered systems.",
  keywords: [
    "Arpit Kumar Singh",
    "Full-Stack Developer",
    "GenAI Engineer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "RAG",
    "IIITDM Kancheepuram",
    "portfolio",
    "web developer",
  ],
  authors: [{ name: "Arpit Kumar Singh" }],
  creator: "Arpit Kumar Singh",
  openGraph: {
    title: "Arpit Kumar Singh | Full-Stack & GenAI Engineer",
    description:
      "Portfolio of Arpit Kumar Singh — Full-Stack & GenAI Engineer building scalable web apps, RESTful APIs, microservices, and RAG-powered systems.",
    url: "https://arpitdev.blog",
    siteName: "Arpit Kumar Singh",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arpit Kumar Singh | Full-Stack & GenAI Engineer",
    description:
      "Portfolio of Arpit Kumar Singh — Full-Stack & GenAI Engineer building scalable web apps and RAG-powered systems.",
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
      <body className="min-h-full flex flex-col bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white transition-colors duration-500">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
