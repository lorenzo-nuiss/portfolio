import React, { useState, useEffect } from "react";
import { TimelineDemo } from "../../components/ui/demo";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export default function Home() {
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    const root = window.document.documentElement;
    root.lang = lang;

    if (lang === "en") {
      document.title = "Lorenzo Nuissier — Fullstack Developer | Portfolio";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Portfolio of Lorenzo Nuissier, Fullstack Developer. Discover my projects in Java (Quarkus, Spring Boot), React, Next.js, Node.js, and React Native, as well as my career journey since 2020.",
        );
      }
    } else {
      document.title = "Lorenzo Nuissier — Développeur Fullstack | Portfolio";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Portfolio de Lorenzo Nuissier, Développeur Fullstack. Découvrez mes projets en Java (Quarkus, Spring Boot), React, Next.js, Node.js et React Native, ainsi que mon parcours professionnel depuis 2020.",
        );
      }
    }
  }, [lang]);

  const handleScrollToTimeline = () => {
    const element = document.getElementById("projects-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Hero
        onScrollToTimeline={handleScrollToTimeline}
        lang={lang}
        setLang={setLang}
      />
      <div className="w-full">
        <Projects lang={lang} />
      </div>
      <div className="w-full border-t border-neutral-200/50 dark:border-neutral-800/50">
        <TimelineDemo lang={lang} />
      </div>
    </div>
  );
}
