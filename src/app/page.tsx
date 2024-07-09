"use client";
import PromiseCard from "@/components/promise-card/promise-card";
import { ReactNode } from "react";
import style from "./page.module.css";
import ProjectCard from "@/components/project-card/project-card";
import Slider from "@/components/slider/slider";
import HeroSection from "@/sections/hero/hero";
import HookSection from "@/sections/hook/hook";
import FAQSection from "@/sections/faq/faq";

export default function Home(): ReactNode {

  return (
    <main className={style.content}>
      <HeroSection></HeroSection>
      <HookSection></HookSection>
      <FAQSection></FAQSection>
      {/* <div style={{ paddingTop: "800px" }}></div>

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
      <div style={{ paddingTop: "200px" }}></div> */}
    </main>
  );
}
