import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

// 2 distinct fonts required by the assignment specs
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Social Media Onderzoek | Yonathan Hidrian (4m3) INFT",
  description: "Onderzoek naar het gebruik, de motieven en impact van sociale media. Uitgewerkt door Yonathan Hidrian voor INFT Opdracht 4.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${syne.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white dark:bg-zinc-950 dark:text-zinc-50">
        <ConvexClientProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
