import FAQButton from "@/components/faq-button/faq-button";
import style from "./faq.module.css"

function FAQSection() {
    return ( 
        <section className= {style.section}>

        <FAQButton title={"Mon titre de question ?"} details={""}/>

        </section>
     );
}

export default FAQSection;