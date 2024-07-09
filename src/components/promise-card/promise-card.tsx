import { PromiseModel } from "@/models/promise.model";
import style from "./promise-card.module.css";
import { ReactNode } from "react";
import parse from 'html-react-parser';

function PromiseCard(props: PromiseModel): ReactNode {
  return (
    <div className={style.wrapper}>
      <div className={style.mouse_position_tracker}></div>
      <div className={style.mouse_position_tracker}></div>
      <div className={style.mouse_position_tracker}></div>
      <div className={style.mouse_position_tracker}></div>
      <div className={style.mouse_position_tracker}></div>
      <div className={style.mouse_position_tracker}></div>
      <div className={style.mouse_position_tracker}></div>
      <div className={style.mouse_position_tracker}></div>
      <div className={style.mouse_position_tracker}></div>

      <div className={style.promise__container}>
        <img
          className={style.promise__image}
          src={props.image}
          alt={props.alt}
        ></img>
        <div className={style.promise__desc__container}>
          <h4>{props.title}</h4>
          <p>{parse(props.description)}</p>
        </div>
      </div>
    </div>
  );
}

export default PromiseCard;
