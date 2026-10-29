import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import OceanBackground from "@/components/OceanBackground";
import TopNav from "@/components/TopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abraham Meshesha | Computer Science at Gonzaga",
  description:
    "Portfolio of Abraham Meshesha, a Computer Science student at Gonzaga University seeking software engineering internships.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="relative min-h-screen flex flex-col">
        <OceanBackground />
        <TopNav />
        {children}
      </body>
    </html>
  );
}
