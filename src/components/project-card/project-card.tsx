import { ReactNode } from "react";
import style from "./project-card.module.css";
import { ProjectModel } from "@/models/project.model";
import { TbExternalLink } from "react-icons/tb";
function ProjectCard(props: ProjectModel): ReactNode {
  return (
    <div className={style.project_card__container}>
      <img
        draggable={false}
        className={style.project_card__image}
        src={props.image}
        alt={props.alt}
      />
      <div className={style.project_card__body}>
        <h4>{props.title}</h4>
        <a draggable={false} role="button" target="_blank" href={props.url.toString()} className="btn-primary">Visiter &nbsp;<TbExternalLink /></a>
      </div>
    </div>
  );
}

export default ProjectCard;
