import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Chatbot } from "@/components/Chatbot";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prashant Mane | Power BI Developer & Data Analyst",
  description: "Portfolio of Prashant Mane - Power BI Developer, SQL Analyst, and Data Modeling Expert specializing in ERP & Business Data Insights.",
};

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
      <body className="min-h-screen bg-background text-foreground flex flex-col font-sans">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}