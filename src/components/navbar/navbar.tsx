"use client";
import { ReactNode, useState } from "react";
import style from "./navbar.module.css";
import { NavItemModel } from "@/models/navitem.model";
import Link from "next/link";
import { GiCoffeeBeans } from "react-icons/gi";
import { useMotionValueEvent, useScroll } from "framer-motion";

function Navbar(): ReactNode {
  const { scrollYProgress } = useScroll();
  const [hookedYPostion, setHookedYPosition] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setHookedYPosition(latest * 100);
  });

  const navItems: NavItemModel[] = [
    {
      path: "methode",
      label: "Méthode",
    },
    {
      path: "tarifs",
      label: "Tarifs",
    },
    {
      path: "FAQ",
      label: "F.A.Q",
    },
  ];

  return (
    <header className={style.external_container}>
      <div
        className={
          style.nav_container +
          " " +
          (hookedYPostion > 0.2 ? style.nav_container_scrolled : "")
        }
      >
        <Link className={style.brand} href={"/"}>
          <GiCoffeeBeans /> 
          <span className={style.brand_name}>Du Café et du Code</span>
        </Link>
        <nav>
          {navItems.map((item, index) => {
            return (
              <Link className={style.nav_link} key={index} href={`#${item.path}`}>
                {item.label}
              </Link>
            );
          })}
          <a href={process.env.NEXT_PUBLIC_CALENDLY} target="_blank" className="btn-primary">Prendre rendez-vous</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
