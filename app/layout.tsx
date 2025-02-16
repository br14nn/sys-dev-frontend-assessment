import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";

const comicNeue = Comic_Neue({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="snap-y snap-mandatory snap-always">
      <body
        className={`${comicNeue.className} bg-sky-100 text-neutral-950 antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
