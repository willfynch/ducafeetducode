"use client";
import PromiseCard from "@/components/promise-card/promise-card";
import { ReactNode } from "react";
import style from "./page.module.css";
import ProjectCard from "@/components/project-card/project-card";
import Slider from "@/components/slider/slider";
import HeroSection from "@/sections/hero";

export default function Home(): ReactNode {
  return (
    <main className={style.content}>

      <HeroSection></HeroSection>
      <h2 style={{ textAlign: "center" }}>Tous les sites web se ressemblent</h2>
      <p>
        La plupart des sites web sont conçus de manière impersonnelle. Ils
        pourraient être le vôtre, ou celui de votre concurrent.
        <br />
        <br /> Ce n’est pas ce que vous voulez. Vous, vous avez besoin{" "}
        <strong>qu’on se souvienne de vous</strong>.
      </p>
      
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
