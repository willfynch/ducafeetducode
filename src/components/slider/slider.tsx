"use client";
import { ReactNode, useEffect, useRef } from "react";
import style from "./slider.module.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Slider({ children }: { children: ReactNode }): ReactNode {
  const trackRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const track = document.getElementById("track");
    trackRef.current = track;
  }, []);

  function slideLeft(): void {
    const track = trackRef.current;
    if (!track) return;
    const children: NodeListOf<Element> = track.querySelectorAll("*");
    const cardWidth = (children[0] as HTMLElement).offsetWidth + 16;
    track.scrollLeft += -1 * cardWidth;
  }

  function slideRight(): void {
    const track = trackRef.current;
    if (!track) return;
    const children: NodeListOf<Element> = track.querySelectorAll("*");
    const cardWidth = (children[0] as HTMLElement).offsetWidth + 16;
    track.scrollLeft += cardWidth;
  }

  return (
    <div className={style.slider_container}>
      <div className={style.slider_btns}>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={slideLeft}
          className={style.slider_btn_left}
        >
          <FaChevronCircleLeft />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={slideRight}
          className={style.slider_btn_right}
        >
          <FaChevronCircleRight />
        </motion.button>
      </div>
      <div id="track" className={style.slider_track}>
        {children}
      </div>
    </div>
  );
}

export default Slider;
