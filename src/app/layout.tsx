import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashant Mane | Power BI Developer & Data Analyst",
  description: "Portfolio of Prashant Mane - Power BI Developer, SQL Analyst, and Data Modeling Expert specializing in ERP & Business Data Insights.",
};

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('@/components/canvas/Scene').then(mod => mod.Scene), { ssr: false });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} antialiased scroll-smooth`}
    >
      <body className="min-h-screen bg-slate-950 text-foreground flex flex-col font-sans">
        <Scene />
        {children}
      </body>
    </html>
  );
}
