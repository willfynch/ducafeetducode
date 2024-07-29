"use client";
import { ReactNode, useState } from "react";
import style from "./faq-button.module.css";
export interface FAQItemProps {
  title: string;
  details: string;
}

function FAQButton(props: FAQItemProps): ReactNode {
  const [isOpen, setOpen] = useState(false);

  function handleClick(): void {
    setOpen(!isOpen);
  }

  return (
    <div className={style.accordion_box}>
      <h3
        role="button"
        aria-label={props.title}
        id={props.title}
        aria-expanded={isOpen}
        title={props.title}
        onClick={handleClick}
        className={style.title}
      >
        <p>{props.title}</p>
      </h3>
      <div
        aria-hidden={!isOpen}
        aria-labelledby={props.title}
        className={style.accordion_content}
      >
        <p>{props.details}</p>
      </div>
    </div>
  );
}

export default FAQButton;
