import FAQButton from "@/components/faq-button/faq-button";
import style from "./faq.module.css"
import { ReactNode } from "react";

function FAQSection() : ReactNode {
    return ( 
        <section className= {style.section}>

        <FAQButton title={"Mon titre de question ?"} details={""}/>

        </section>
     );
}

export default FAQSection;