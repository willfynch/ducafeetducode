import PromiseCard from "@/components/promise-card/promise-card";
import style from "./hook.module.css";
import { PromiseModel } from "@/models/promise.model";

function HookSection() {
  const promiseCardsData: PromiseModel[] = [
    {
      image: "/images/contact.webp",
      alt: "Photo de ",
      title: "Un design identifiable",
      description:
        "Nous trouvons le juste équilibre entre votre identité de marque et les bonnes pratiques actuelles de webdesign. <strong>On se souviendra de vous</strong>.",
    },
    {
      image: "/images/contact.webp",
      alt: "Photo de ",
      title: "Les fonctionnalités essentielles",
      description:
        "Pas d'usine à gaz. Uniquement les fonctionnalités <strong>qui vous apportent de la valeur</strong> et vous aident dans votre activité.",
    },
    {
      image: "/images/contact.webp",
      alt: "Photo de ",
      title: "Une tarification adaptée",
      description:
        "Une tarification <strong>par abonnement et abordable</strong> pour vous éviter d'avancer des sommes trop conséquentes.",
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.text_wrapper}>
        <h2>Tous les sites web se ressemblent</h2>
        <p>
          La plupart des sites web sont conçus de manière impersonnelle. Ils
          pourraient être le vôtre, ou celui de votre concurrent.
          <br />
          <br />
          Ce n’est pas ce que vous voulez.
          <br />
          <br />
          Vous, vous avez besoin
          <strong>&nbsp;qu’on se souvienne de vous</strong>.
        </p>

        <h2>Et la plupart sont des usines à gaz</h2>

        <p>
          Des WordPress plein de plugins (qu'il faut mettre à jour !) pour de
          simples sites vitrine,
          <br />
          <br />
          Des systèmes d’édition de contenu fastidieux à prendre en main,
          <br />
          <br />
          Des hébergements inutilement coûteux...
          <br />
          <br />
          Alors qu’avec un peu de <strong>code</strong> 👨‍💻 et beaucoup de{" "}
          <strong>café</strong> ☕, je vous propose{" "}
          <strong>tellement plus simple</strong>.
        </p>

        <h2>Optez pour un site web à votre mesure</h2>
      </div>
      <div className={style.promise_wrapper}>
        <div className={style.container}>
          {promiseCardsData.map((promiseData) => {
            return (
              <PromiseCard
                image={promiseData.image}
                alt={promiseData.alt}
                title={promiseData.title}
                description={promiseData.description}
              ></PromiseCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HookSection;
