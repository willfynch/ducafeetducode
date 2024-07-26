import Slider from "@/components/slider/slider";
import style from "./portfolio.module.css";
import { ReactNode } from "react";
import { ProjectModel } from "@/models/project.model";

function PortfolioSection(): ReactNode {
  const PROJECTS: ProjectModel[] = [
    {
      image: "images/contact.webp",
      alt: "",
      title: "Miora Sophro",
      url: new URL("https://miorasophrologie.fr"),
      description: "Sophrologue indépendante basée à Thiais",
    },
    {
      image: "images/hero_2.webp",
      alt: "",
      title: "My Project",
      url: new URL('https://miorasophrologie.fr'),
      description: "Un projet de test"
    }
  ];

  return (
    <section className={style.section}>
      <div className={style.text_wrapper}>
        <h2>Nos dernières réalisations</h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Slider projects={PROJECTS}></Slider>
      </div>
    </section>
  );
}

export default PortfolioSection;
