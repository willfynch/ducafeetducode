"use client";
import PromiseCard from "@/components/promise-card/promise-card";
import { ReactNode, useEffect, useRef } from "react";
import { FaCoffee } from "react-icons/fa";
import style from "./page.module.css";
import ProjectCard from "@/components/project-card/project-card";

export default function Home(): ReactNode {

  const trackRef = useRef<HTMLElement | null>(null);

  useEffect(()=>{
    if(typeof window === 'undefined') return;
    const track = document.getElementById('track');
    trackRef.current = track;
  },[])

  function handleMouseMove(e:React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>): void {
    const track = trackRef.current;
    let clientX:number;
    if( isMouseEvent(e)){
      clientX = e.clientX; 
    }else{
      clientX = e.touches[0].clientX; 
    }
    if(track?.dataset.mouseDownAt === '0' || track?.dataset.mouseDownAt===undefined) return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta/maxDelta) * -100;
    let nextPercentage = parseFloat(track.dataset.prevPercentage!) + percentage; 
    nextPercentage = Math.min(nextPercentage, 50); 
    nextPercentage = Math.max(nextPercentage,-50)
    track.dataset.percentage = nextPercentage.toString();
    
    track.animate({
      transform: `translate(${nextPercentage}%)`
    }, { duration: 1200, fill: "forwards" });

  }

  function isMouseEvent(e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>): e is React.MouseEvent<HTMLElement> {
    return 'clientX' in e;
  }
  
  function handleMouseDown(e: React.MouseEvent<HTMLElement> |  React.TouchEvent<HTMLElement>) : void {
    const target = e.currentTarget as HTMLElement;
    let clientX:number;
    if( isMouseEvent(e)){
      clientX = e.clientX; 
    }else{
      clientX = e.touches[0].clientX; 
    }
    target.dataset.mouseDownAt = String(clientX);
  }
  

  function handleMouseUp(e: React.MouseEvent<HTMLElement> | React.TouchEvent<HTMLElement>) : void {
    const target = e.currentTarget as HTMLElement;
    target.dataset.mouseDownAt = '0';
    target.dataset.prevPercentage = target.dataset.percentage;
  }
  

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
      <div style={{ paddingTop: "200px" }}></div>
      <section id="track" data-percentage='0' onTouchStart={handleMouseDown} onTouchEnd={handleMouseUp} onTouchMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}  onMouseDown={handleMouseDown} data-mouse-down-at='0' data-prev-percentage="0" className={style.projectCardsTrack}>
        <ProjectCard
          image={"/images/contact.webp"}
          alt={"contact"}
          title={"Miora Sophrologie"} url={new URL("https://a.fr")} description={""}        ></ProjectCard>
        <ProjectCard
          image={"/images/contact.webp"}
          alt={"contact"}
          title={"Miora Sophrologie"} url={new URL("https://a.fr")} description={"The code imports essential modules and creates an active instance of the FastAPI class named app"}        ></ProjectCard>
        <ProjectCard
          image={"/images/contact.webp"}
          alt={"contact"}
          title={"Miora Sophrologie"} url={new URL("https://a.fr")} description={""}        ></ProjectCard>
        <ProjectCard
          image={"/images/contact.webp"}
          alt={"contact"}
          title={"Miora Sophrologie"} url={new URL("https://a.fr")} description={""}        ></ProjectCard>
        <ProjectCard
          image={"/images/contact.webp"}
          alt={"contact"}
          title={"Miora Sophrologie"} url={new URL("https://a.fr")} description={""}        ></ProjectCard>
      </section>
      <div style={{ paddingTop: "200px" }}></div>
    </main>
  );
}
