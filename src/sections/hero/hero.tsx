import { ReactNode } from "react";
import style from "./hero.module.css";
import { FaCoffee } from "react-icons/fa";

function HeroSection(): ReactNode {
  return (
    <section className={style.hero + " overlay "} id="hero">
      {/* SOCIAL PROOF */}
      <p className={style.hero_social_proof + ' btn-rounded-secondary unselectable '}>
        10+ sites réalisés <FaCoffee />
      </p>

      {/* TITRE */}
      <h1 id="hero_title" className={style.title + " unselectable"}>
        Plus qu’un{" "}
        <span className={style.siteWeb + " text-yellow "}>
          <div className={style.letter} data-index={1}>
            s
          </div>
          <div className={style.letter} data-index={2}>
            i
          </div>
          <div className={style.letter} data-index={3}>
            t
          </div>
          <div className={style.letter} data-index={4}>
            e
          </div>
          <div className={style.letter} data-index={5}>
            &nbsp;
          </div>
          <div className={style.letter} data-index={6}>
            w
          </div>
          <div className={style.letter} data-index={7}>
            e
          </div>
          <div className={style.letter} data-index={8}>
            b
          </div>
        </span>
        ,
        <br />
        <div className={style.signature_div}>
          <span>Votre&nbsp;</span>
          <span id="signature" className={style.signature + " text-yellow"}>
            <span>signature</span>
            <svg
              id="text"
              className={style.signature_svg}
              width="360"
              height="190"
              viewBox="0 0 360 190"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="360" height="190" fill="none" />
              <path
                d="M52.8094 113.645C57.3543 112.666 61.961 109.368 66.5006 107.988C86.8915 101.786 108.344 97.5099 129.322 93.8509C160.148 88.4742 190.638 86.7668 221.81 89.4599C245.314 91.4905 268.687 92.1008 292.098 95.3956C299.931 96.498 307.874 98.1267 315.745 98.8068"
                stroke="#EEC800"

              />
            </svg>
          </span>
          .
        </div>
      </h1>

      {/* SUBTITLE */}
      <p className={style.subtitle}>Sites web sur mesure pour petites structures.</p>

      {/* CTA */}
      <button className={style.hero_cta + " btn-primary "}>
        Prendre rendez-vous
      </button>
    </section>
  );
}

export default HeroSection;
