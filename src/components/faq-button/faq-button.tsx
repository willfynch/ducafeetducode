import { ReactNode } from "react";
import style from "./faq-button.module.css";
import { FaPlus } from "react-icons/fa";
export interface FAQItemProps {
  title: string;
  details: string;
}

function FAQButton(props: FAQItemProps) : ReactNode {
  return (
    <button  className={style.faq_btn}>
      <span>{props.title}</span>
 
        <FaPlus />
 
    </button>
  );
}

export default FAQButton;
