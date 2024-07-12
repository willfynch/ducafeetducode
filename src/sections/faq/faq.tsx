import FAQButton from "@/components/faq-button/faq-button";
import style from "./faq.module.css";
import { ReactNode } from "react";

function FAQSection(): ReactNode {

    const DETAILS = "In case you’re needing to correct for possible capitalization inconsistencies in your data attributes, the attribute selector has a case-insensitive variant for that."
  return (
    <section className={style.section}>
      <div className={style.faq_container}>
        <FAQButton title={"Mon titre de question ?"} details={DETAILS} />
        <FAQButton title={"Mon titre de question ?"} details={DETAILS} />
      </div>
    </section>
  );
}

export default FAQSection;
