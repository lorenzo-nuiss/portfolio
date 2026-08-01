import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Terminal,
  ArrowDown,
  Sun,
  Moon,
  Mail,
  CheckCircle2,
} from "lucide-react";
import avatar3DCutout from "../assets/images/myAvatar.png";
import { ContactModal } from "./ContactModal";

export function Hero({ onScrollToTimeline, lang = "fr", setLang }) {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const isEn = lang === "en";

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const glassVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 border-b border-neutral-200/80 dark:border-neutral-800/80 transition-colors duration-300">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/10 dark:bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Utility Header */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-neutral-900/90 dark:bg-neutral-100/90 backdrop-blur-md flex items-center justify-center shadow-sm">
            <Terminal className="w-4 h-4 text-white dark:text-black" />
          </div>
          <span className="font-mono text-xs tracking-wider text-neutral-500 dark:text-neutral-400 uppercase">
            Portfolio
          </span>
        </div>

        {/* Right Controls: Language Toggle & Theme Toggle */}
        <div className="flex items-center gap-3">
          {/* Language Switch Pill */}
          <div className="flex items-center p-1 bg-white/70 dark:bg-neutral-900/70 backdrop-blur-md rounded-full border border-neutral-200/80 dark:border-neutral-800/80 shadow-xs">
            <button
              onClick={() => setLang && setLang("fr")}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                lang === "fr"
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 shadow-xs"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
              title="Passer en Français"
            >
              FR
            </button>
            <button
              onClick={() => setLang && setLang("en")}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                lang === "en"
                  ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 shadow-xs"
                  : "text-neutral-500 hover:text-neutral-800 dark:text-neutral-400 dark:hover:text-neutral-200"
              }`}
              title="Switch to English"
            >
              EN
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6 md:space-y-8"
            >
              {/* Main Title */}
              <motion.h1
                variants={itemVariants}
                className="text-3xl md:text-5xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15]"
              >
                {isEn ? "Hi, I'm Lorenzo" : "Salut, je suis Lorenzo"} <br />
                <span className="bg-gradient-to-r from-neutral-600 via-neutral-500 to-neutral-400 dark:from-neutral-300 dark:via-neutral-400 dark:to-neutral-500 bg-clip-text text-transparent">
                  {isEn ? "Fullstack Developer." : "Developpeur Fullstack."}
                </span>
              </motion.h1>

              {/* Concise Description */}
              <motion.p
                variants={itemVariants}
                className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl"
              >
                {isEn
                  ? "Started in 2018 with little IT knowledge, but a passionate drive to learn and grow. Here is my portfolio, a journey through my digital adventures up to today."
                  : "Un début en 2018 avec peu de connaissances en informatique, mais une passion dévorante pour apprendre et grandir. Voici mon portfolio, un voyage à travers mes aventures numériques jusqu'à aujourd'hui."}
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <button
                  onClick={onScrollToTimeline}
                  className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 dark:bg-neutral-100 dark:hover:bg-neutral-200 text-white dark:text-black font-medium text-sm flex items-center gap-2 shadow-md transition-all duration-200 cursor-pointer"
                >
                  {isEn ? "Explore my projects" : "Découvrir mes projets"}
                  <ArrowDown className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm flex items-center gap-2 shadow-md transition-all duration-200 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  {isEn ? "Contact me" : "Me contacter"}
                </button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Avatar in Glassmorphism Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={glassVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-sm md:max-w-md lg:max-w-[420px] lg:max-h-[620px]"
            >
              {/* Outer Ambient Radial Glow */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-500/20 via-purple-500/30 to-blue-500/20 blur-3xl opacity-80 pointer-events-none" />

              {/* Main Glassmorphism Floating Frame */}
              <div className="relative rounded-3xl backdrop-blur-2xl bg-white/40 dark:bg-neutral-900/50 border border-white/60 dark:border-neutral-700/50 p-6 shadow-2xl space-y-6 overflow-hidden">
                {/* Character Container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-indigo-950/90 via-slate-900 to-neutral-950 border border-white/20 dark:border-neutral-700/60 shadow-2xl flex items-center justify-center lg:max-h-[min(56vh,720px)]">
                  {/* Backdrop Glow behind Character */}
                  <div className="absolute w-48 h-48 rounded-full bg-indigo-500/30 blur-2xl top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                  {/* Character Image - Centered */}
                  <img
                    src={avatar3DCutout}
                    alt="Mon Avatar Developpeur"
                    className="relative z-10 w-full h-full object-cover object-center filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.6)]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Glass Card Overlay - Bottom Info Floating Tag */}
                  <div className="absolute bottom-3 inset-x-3 z-20 p-3 rounded-xl backdrop-blur-md bg-neutral-950/75 border border-white/20 text-white space-y-1 shadow-xl">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold font-mono text-indigo-300">
                        // current_stack.js
                      </p>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <p className="text-[11px] text-neutral-300 font-mono">
                      React • Next.js • Java (Quarkus) • PostgreSQL
                    </p>
                  </div>
                </div>

                {/* Glass Specs Footer */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="p-3 rounded-xl backdrop-blur-md bg-white/50 dark:bg-neutral-800/50 border border-white/50 dark:border-neutral-700/50 text-center shadow-sm">
                    <p className="text-[10px] uppercase font-mono text-neutral-500 dark:text-neutral-400">
                      {isEn ? "Experience" : "Expérience"}
                    </p>
                    <p className="text-xs font-bold text-neutral-800 dark:text-neutral-100 mt-0.5">
                      {isEn ? "Since 2020" : "Depuis 2020"}
                    </p>
                  </div>
                  <div className="p-3 rounded-xl backdrop-blur-md bg-white/50 dark:bg-neutral-800/50 border border-white/50 dark:border-neutral-700/50 text-center shadow-sm">
                    <p className="text-[10px] uppercase font-mono text-neutral-500 dark:text-neutral-400">
                      {isEn ? "Specialty" : "Spécialité"}
                    </p>
                    <p className="text-xs font-bold text-neutral-800 dark:text-neutral-100 mt-0.5">
                      {isEn ? "Fullstack Dev" : "Développeur Fullstack"}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Contact Modal Popup */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        lang={lang}
      />
    </section>
  );
}
