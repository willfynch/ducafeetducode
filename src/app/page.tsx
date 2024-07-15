"use client";
import { ReactNode } from "react";
import style from "./page.module.css";
import HeroSection from "@/sections/hero/hero";
import HookSection from "@/sections/hook/hook";
import FAQSection from "@/sections/faq/faq";
import ProcessSection from "@/sections/process/process";

export default function Home(): ReactNode {

  return (
    <main className={style.content}>
      <HeroSection></HeroSection>
      <HookSection></HookSection>
      <ProcessSection></ProcessSection>
      <FAQSection></FAQSection>
    </main>
  );
}
