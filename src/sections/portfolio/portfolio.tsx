import Slider from "@/components/slider/slider";
import style from "./portfolio.module.css";
import ProjectCard from "@/components/project-card/project-card";
import { ReactNode } from "react";

function PortfolioSection() : ReactNode {
  return (
    <section className={style.section}>
      <div className={style.text_wrapper}>
        <h2>Nos dernières réalisations</h2>
      </div>

      <Slider>
        <ProjectCard
          image={"images/contact.webp"}
          alt={""}
          title={"Mon projet"}
          url={new URL("https://test.fr")}
          description={"blablablablablablal"}
        />
        <ProjectCard
          image={"images/contact.webp"}
          alt={""}
          title={"Mon projet"}
          url={new URL("https://test.fr")}
          description={"blablablablablablal"}
        />
        <ProjectCard
          image={"images/contact.webp"}
          alt={""}
          title={"Mon projet"}
          url={new URL("https://test.fr")}
          description={"blablablablablablal"}
        />
      </Slider>
    </section>
  );
}

export default PortfolioSection;
