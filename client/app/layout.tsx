import type { Metadata } from "next";
import localFont from "next/font/local";
// wallet adapter imports

import "@solana/wallet-adapter-react-ui/styles.css";
import "./globals.css";
import Provider from "./_provider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HODL",
  description: "hold on for dear life",
  twitter: { creator: "@10Xpraash" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Provider>{children}</Provider>
      </body>
    </html>
  );
}