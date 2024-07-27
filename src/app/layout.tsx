import Navbar from "@/components/navbar/navbar";
import "./globals.css";
import { Metadata, Viewport } from "next";
import Footer from "@/sections/footer/footer";
export const viewport: Viewport = {
  width: 'device-width',
  initialScale:1
}
export const metadata: Metadata = {
  title: "Du Café et du Code. Studio de création de sites internet sur mesure.",
  description:
    "Le studio Du Café et du Code réalise des sites internet sur mesure pour les indépendants de tous les horizons grâce à des outils techniques récents et une tarification adaptée.",
  keywords: [
    "Développeur",
    "Créateur de sites",
    "Du café et du code",
    "Combien coûte un site web",
    "Création site web",
    "Comment créer un site web",
    "Développeur Normandie",
    "Développeur Web",
    "Développeur Rouen",
    "Développeur",
    "Site internet",
    "Site vitrine",
    "Site",
    "Site e-commerce",
    "E-commerce",
    "TPE",
    "Entrepreneurs",
    "Conception de site web",
    "TPE",
    "PME",
    "Professions libérales"
  ],
  metadataBase: new URL("https://ducafeetducode.com"),
  openGraph: {
    type: "website",
    url: "https://ducafeetducode.com",
    title:
      "Du Café et du Code. Studio de création de sites internet sur mesure pour TPE, PME et professions libérales.",
    description:
      "Le studio Du Café et du Code réalise des sites internet sur mesure pour les TPE, PME et professions libérales de tous les horizons grâce à des outils techniques récents et une tarification adaptée.",
    siteName: "Du Café et du Code",
    images: [
      {
        url: "",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactNode {
  return (
    <html lang="fr">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
