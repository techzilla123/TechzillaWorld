import type { Metadata } from "next";
import localFont from "next/font/local";

import { ReactQueryClientProvider } from "@/providers";

import "./globals.css";

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
  title: "Techzilla World",
  description: "Job Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
         
          {children}
          
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
