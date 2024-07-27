import { ReviewModel } from "@/models/review.model";
import style from "./reviews.module.css";
import ReviewCard from "@/components/review-card/review-card";
import { ReactNode } from "react";

function ReviewsSection() : ReactNode {
  const REVIEWS: ReviewModel[] = [
    {
      stars: 5,
      company_name: "Miora Sophro",
      company_logo: "images/logo_miorasophrologie.png",
      text: "J’ai fait appel à William pour la construction de mon site web ! Il est à l’écoute de vos besoin ! Je savais que j’allais être bien accompagnée pour le développement de mon site web ! Il a réussi à faire transparaître l’image que je voulais véhiculer avec ce site ! Il est également à l’écoute disponible pour toute question ou remarque. Merci pour ton travail ! Je n’hésiterai pas à faire appel à William pour une refonte ou une mise à jour de mon site ! Il vous livre un produit de qualité, qui répond à vos besoin ! Je vous le recommande.",
      customer_name: "Miora LAYARI",
      customer_avatar: "images/face_test.png",
      customer_role: "Sophrologue",
    },
  ];

  return (
    <section className={style.section}>
      <div className={style.text_wrapper}>
        <h2>Merci pour leur confiance</h2>
      </div>
      <div className={style.cards_wrapper}>
        <div className={style.cards_container}>
          {REVIEWS.map((review, index) => {
            return (
              <ReviewCard
                key={index}
                stars={review.stars}
                company_name={review.company_name}
                company_logo={review.company_logo}
                text={review.text}
                customer_name={review.customer_name}
                customer_avatar={review.customer_avatar}
                customer_role={review.customer_role}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
