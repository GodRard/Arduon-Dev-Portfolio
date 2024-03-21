import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gerard's Portfolio",
  description: "Frontend developer portfolio",  
  
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="lenis lenis-smooth">
      <body
        className={`${inter.className} bg-[#010208] overflow-y-scroll overflow-x-hidden`}
      >
        <div className="flex flex-col min-h-screen">
          <StarsCanvas />
          <Navbar />

          <main className="flex-1">
            <Toaster position="top-center" />
            {children}
          </main>

          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
