import FAQButton from "@/components/faq-button/faq-button";
import style from "./faq.module.css";
import { ReactNode } from "react";
import Image from "next/image";
function FAQSection(): ReactNode {
  const QUESTIONS: { question: string; answer: string }[] = [
    {
      question: "Qui travaille pour le studio Du Café et du Code ?",
      answer: "Le studio est une Entreprise Individuelle. Vous serez donc en lien direct avec son fondateur, William. Cela évite les coûts supplémentaires (développeurs, fonctions support) d'une agence classique."
    },
    {
      question: "Pourquoi choisir de travailler avec nous ?",
      answer: `Nous sommes le studio de création de sites internet idéal si : <br/>
      <ul>
      <li>Vous cherchez un accompagnement sur le long-terme et avez besoin de réactivité. Nous proposons plus qu'un site web : une vitrine évolutive de votre activité.</li>
      <li>Vous avez besoin d'une tarification adaptée à votre trésorerie et étalée dans le temps.</li>
      <li>Vous voulez un site web qui vous ressemble. Sortir du lot avec un site performant, économique technologiquement et donc écologique.</li>
      `
    },
    {
      question: "Qui sont les clients privilégiés du studio ?",
      answer: "Nous nous spécialisons dans les petites structures, principalement les TPE et professions libérales (avocats, sophrologues, coaches, naturopathes) et artistiques."
    },
    {
      question: "Si je ne suis pas satisfait(e), que se passe-t-il ? ",
      answer: "Cela arrive rarement mais si c'est le cas, le studio s'engage à revenir sur le projet jusqu'à ce qu'ils vous convienne à 100%.",
    },
    {
      question: "Quels sont les délais pour la livraison du produit fini ?",
      answer: "Tout dépend de la complexité du projet, de notre communication et du nombre de révisions à faire. En général, entre 15 jours et 1 mois."
    },
    {
      question: "Est-ce que je pourrai modifier mon site moi-même ?",
      answer: "Tout dépend de votre besoin réel que nous analyserons ensemble. Nous choisirons les parties du site que vous souhaiterez modifier et mettre à jour. Cela peut être utile pour modifier vos offres ou créer des offres promotionnelles limitées dans le temps."
    },
    {
      question: "Que dois-je préparer en avance pour créer mon site web ?",
      answer: "En théorie, nous n'avons besoin que de vous ! Si vous avez déjà du contenu et une charte graphique à nous présenter, c'est un grand plus. Nous pourrons aller beaucoup plus vite. Si vous en êtes encore au début de l'histoire de votre entreprise, nous pourrons réfléchir ensemble à des éléments de départ (contenu écrit, visuels...)."
    },
    {
      question: "Quels sont les coûts récurrents à prévoir ?",
      answer: "Il y en a peu ! Nos choix technologiques nous permettent de s'affranchir des frais d'hébergement. Vous devrez toutefois payer votre nom de domaine (en général moins de 20€ / an). Vous pourrez aussi souscrire au <a className='' href='#maintenance'>forfait maintenance</a> afin de bénéficier de mon accompagnement pendant longtemps pour 20€/mois."
    },
  ];

  return (
    <section id="FAQ" className={style.section}>
      <div className={style.text_wrapper}>
        <h2>Des questions ?</h2>
      </div>
      <div className={style.faq_wrapper}>
        <div className={style.accordions_container}>
          {QUESTIONS.map((question, index) => {
            return (
              <FAQButton
                key={index}
                title={question.question}
                details={question.answer}
              />
            );
          })}
          <div className={style.cta_last_question}>
            <h3><p>Vous ne trouvez pas de réponse à votre question ? </p></h3>
            <p>Vous pouvez m&apos;envoyer un email 📩 : <a href="mailto:william.finzy@protonmail.com">william.finzy@protonmail.com</a>. Je vous répondrai dans les plus brefs délais !</p>
          </div>
        </div>
        <div className={style.cta_container}>
          <div className={style.cta}>
            <Image
              alt={"Photo de William, fondateur du studio Du Café et du Code"}
              width={80}
              height={80}
              src={"/images/profile_pic.webp"}
              className={style.profile_pic}
            ></Image>

            <h4>Appel découverte gratuit</h4>
            <p>
              Réservez votre appel découverte <strong>gratuit</strong> avec
              William, le fondateur du studio.{" "}
              <strong>30 min pour parler de votre projet</strong>.
            </p>
            <a target="_blank" href={process.env.NEXT_PUBLIC_CALENDLY} className={" btn-primary "}>Je réserve mon appel</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
