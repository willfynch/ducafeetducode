"use client";
import { ReactNode } from "react";
import style from "./page.module.css";
import HeroSection from "@/sections/hero/hero";
import HookSection from "@/sections/hook/hook";
import FAQSection from "@/sections/faq/faq";

export default function Home(): ReactNode {

  return (
    <main className={style.content}>
      <HeroSection></HeroSection>
      <HookSection></HookSection>
      <FAQSection></FAQSection>
    </main>
  );
}
