import { ReactNode } from "react";
import style from "./pricing-card.module.css";
import { GiCoffeeBeans } from "react-icons/gi";

export interface PricingModel {
  title: string;
  price: number;
  description_items: string[];
  offer_items: string[];
  cta_text: string;
}

function PricingCard(props: PricingModel) : ReactNode {
  return (
    <div className={style.pricing_card_container}>
      <p>{props.title.toUpperCase()}</p>

      <div className={style.price}>
        <span>
          <h1>{props.price}€</h1>/mois
        </span>
        <p>Engagement sur 12 mois.</p>
      </div>

      <div className={style.description}>
        {props.description_items.map((item, index) => {
          return <p key={index}><GiCoffeeBeans/> {item}</p>;
        })}
      </div>

      <hr style={{ marginTop: "30px", marginBottom: "30px", opacity: '.5' }} />

      <div className={style.description}>
        {props.offer_items.map((item, index) => {
          return <p key={index}><GiCoffeeBeans/> {item}</p>;
        })}
      </div>

      <div className={style.call_to_action}>
        <button className="btn btn-primary">{props.cta_text}</button>
      </div>
    </div>
  );
}

export default PricingCard;
