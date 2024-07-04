"use client";
import PromiseCard from "@/components/promise-card/promise-card";
import { ReactNode } from "react";
import { FaCoffee } from "react-icons/fa";
import style from "./page.module.css";
import ProjectCard from "@/components/project-card/project-card";
import Slider from "@/components/slider/slider";

export default function Home(): ReactNode {
  return (
    <main className={style.content}>
      <section className={style.hero + " overlay "} id="hero">
        <p className="btn-rounded-secondary unselectable">
          10+ sites réalisés <FaCoffee />
        </p>
        <h1 className={style.title + " unselectable"}>
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
            <span>
            signature
            </span>
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
                stroke-width="5"
                stroke-linecap="round"
              />
            </svg>
          </span>
          .
          </div>
        </h1>

        <button className="btn-primary">Prendre rendez-vous</button>
      </section>

      <h2 style={{ textAlign: "center" }}>Tous les sites web se ressemblent</h2>
      <p>
        La plupart des sites web sont conçus de manière impersonnelle. Ils
        pourraient être le vôtre, ou celui de votre concurrent.
        <br />
        <br /> Ce n’est pas ce que vous voulez. Vous, vous avez besoin{" "}
        <strong>qu’on se souvienne de vous</strong>.
      </p>
      page_signature_svg__F3BEw
      <h2 style={{ textAlign: "center" }}>
        Et la plupart sont des usines à gaz
      </h2>

      <h2 style={{ textAlign: "center" }}>
        Optez pour un site web à votre mesure
      </h2>
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
      <div style={{ paddingTop: "200px" }}></div>

      <h2 style={{ textAlign: "center" }}>Dernières réalisations</h2>
      <Slider>
        <ProjectCard
          image={"/images/contact.webp"}
          alt={"contact"}
          title={"Miora Sophrologie"}
          url={new URL("https://a.fr")}
          description={""}
        ></ProjectCard>
        <ProjectCard
          image={"/images/contact.webp"}
          alt={"contact"}
          title={"Miora Sophrologie"}
          url={new URL("https://a.fr")}
          description={
            "The code imports essential modules and creates an active instance of the FastAPI class named app"
          }
        ></ProjectCard>
        <ProjectCard
          image={"/images/contact.webp"}
          alt={"contact"}
          title={"Miora Sophrologie"}
          url={new URL("https://a.fr")}
          description={""}
        ></ProjectCard>
        <ProjectCard
          image={"/images/contact.webp"}
          alt={"contact"}
          title={"Miora Sophrologie"}
          url={new URL("https://a.fr")}
          description={""}
        ></ProjectCard>
        <ProjectCard
          image={"/images/contact.webp"}
          alt={"contact"}
          title={"Miora Sophrologie"}
          url={new URL("https://a.fr")}
          description={""}
        ></ProjectCard>
      </Slider>
      <div style={{ paddingTop: "200px" }}></div>
    </main>
  );
}
