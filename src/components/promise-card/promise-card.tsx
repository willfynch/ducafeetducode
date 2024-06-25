import { PromiseModel } from "@/models/promise.model";
import style from './promise-card.module.css'
import { ReactNode } from "react";

function PromiseCard(props:PromiseModel) : ReactNode {
    return ( 
        <div className={style.promise__container}>
            <img className={style.promise__image} src={props.image} alt={props.alt}></img>
            <div className={style.promise__desc__container}>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
            </div>
        </div>
     );
}

export default PromiseCard;