import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { Toaster } from "react-hot-toast";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

interface Metadata {
  title: string;
  description: string;
  // Add og property for Open Graph data
  og?: {
    url: string;
    title: string;
    description: string;

  };
  // Add Twitter card meta tags here (optional)
};

export const metadata: Metadata = {
  title: "Gerard Misa | Web Developer Portfolio",
  description: "I am Gerard, a passionate web developer showcasing my skills and experience in this portfolio. Explore my projects and contact me for your web development needs.",
  og: {
    url: 'https://arduon-dev-portfolio.vercel.app/', 
    title: 'Gerard Misa | Web Developer Portfolio',
    description: "I am Gerard, a passionate web developer showcasing my skills and experience in this portfolio. Explore my projects and contact me for your web development needs.", 
  },
  // Add Twitter Card meta tags here (optional)
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
            <SpeedInsights />
          </main>

          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
