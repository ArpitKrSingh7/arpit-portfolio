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
  title: "Arpit Kumar Singh | Full-Stack & GenAI Engineer",
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
  ],
  authors: [{ name: "Arpit Kumar Singh" }],
  openGraph: {
    title: "Arpit Kumar Singh | Full-Stack & GenAI Engineer",
    description:
      "Portfolio of Arpit Kumar Singh — Full-Stack & GenAI Engineer.",
    type: "website",
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
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
