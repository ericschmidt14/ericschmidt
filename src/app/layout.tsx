import type { Metadata } from "next";
import { Arvo, Inter } from "next/font/google";
import Logo from "./components/logo";
import Scroll from "./components/scroll";
import "./globals.css";

const arvo = Arvo({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--font-arvo",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "E R I C S C H M I D T",
  description: "Eric Schmidt is a Nuremberg-based web designer & developer",
  keywords: [
    "eric",
    "schmidt",
    "web",
    "design",
    "development",
    "dev",
    "engineer",
    "nuremberg",
    "nürnberg",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top" className={`${inter.variable} ${arvo.variable} font-sans`}>
        <Scroll />
        <Logo />
        {children}
      </body>
    </html>
  );
}
