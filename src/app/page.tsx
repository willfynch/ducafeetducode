"use client";
import PromiseCard from "@/components/promise-card/promise-card";
import { ReactNode, useEffect, useRef } from "react";
import { FaCoffee } from "react-icons/fa";
import style from "./page.module.css";
import ProjectCard from "@/components/project-card/project-card";
import Slider from "@/components/slider/slider";

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
      <button className="btn-primary">Prendre RDV</button>
      <p className="btn-rounded-secondary">
        10+ sites réalisés <FaCoffee />
      </p>



      <h2 style={{ textAlign: "center" }}>Tous les sites web se ressemblent</h2>
      <p>
        La plupart des sites web sont conçus de manière impersonnelle. Ils
        pourraient être le vôtre, ou celui de votre concurrent.<br/><br/> Ce n’est pas ce
        que vous voulez. Vous, vous avez besoin <strong>qu’on se souvienne de vous</strong>.
      </p>

      <h2 style={{ textAlign: "center" }}>Et la plupart sont des usines à gaz</h2>





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
