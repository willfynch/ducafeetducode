"use client";
import { ReactNode } from "react";
import style from "./page.module.css";
import HeroSection from "@/sections/hero/hero";
import HookSection from "@/sections/hook/hook";
import FAQSection from "@/sections/faq/faq";
import ProcessSection from "@/sections/process/process";
import PricingSection from "@/sections/pricing/pricing";
import PortfolioSection from "@/sections/portfolio/portfolio";
import ReviewsSection from "@/sections/reviews/reviews";

export default function Home(): ReactNode {

  return (
    <main className={style.content}>
      <HeroSection></HeroSection>
      <HookSection></HookSection>
      <ProcessSection></ProcessSection>
      <PricingSection></PricingSection>
      <PortfolioSection></PortfolioSection>
      <ReviewsSection></ReviewsSection>
      <FAQSection></FAQSection>
    </main>
  );
}
