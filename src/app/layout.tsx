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
  metadataBase: new URL("https://yonathan-tau.vercel.app"),
  title: "Social Media Onderzoek | Yonathan Hidrian (Klas 4m3) INFT",
  description: "Diepgaand onderzoek naar schermtijd, generatieverschillen en de balans tussen voor- en nadelen van sociale media. Uitgewerkt door Yonathan Hidrian voor INFT Opdracht 4.",
  authors: [{ name: "Yonathan Hidrian" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Social Media Onderzoek | Yonathan Hidrian (Klas 4m3)",
    description: "Onderzoek naar het gebruik, motieven en de psychosociale impact van sociale media.",
    url: "https://yonathan-tau.vercel.app",
    siteName: "SocialMedia.INFT",
    images: [
      {
        url: "/illustrations/hero-social-media.jpg",
        width: 1456,
        height: 816,
        alt: "Sociale Media Onderzoek & Balans Illustratie",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Media Onderzoek | Yonathan Hidrian (Klas 4m3)",
    description: "Onderzoek naar het gebruik, motieven en de psychosociale impact van sociale media.",
    images: ["/illustrations/hero-social-media.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${syne.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-[#1F1D1A] selection:bg-[#C26747] selection:text-white antialiased">
        <ConvexClientProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ConvexClientProvider>
      </body>
    </html>
  );
}
