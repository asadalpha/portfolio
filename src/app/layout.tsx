import { Inter, Caveat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-caveat",   // 👈 important!
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://asadjawed.tech"),
  title: "Portfolio",
  description: "Asad's Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <body className="antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
