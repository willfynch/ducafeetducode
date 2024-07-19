import ProcessCard from "@/components/process-card/process-card";
import style from "./process.module.css";
import { ReactNode } from "react";
import { ProcessCardModel } from "@/models/process-step.model";

function ProcessSection(): ReactNode {
  const PROCESS_STEPS: ProcessCardModel[] = [
    {
      image: "/images/contact.webp",
      number: 1,
      title: "Réservez votre appel découverte gratuit",
      description: "Prenons le temps de comprendre votre situation.",
      call_to_action: {
        text: 'Je réserve mon rendez-vous gratuit',
        action: ()=>console.log('Je réserve mon rendez-vous gratuit')
      }
    },
    {
      image: "/images/contact.webp",
      number: 2,
      title: "Parlons de votre contenu",
      description: "En fonction de votre situation, nous travaillerons le contenu de votre site web pour qu’il parle à votre cible. ",
    },
    {
      image: "/images/contact.webp",
      number: 3,
      title: "Maquettage sous Figma",
      description: "En temps réel, suivez l’évolution du maquettage. Votre avis compte à tout moment du processus.",
    },
    {
      image: "/images/contact.webp",
      number: 4,
      title: "Écriture du code avec Astro",
      description: "Dès qu’une page ou section est validée, je la code avec un outil qui décuple les performances et rend l’expérience d’utilisation fluide.",
    },
    {
      image: "/images/contact.webp",
      number: 5,
      title: "Livraison en continu de la version de démonstration",
      description: "Vous pouvez suivre en temps réel le développement du site web grâce à un lien non répertorié sur Google. Vous pourrez ainsi tester vous-même le site web en temps réel.",
    },
    {
      image: "/images/contact.webp",
      number: 6,
      title: "Livraison finale",
      description: "Votre site est en ligne. Je m’assure que tout est bien répertorié sur Google et je reste à votre disposition comme indiqué dans la partie tarifs.",
      call_to_action: {
        text: 'Voir les tarifs',
        action: ()=>console.log('Voir les tarifs')
      }
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.text_wrapper}>
        <h2>Réactivité. Flexibilité. Transparence. </h2>
        <h4>Prenez part à la création de votre site web.</h4>
      </div>
      <div className={style.process_wrapper}>
        <div className={style.cards_container}>
          {PROCESS_STEPS.map((step, index) => {
            return (
              <ProcessCard
                key={index}
                image={step.image}
                number={step.number}
                title={step.title}
                description={step.description}
                call_to_action={step?.call_to_action}
              ></ProcessCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
