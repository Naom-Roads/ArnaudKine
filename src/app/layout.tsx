import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cabinet d'Ostéopathie Arnaud Fornetran | Ostéopathe La Norville",
  description: "Cabinet d'ostéopathie à La Norville. Soulagement des douleurs dorsales, cervicales et articulaires. Consultations pour adultes, enfants, femmes enceintes et sportifs.",
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
