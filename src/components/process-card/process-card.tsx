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
    console.log(latest)
    setHookedYPosition(latest * 100);
  });

  function handleClick(): (() => void) | void | undefined {
    if (props.call_to_action) {
      return props.call_to_action.action;
    } else {
      return;
    }
  }

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
          <button onClick={handleClick} className="btn btn-primary">
            {props.call_to_action.text}
          </button>
        )}
      </div>
    </div>
  );
}

export default ProcessCard;
