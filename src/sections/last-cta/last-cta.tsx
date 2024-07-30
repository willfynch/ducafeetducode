import { ReactNode } from "react";
import style from "./last-cta.module.css";

function LastCtaSection() : ReactNode {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <h2>Réservez votre appel découverte dès maintenant !</h2>
        <p>
          Prenez contact gratuitement avec nous dès aujourd&apos;hui et nous
          répondrons à toutes vos questions concernant votre futur site web. 👨‍💻
        </p>
        <a
          href={process.env.NEXT_PUBLIC_CALENDLY}
          target="_blank"
          className={style.cta + " btn-primary "}
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
}

export default LastCtaSection;
