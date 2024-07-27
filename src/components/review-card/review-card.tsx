import { ReviewModel } from "@/models/review.model";
import style from "./review-card.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ReactNode } from "react";

function ReviewCard(props: ReviewModel) : ReactNode {
  const STARS = new Array(props.stars).fill(0);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.customer_section}>
          <Image
            alt={"Photo de " + props.customer_name}
            width={50}
            height={50}
            src={props.customer_avatar}
            className={style.customer_image}
          ></Image>
          <div className={style.customer_name_section}>
            <p>
              <strong>{props.customer_name}</strong>
            </p>
            <p>
              {props.customer_role} à {props.company_name}
            </p>
          </div>
        </div>
        <div className={style.stars}>
          {STARS.map((star, index) => {
            return <FaStar key={index} />;
          })}
        </div>
      </div>
      <div className={style.text_section}>
        <i>« {props.text} »</i>
      </div>
    </div>
  );
}

export default ReviewCard;
