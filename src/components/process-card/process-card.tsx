import { ReactNode } from "react";
import style from "./process-card.module.css";
import Image from "next/image";
import { ProcessCardModel } from "@/models/process-step.model";

function ProcessCard(props: ProcessCardModel): ReactNode {

    function handleClick(): (() => void) | void | undefined {
        if (props.call_to_action) {
          return props.call_to_action.action;
        } else {
          return;
        }
      }
      

  return (
    <div className={style.process_card_container}>
      <div className={style.process_card_picture}>
        <Image fill src={"/images/contact.webp"} alt={""}></Image>
      </div>
      <p className={style.process_card_number}>{props.number}</p>
      <h3 className={style.process_card_title}>{props.title}</h3>
      <p className={style.process_card_description}>{props.description}</p>
      {props.call_to_action && (
        <button onClick={handleClick} className="btn btn-primary">{props.call_to_action.text}</button>
      )}
    </div>
  );
}

export default ProcessCard;
