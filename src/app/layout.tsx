import type { Metadata } from "next";
import { playfair, inter } from "@/utils/fonts";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "AXADIATA Jewelry",
  description: "Exclusive Diamond Jewelry Collection",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-white text-brown font-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
