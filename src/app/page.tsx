import { Metadata } from "next";
import { FaCoffee } from "react-icons/fa";

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
    "Sites jamstack",
    "Sites sans serveur",
    "Site sans wordpress",
    "Conception de site web",
  ],
  metadataBase: new URL("https://ducafeetducode.com"),
  openGraph: {
    type: "website",
    url: "https://ducafeetducode.com",
    title:
      "Du Café et du Code. Studio de création de sites internet sur mesure.",
    description:
      "Le studio Du Café et du Code réalise des sites internet sur mesure pour les indépendants de tous les horizons grâce à des outils techniques récents et une tarification adaptée.",
    siteName: "Du Café et du Code",
    images: [
      {
        url: "",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <h1>
        Plus qu’un <span className="text-yellow">site web</span>, <br />
        Votre <span classNam e="text-yellow">signature</span>.
      </h1>
      <h2>Tous les sites web se ressemblent</h2>
      <button className="btn-primary">Prendre RDV</button>
      <span className="btn-rounded-secondary">
        10+ sites réalisés <FaCoffee />
      </span>
    </main>
  );
}
