import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "./components/SmoothScroll";
import { MotionProviders } from "./components/MotionProviders";
import { resume } from "@/lib/resume";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0a0a0c",
};

export const metadata: Metadata = {
  title: {
    default: "Adam Amac",
    template: "%s · Adam Amac",
  },
  description: resume.summary,
  authors: [{ name: resume.contact.name }],
  keywords: [
    "Adam Amac",
    "high school student",
    "biology",
    "biotechnology",
    "research",
    "STEM",
    "Dartmouth",
  ],
  openGraph: {
    title: "Adam Amac",
    description: resume.summary,
    type: "website",
    locale: "en_US",
    siteName: "Adam Amac",
  },
  twitter: {
    card: "summary",
    title: "Adam Amac",
    description: resume.summary,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#0a0a0c] text-[#f5f5f7]">
        <MotionProviders>
          <SmoothScroll>{children}</SmoothScroll>
        </MotionProviders>
      </body>
    </html>
  );
}
