"use client";
import PromiseCard from "@/components/promise-card/promise-card";
import { Metadata } from "next";
import { ReactNode, useEffect } from "react";
import { FaCoffee } from "react-icons/fa";
import style from "./page.module.css";

export default function Home(): ReactNode {
  return (
    <main className={style.content}>
      <h1>
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
        Votre{" "}
        <span id="signature" className="text-yellow">
          signature
        </span>
        .
      </h1>
      <h2>Tous les sites web se ressemblent</h2>
      <button className="btn-primary">Prendre RDV</button>
      <p className="btn-rounded-secondary">
        10+ sites réalisés <FaCoffee />
      </p>

      <h2>Optez pour un site web à votre mesure</h2>
      <div className={style.promiseContainer}>
        <PromiseCard
          image={"/images/contact.webp"}
          alt={"Test"}
          title={"Un titre exemplaire"}
          description={"Une description qui l'est tout autant"}
        ></PromiseCard>
        <PromiseCard
          image={"/images/contact.webp"}
          alt={"Test"}
          title={"Un titre exemplaire"}
          description={"Une description qui l'est tout autant"}
        ></PromiseCard>
        <PromiseCard
          image={"/images/contact.webp"}
          alt={"Test"}
          title={"Un titre exemplaire"}
          description={"Une description qui l'est tout autant"}
        ></PromiseCard>
      </div>
    </main>
  );
}
