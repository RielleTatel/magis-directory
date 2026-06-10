import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Magis Directory — Discover. Connect. Belong.",
  description:
    "Find the student organizations that match who you are — and who you want to become. Magis Directory is your guide to the recognized communities of AdZU.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
