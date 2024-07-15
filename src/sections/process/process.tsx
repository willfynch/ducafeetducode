import style from "./process.module.css";
import { ReactNode } from "react";

function ProcessSection(): ReactNode {
  const DETAILS =
    "In case you’re needing to correct for possible capitalization inconsistencies in your data attributes, the attribute selector has a case-insensitive variant for that.";
  return (
    <section className={style.section}>
      <div className={style.text_container}>
        <h2>Réactivité. Flexibilité. Transparence. </h2>
        <h4>Prenez part à la création de votre site web.</h4>
      </div>

      <div className={style.cardsContainer}>

      </div>
    </section>
  );
}

export default ProcessSection;
