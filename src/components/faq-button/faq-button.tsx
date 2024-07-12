"use client";
import { Fragment, ReactNode, useState } from "react";
import style from "./faq-button.module.css";
export interface FAQItemProps {
  title: string;
  details: string;
}

function FAQButton(props: FAQItemProps): ReactNode {
  const [isOpen, setOpen] = useState(false);

  function handleClick() : void {
    setOpen(!isOpen);
  }

  return (
    <Fragment>
    <button aria-label={props.title} id={props.title} aria-expanded={isOpen} title={props.title} onClick={handleClick} className={style.faq_btn} >
        <p>{props.title}</p>
        <span >{isOpen ? '-' : '+'}</span>
    </button>
    <div data-visible={isOpen} aria-labelledby={props.title} className={style.faq_content_container} >
        <p >
           {props.details}
        </p>
    </div>
</Fragment>
)
}

export default FAQButton;
