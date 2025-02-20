import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | Brian Vitualla",
  description: "Home page of Brian Vitualla's portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden scroll-smooth">
      <body
        className={`${comicNeue.className} min-w-[320px] bg-sky-100 text-neutral-950 antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
