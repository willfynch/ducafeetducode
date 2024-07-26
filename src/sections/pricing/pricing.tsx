import PricingCard, {
  PricingModel,
} from "@/components/pricing-card/pricing-card";
import style from "./pricing.module.css";
import { ReactNode } from "react";
import { GiCoffeeBeans } from "react-icons/gi";

function PricingSection(): ReactNode {
  const OFFERS: PricingModel[] = [
    {
      title: "Le site vitrine 🏪",
      price: 150,
      description_items: [
        "Met en valeur votre activité",
        "Donne des arguments de vente",
        "Délivre une information concrète et utile",
        "De préférence sur une seule page",
        "Optimisé pour la navigation sur mobile",
      ],
      offer_items: [
        "Site web 5 pages maximum",
        "Moodboard",
        "Accompagnement",
        "Maquettage UX/UI sur Figma",
        "Développement en temps réel",
        "Adaptation à tous types d’écran",
        "Modifications illimitées",
        "Hébergement inclus",
        "Optimisation SEO",
        "Pages légales",
      ],
      cta_text: "Opter pour le site vitrine",
    },
    {
      title: "Le site éditorial ✒️",
      price: 200,
      description_items: [
        "Met en valeur votre activité",
        "Donne des arguments de vente",
        "Délivre une information concrète et utile",
        "De préférence sur plusieurs pages",
        "Crée une relation avec votre audience",
      ],
      offer_items: [
        "Site web 5 pages maximum",
        "Contenu modifiable par vous",
        "Moodboard",
        "Accompagnement",
        "Maquettage UX/UI sur Figma",
        "Développement en temps réel",
        "Adaptation à tous types d’écran",
        "Modifications illimitées",
        "Hébergement inclus",
        "Optimisation SEO",
        "Pages légales",
      ],
      cta_text: "Opter pour le site éditorial",
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.text_wrapper}>
        <h2>Une tarification adaptée </h2>
        <div className={style.pricing_explaination}>
          <p>Un système d’abonnement avec engagement sur 12 mois.</p>
          <ul className={style.subscription_pros_list}>
            <li>✅ Vous rentrez facilement dans vos frais</li>
            <li>✅ Le prix total reste conforme au marché</li>
            <li>
              ✅ Possibilité ensuite de passer au format d’abonnement
              “maintenance”
            </li>
          </ul>
        </div>
      </div>

      <div className={style.pricing_wrapper}>
        <div className={style.cards_container}>
          {OFFERS.map((offer, index) => {
            return (
              <PricingCard
                key={index}
                title={offer.title}
                description_items={offer.description_items}
                offer_items={offer.offer_items}
                cta_text={offer.cta_text}
                price={offer.price}
              ></PricingCard>
            );
          })}
        </div>
        <div className={style.pricing_maintenance}>
          <p>{"Forfait maintenance".toUpperCase()} ⚙️</p>
          <h2 style={{margin:'0'}}>20€/mois</h2>
          <p>Une fois l&apos;abonnement terminé, vous pouvez poursuivre sur le forfait maintenance.</p>
          <ul className={style.description_maintenance}>
            <li><GiCoffeeBeans/> Modifications illimitées</li>
            <li><GiCoffeeBeans/> Conseil et accompagnement</li>
            <li><GiCoffeeBeans/> Mises à jour</li>
          </ul>
          
        </div>
        <div className={style.pricing_perso}>
          <div className="btn-rounded-tertiary">Offre sur mesure</div>
          <h2>Un besoin particulier ? </h2>
          <p>Prenons contact et discutons ensemble de votre demande.</p>
          <button className="btn btn-primary">Demander un devis</button>
        </div>


      </div>

      <div className={style.perso_wrapper}></div>
    </section>
  );
}

export default PricingSection;
