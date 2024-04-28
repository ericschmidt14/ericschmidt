import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Logo from "./components/logo";
import Scroll from "./components/scroll";

const inter = Inter({ subsets: ["latin"] });

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
      <body id="top" className={inter.className}>
        <Scroll />
        <Logo />
        {children}
      </body>
    </html>
  );
}
