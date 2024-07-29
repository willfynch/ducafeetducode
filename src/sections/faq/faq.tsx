import FAQButton from "@/components/faq-button/faq-button";
import style from "./faq.module.css";
import { ReactNode } from "react";
import Image from "next/image";
function FAQSection(): ReactNode {
  const DETAILS =
    "In case you’re needing to correct for possible capitalization inconsistencies in your data attributes, the attribute selector has a case-insensitive variant for that.";
  return (
    <section className={style.section}>
      <div className={style.text_wrapper}>
        <h2>Des questions ?</h2>
      </div>
      <div className={style.faq_wrapper}>
        <div className={style.accordions_container}>
          <FAQButton title={"Mon titre de question ?"} details={DETAILS + DETAILS} />
          <FAQButton title={"Mon titre de question ?"} details={DETAILS} />
          <FAQButton title={"Mon titre de question ?"} details={DETAILS} />
          <FAQButton title={"Mon titre de question ?"} details={DETAILS} />
          <FAQButton title={"Mon titre de question ?"} details={DETAILS + DETAILS + DETAILS + DETAILS} />
          <FAQButton title={"Mon titre de question ?"} details={DETAILS} />
          <FAQButton title={"Mon titre de question ?"} details={DETAILS} />
          <FAQButton title={"Mon titre de question ?"} details={DETAILS} />
          <FAQButton title={"Mon titre de question ?"} details={DETAILS} />
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
              <p>Réservez votre appel découverte <strong>gratuit</strong> avec William, le fondateur du studio. <strong>30 min pour parler de votre projet</strong>.</p>
            <button className={" btn-primary "}>
              Je réserve mon appel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
