"use client";
import { ReactNode, useState } from "react";
import style from "./slider.module.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

import { ProjectModel } from "@/models/project.model";
import { TbExternalLink } from "react-icons/tb";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  wrap,
} from "framer-motion";
import UpWavesWhite from "../UpWavesWhite";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) : number => {
  return Math.abs(offset) * velocity;
};
function Slider(props: { projects: ProjectModel[] }): ReactNode {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) : void => {
    setPage([page + newDirection, newDirection]);
  };
  const imageIndex = wrap(0, props.projects.length, page);
  const variants = {
    enter: (direction: number) : { x:number, opacity:number } => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) : { x:number, opacity:number, zIndex:number } => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
      };
    },
  };
  return (
    <div className={style.slider_track}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.span
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          drag="x"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={style.image_span}
        >
          <Image
            className={style.image}
            src={props.projects[imageIndex].image}
            fill
            alt={props.projects[imageIndex].title}
          ></Image>
        </motion.span>
      </AnimatePresence>
      <button onClick={() => paginate(-1)} className={style.slider_btn_left}>
        <FaChevronCircleLeft />
      </button>
      <button onClick={() => paginate(1)} className={style.slider_btn_right}>
        <FaChevronCircleRight />
      </button>

      <div className={style.contentContainer}>
        <UpWavesWhite />
        <div className={style.content}>
          <h4>{props.projects[imageIndex].title.toUpperCase()}</h4>
          <p>{props.projects[imageIndex].description}</p>
          <a href={props.projects[imageIndex].url.toString()} target="_blank" className="btn btn-primary">
            Visiter <TbExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Slider;
