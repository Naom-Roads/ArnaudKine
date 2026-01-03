import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabinet de Chiropraxie Arnaud | Soins Chiropratiques en France",
  description: "Cabinet de chiropraxie professionnel. Soulagement des douleurs dorsales, cervicales et articulaires. Prenez rendez-vous dès aujourd'hui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
