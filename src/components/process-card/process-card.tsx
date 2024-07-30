
'use client'
import { ReactNode, useRef, useState } from "react";
import style from "./process-card.module.css";
import Image from "next/image";
import { ProcessCardModel } from "@/models/process-step.model";
import { useMotionValueEvent, useScroll } from "framer-motion";

function ProcessCard(props: ProcessCardModel): ReactNode {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target:ref
  });
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest * 100);
  });


  return (
    <div ref={ref} className={style.process_card_container + ' ' + (hookedYPostion < 100 ? style.into_view : ' ')}>
      <div className={style.process_card_picture}>
        <Image fill src={"/images/contact.webp"} alt={""}></Image>
      </div>
      <div>
        <p className={style.process_card_step_name}>{"étape ".toUpperCase() + props.number}</p>
        <h3 className={style.process_card_title}>{props.title}</h3>
        <p className={style.process_card_description}>{props.description}</p>
        {props.call_to_action && (
          <a target={props.call_to_action.isInternal ? '_self': '_blank'} href={props.call_to_action.link} className="btn btn-primary">
            {props.call_to_action.text}
          </a>
        )}
      </div>
    </div>
  );
}

export default ProcessCard;
