import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Graceful Pet Care | Trusted Pet Sitting in Ashford, Kent",
  description: "Professional pet sitting, dog walking, and drop-in visits in Ashford and surrounding villages. Over 15 years experience. Fully insured. Your pets stay happy at home.",
  keywords: ["pet sitting", "dog walking", "pet care", "Ashford", "Kent", "pet sitter", "house sitting"],
  authors: [{ name: "Graceful Pet Care" }],
  openGraph: {
    title: "Graceful Pet Care | Trusted Pet Sitting in Ashford, Kent",
    description: "Professional pet sitting, dog walking, and drop-in visits in Ashford and surrounding villages.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${nunito.variable}`}>
      <body className="antialiased font-sans bg-cream text-gray-900">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
