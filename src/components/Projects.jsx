import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import reserveHome from "../assets/images/screenProject/reserveMe/Screen-home-OBistrot.png";
import reserveDashboard from "../assets/images/screenProject/reserveMe/Screen-dashboard-oBistrot.png";
import plateformation1 from "../assets/images/screenProject/plateformation/Plateformation-screen1.png";
import plateformation2 from "../assets/images/screenProject/plateformation/Plateformation-screen2.png";
import plateformation4 from "../assets/images/screenProject/plateformation/Plateformation-screen4.png";
import locavores1 from "../assets/images/screenProject/locavores-screen1.png";
import locavores2 from "../assets/images/screenProject/locavores-screen-2.png";
import locavores3 from "../assets/images/screenProject/locavores-screen-3.png";
import pdf1 from "../assets/images/screenProject/GenerateurPDF/Autosignature-screen1.png";
import pdf4 from "../assets/images/screenProject/GenerateurPDF/Autosignature-screen4.png";
import pdf5 from "../assets/images/screenProject/GenerateurPDF/Autosignature-screen5.png";
import wanac1 from "../assets/images/screenProject/wannaAc/screenFigmaWanaac1.png";
import wanac2 from "../assets/images/screenProject/wannaAc/screenFigmaWanaac2.png";
import wanac3 from "../assets/images/screenProject/wannaAc/screenFigmaWanaac3.png";
import autoecole1 from "../assets/images/screenProject/Autoecole-screen1.png";
import autoecole2 from "../assets/images/screenProject/Autoecole-screen2.png";
import autoecole3 from "../assets/images/screenProject/Autoecole-screen3.png";
import autoecole4 from "../assets/images/screenProject/Autoecole-screen4.png";
import autoecole5 from "../assets/images/screenProject/Autoecole-screen5.png";
import driveUp from "../assets/images/screenProject/driveUp/Screenshot_1711754995.png";
import {
  Code2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Utensils,
  Globe,
  FileText,
  Cpu,
  Car,
  X,
  Smartphone,
} from "lucide-react";

const PROJECTS_DATA = [
  {
    id: 1,
    title: "Reserve me / Ô Bistrot",
    categoryFr: "Full Stack",
    categoryEn: "Full Stack",
    shortDescFr:
      "Système de réservation et gestion de carte pour restaurant combinant un backend Java Spring Boot et un frontend React.",
    shortDescEn:
      "Restaurant reservation and menu management system combining a Java Spring Boot backend and a reactive React frontend.",
    tech: [
      "Java (Spring Boot)",
      "React",
      "API REST",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    statsFr: {
      context: "Projet perso",
      role: "Développeur Full Stack",
      type: "Web & API",
    },
    statsEn: {
      context: "Personal project",
      role: "Full Stack Developer",
      type: "Web & API",
    },
    challengeFr:
      "Créer une architecture d'API REST robuste en Java pour gérer la disponibilité des tables et la carte en temps réel avec un frontend fluide.",
    challengeEn:
      "Building a robust Java REST API architecture to manage real-time table availability and menu items with a smooth frontend.",
    solutionFr:
      "Développement d'une API REST sécurisée avec Spring Boot et conception d'une interface React épurée pour les clients et restaurateurs.",
    solutionEn:
      "Developing a secure REST API with Spring Boot and designing a clean React UI for both customers and restaurant staff.",
    images: [reserveHome, reserveDashboard],
    icon: Utensils,
  },
  {
    id: 2,
    title: "Plateformation",
    categoryFr: "Web & WordPress",
    categoryEn: "Web & WordPress",
    shortDescFr:
      "Refonte complète du site web de l'organisme de formation certifié CPF Plateformation pour booster la crédibilité, le trafic et la conversion d'apprenants.",
    shortDescEn:
      "Complete redesign of the CPF-certified training provider website to boost credibility, web traffic, and student conversions.",
    tech: ["WordPress", "PHP", "CSS3", "UX/UI Design", "SEO"],
    statsFr: {
      context: "Projet client",
      role: "Développeur & Designer",
      type: "Refonte Web",
    },
    statsEn: {
      context: "Client project",
      role: "Developer & Designer",
      type: "Web Redesign",
    },
    challengeFr:
      "Refondre un site existant peu esthétique et incomplet pour renforcer l'image de marque de l'organisme.",
    challengeEn:
      "Redesigning an outdated and incomplete website to strengthen brand identity and convert visitors into enrolled students.",
    solutionFr:
      "Conception d'un nouveau parcours utilisateur sous WordPress, restructuration dynamique du catalogue de formations et optimisation SEO ciblée.",
    solutionEn:
      "Designing a new user experience in WordPress, dynamically restructuring the training catalog, and targeted SEO optimization.",
    images: [plateformation1, plateformation2, plateformation4],
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "Les Locavores",
    categoryFr: "Full Stack",
    categoryEn: "Full Stack",
    shortDescFr:
      "Plateforme web en Symfony 5 facilitant la mise en relation directe et le circuit court entre producteurs locaux et particuliers.",
    shortDescEn:
      "Symfony 5 web platform connecting local farmers directly with consumers through short supply chains.",
    tech: ["Symfony 5", "PHP", "MySQL", "JavaScript", "SCSS"],
    statsFr: {
      context: "Projet d'études",
      role: "Développeur Full Stack",
      type: "Circuit court",
    },
    statsEn: {
      context: "Academic project",
      role: "Full Stack developer",
      type: "Short food chain",
    },
    challengeFr:
      "Créer un espace intuitif permettant aux producteurs de référencer leurs produits frais et aux particuliers d'acheter localement.",
    challengeEn:
      "Creating an intuitive hub for local producers to list fresh produce and for locals to purchase directly.",
    solutionFr:
      "Architecture MVC sous Symfony 5 avec base MySQL relationnelle, styles SCSS personnalisés et composantes JavaScript dynamiques.",
    solutionEn:
      "Symfony 5 MVC architecture with MySQL relational DB, custom SCSS styling, and dynamic JavaScript components.",
    images: [locavores2, locavores1, locavores3],
    icon: Globe,
  },
  {
    id: 4,
    title: "Générateur & Éditeur de PDF",
    categoryFr: "Full Stack",
    categoryEn: "Full Stack",
    shortDescFr:
      "Application interne collaborative développée en équipe pour créer et modifier des documents PDF complexes selon des données dynamiques.",
    shortDescEn:
      "Collaborative internal app developed as a team to generate and edit complex PDF documents based on dynamic data.",
    tech: ["React", "Node.js", "Svelte", "SvelteKit", "PDF Engine"],
    statsFr: {
      context: "Projet interne",
      role: "Développeur Front/Back",
      type: "Outil métier",
    },
    statsEn: {
      context: "Internal tool",
      role: "Front/Back Developer",
      type: "Business tool",
    },
    challengeFr:
      "Concevoir un outil capable d'injecter des données métiers complexes dans des modèles PDF personnalisables en temps réel.",
    challengeEn:
      "Designing a tool capable of injecting complex business data into customizable PDF templates in real-time.",
    solutionFr:
      "Intégration d'un workflow réactif avec React, Node.js et Svelte/SvelteKit pour la manipulation et l'export haute qualité de documents PDF.",
    solutionEn:
      "Integration of a reactive workflow with React, Node.js, and Svelte/SvelteKit for high-quality PDF manipulation and export.",
    images: [pdf1, pdf4, pdf5],
    icon: FileText,
  },
  {
    id: 5,
    title: "WanAC — SaaS Next.js",
    categoryFr: "Full Stack",
    categoryEn: "Full Stack",
    shortDescFr:
      "Plateforme SaaS B2B sur-mesure développée en Next.js. Rôle de Tech Lead pour piloter l'équipe et fixer les choix d'architecture.",
    shortDescEn:
      "Custom B2B SaaS platform built with Next.js. Tech Lead role guiding the team and shaping core architectural decisions.",
    tech: ["Next.js", "React", "Node.js", "TypeScript", "Architecture Lead"],
    statsFr: {
      context: "Projet privé",
      role: "Tech lead",
      type: "Plateforme SaaS",
    },
    statsEn: {
      context: "Private project",
      role: "Tech lead",
      type: "SaaS platform",
    },
    challengeFr:
      "Garantir une architecture extensible et performante pour une plateforme SaaS privée.",
    challengeEn:
      "Ensuring a scalable, performant architecture for a private SaaS platform .",
    solutionFr:
      "Pilotage des choix technologiques avec Next.js (React + Node.js), mise en place de standards de code rigoureux et revue d'architecture.",
    solutionEn:
      "Leading technology choices with Next.js (React + Node.js), setting strict coding standards, and performing architectural reviews.",
    images: [wanac1, wanac2, wanac3],
    icon: Cpu,
  },
  {
    id: 6,
    title: "AutoEcoleGambetta",
    categoryFr: "Web & WordPress",
    categoryEn: "Web & WordPress",
    shortDescFr:
      "Création complète d'un site pour auto-école : cahier des charges, maquettage UI/UX, rédaction de contenu et développement WordPress.",
    shortDescEn:
      "Complete website creation for a driving school: technical specifications, UI/UX wireframing, copywriting, and WordPress build.",
    tech: ["WordPress", "UI/UX Design", "Wireframing", "Cahier des charges"],
    statsFr: {
      context: "Projet équipe",
      role: "Concepteur & Développeur",
      type: "Site vitrine",
    },
    statsEn: {
      context: "Team project",
      role: "Designer & Developer",
      type: "Showcase website",
    },
    challengeFr:
      "Accompagner une auto-école dans la numérisation de sa présence avec une expérience claire pour la consultation des permis et tarifs.",
    challengeEn:
      "Assisting a driving school in digitizing its web presence with a clear experience for exploring licenses and pricing.",
    solutionFr:
      "Travail d'équipe allant de la rédaction du cahier des charges et du maquettage jusqu'à l'intégration sur-mesure sur WordPress.",
    solutionEn:
      "Teamwork covering requirements drafting, wireframing, and custom WordPress implementation.",
    images: [autoecole1, autoecole2, autoecole3, autoecole4, autoecole5],
    icon: Car,
  },
  {
    id: 7,
    title: "Application Mobile Chauffeurs Taxi",
    categoryFr: "Mobile & Cloud",
    categoryEn: "Mobile & Cloud",
    shortDescFr:
      "Application mobile Android & iOS (React Native) avec backend distribué (Java EE Spring Boot, Node.js, MongoDB) et déploiement AWS.",
    shortDescEn:
      "Android & iOS mobile app (React Native) with distributed backend (Java EE Spring Boot, Node.js, MongoDB) and AWS deployment.",
    tech: [
      "React Native",
      "Java EE (Spring Boot)",
      "Node.js",
      "MongoDB",
      "AWS",
    ],
    statsFr: {
      context: "Projet mobile",
      role: "Architecte & Développeur mobile",
      type: "iOS & Android",
    },
    statsEn: {
      context: "Mobile project",
      role: "Mobile Architect & Developer",
      type: "iOS & Android",
    },
    challengeFr:
      "Concevoir une application mobile rapide et fonctionnelle répondant aux exigences quotidiennes des conducteurs de taxi sur le terrain.",
    challengeEn:
      "Designing a fast, reliable mobile app tailored to the daily operational needs of taxi drivers in the field.",
    solutionFr:
      "Analyse des besoins, wireframing, développement de l'application React Native cross-platform et déploiement de l'infrastructure sur AWS.",
    solutionEn:
      "Requirements analysis, wireframing, cross-platform React Native app development, and AWS infrastructure deployment.",
    images: [driveUp],
    icon: Smartphone,
  },
];

export function Projects({ lang = "fr" }) {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileSelectedProject, setMobileSelectedProject] = useState(null);
  const [carouselIndices, setCarouselIndices] = useState(
    PROJECTS_DATA.reduce((acc, p) => ({ ...acc, [p.id]: 0 }), {}),
  );

  const isEn = lang === "en";

  const filterCategories = [
    { id: "Tous", label: isEn ? "All" : "Tous" },
    { id: "Full Stack", label: "Full Stack" },
    { id: "Web & WordPress", label: "Web & WordPress" },
    { id: "Mobile & Cloud", label: "Mobile & Cloud" },
  ];

  const filteredProjects = PROJECTS_DATA.filter(
    (p) => activeCategory === "Tous" || p.categoryFr === activeCategory,
  );

  const nextImage = (e, projectId, imagesLength) => {
    e.stopPropagation();
    setCarouselIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] + 1) % imagesLength,
    }));
  };

  const prevImage = (e, projectId, imagesLength) => {
    e.stopPropagation();
    setCarouselIndices((prev) => ({
      ...prev,
      [projectId]: (prev[projectId] - 1 + imagesLength) % imagesLength,
    }));
  };

  return (
    <section
      id="projects-section"
      className="w-full py-24 bg-neutral-100 dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-neutral-500 dark:text-neutral-400 uppercase block mb-3">
              {isEn ? "Portfolio & Achievements" : "Portfolio & Réalisations"}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-50">
              {isEn ? "My Projects" : "Mes Projets"}
            </h2>
          </div>

          {/* Elegant Modern Filter Tab */}
          <div className="flex flex-wrap p-1.5 bg-neutral-200/60 dark:bg-neutral-900/60 rounded-xl border border-neutral-300/30 dark:border-neutral-800/30 gap-1 self-start">
            {filterCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-neutral-900 dark:text-white"
                      : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterTab"
                      className="absolute inset-0 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-300/40 dark:border-neutral-700/40"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Showcase Grid */}
          <div className="lg:col-span-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => {
                const imgIndex = carouselIndices[project.id] || 0;
                const IconComponent = project.icon;
                const isSelected = mobileSelectedProject?.id === project.id;
                const category = isEn ? project.categoryEn : project.categoryFr;
                const shortDesc = isEn
                  ? project.shortDescEn
                  : project.shortDescFr;

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => {
                      setSelectedProject(project);
                      setMobileSelectedProject(project);
                    }}
                    aria-current={isSelected ? "true" : undefined}
                    className={`group bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-8 border shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col md:flex-row gap-8 ${
                      isSelected
                        ? "border-indigo-500 ring-2 ring-indigo-500/30 shadow-lg dark:border-indigo-400 dark:ring-indigo-400/30"
                        : "border-neutral-200/70 dark:border-neutral-800/70 hover:border-neutral-300 dark:hover:border-neutral-700"
                    }`}
                  >
                    {/* Multi-image interactive Carousel */}
                    <div className="relative w-full md:w-80 aspect-16/10 m-auto rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 shrink-0 group/carousel">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={imgIndex}
                          src={project.images[imgIndex]}
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          referrerPolicy="no-referrer"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </AnimatePresence>

                      {/* Carousel Indicator Dots */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/30 backdrop-blur-md px-2 py-1 rounded-full">
                        {project.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                              idx === imgIndex ? "bg-white w-3" : "bg-white/50"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Navigation Chevrons (Visible on Hover) */}
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={(e) =>
                              prevImage(e, project.id, project.images.length)
                            }
                            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 hover:bg-white dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-md opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 cursor-pointer"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={(e) =>
                              nextImage(e, project.id, project.images.length)
                            }
                            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/90 dark:bg-neutral-900/90 hover:bg-white dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 shadow-md opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-200 cursor-pointer"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Content block */}
                    <div className="flex flex-col justify-between flex-grow space-y-4">
                      <div>
                        {/* Upper row: icon & category */}
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-lg text-neutral-700 dark:text-neutral-300">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase">
                            {category}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-neutral-950 dark:text-neutral-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed line-clamp-3">
                          {shortDesc}
                        </p>
                      </div>

                      {/* Tech stack & Action */}
                      <div className="space-y-4 pt-2">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tech.map((t) => (
                            <span
                              key={t}
                              className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/50 dark:border-neutral-700/50 text-[11px] font-medium text-neutral-700 dark:text-neutral-300"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline"></div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Right Column: Case Study Inspector / Detail Pane */}
          <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-8 h-fit">
            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-6 md:p-8 border border-neutral-200/70 dark:border-neutral-800/70 shadow-sm min-h-[400px] flex flex-col justify-between transition-colors duration-300">
              <AnimatePresence mode="wait">
                {selectedProject ? (
                  <motion.div
                    key={selectedProject.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase block mb-1">
                        {isEn ? "Project Details" : "Détails du projet"}
                      </span>
                      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-50">
                        {selectedProject.title}
                      </h3>
                    </div>

                    {/* Meta info tags */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-neutral-50 dark:bg-neutral-950 p-3 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50">
                        <p className="text-[10px] text-neutral-400 uppercase font-mono">
                          {isEn ? "Context" : "Contexte"}
                        </p>
                        <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">
                          {isEn
                            ? selectedProject.statsEn.context
                            : selectedProject.statsFr.context}
                        </p>
                      </div>
                      <div className="bg-neutral-50 dark:bg-neutral-950 p-3 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50">
                        <p className="text-[10px] text-neutral-400 uppercase font-mono">
                          {isEn ? "Role" : "Rôle"}
                        </p>
                        <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">
                          {isEn
                            ? selectedProject.statsEn.role
                            : selectedProject.statsFr.role}
                        </p>
                      </div>
                    </div>

                    {/* Challenge Block */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        {isEn ? "Goal & Challenge" : "Objectif & Défi"}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed bg-rose-500/5 dark:bg-rose-500/10 p-3 rounded-xl border border-rose-500/10">
                        {isEn
                          ? selectedProject.challengeEn
                          : selectedProject.challengeFr}
                      </p>
                    </div>

                    {/* Solution Block */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {isEn
                          ? "Implementation & Delivery"
                          : "Réalisation & Implémentation"}
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed bg-emerald-500/5 dark:bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/10">
                        {isEn
                          ? selectedProject.solutionEn
                          : selectedProject.solutionFr}
                      </p>
                    </div>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-full py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-800 text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-950 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                      {isEn ? "Hide details" : "Masquer les détails"}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-[360px] flex flex-col items-center justify-center text-center space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center text-neutral-400">
                      <Code2 className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                        {isEn
                          ? "No project selected"
                          : "Aucun projet sélectionné"}
                      </p>
                      <p className="text-xs text-neutral-400 dark:text-neutral-500 max-w-[200px] mx-auto mt-1">
                        {isEn
                          ? "Click a project to view detailed case study, context, and technical architecture."
                          : "Cliquez sur un projet pour en explorer la fiche détaillée, le contexte et l'architecture technique."}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Interactive Bottom Sheet / Overlay Modal */}
      <AnimatePresence>
        {mobileSelectedProject && (
          <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 lg:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileSelectedProject(null)}
              className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
            />

            {/* Modal Sheet Content */}
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative z-10 w-full max-w-xl max-h-[85vh] overflow-y-auto bg-white dark:bg-neutral-900 rounded-t-3xl sm:rounded-3xl p-6 shadow-2xl border border-neutral-200 dark:border-neutral-800 space-y-6"
            >
              {/* Touch drag handle bar */}
              <div className="w-12 h-1.5 bg-neutral-300 dark:bg-neutral-700 rounded-full mx-auto sm:hidden mb-2" />

              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-400 dark:text-neutral-500 uppercase block mb-1">
                    {isEn ? "Project Case Study" : "Fiche détaillée du projet"}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                    {mobileSelectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setMobileSelectedProject(null)}
                  className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Quick Image Preview */}
              <div className="relative h-48 rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <img
                  src={
                    mobileSelectedProject.images[
                      carouselIndices[mobileSelectedProject.id] || 0
                    ]
                  }
                  alt={mobileSelectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Meta Stats Grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60">
                  <p className="text-[10px] text-neutral-400 uppercase font-mono">
                    {isEn ? "Context" : "Contexte"}
                  </p>
                  <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">
                    {isEn
                      ? mobileSelectedProject.statsEn.context
                      : mobileSelectedProject.statsFr.context}
                  </p>
                </div>
                <div className="bg-neutral-50 dark:bg-neutral-950 p-3.5 rounded-xl border border-neutral-200/60 dark:border-neutral-800/60">
                  <p className="text-[10px] text-neutral-400 uppercase font-mono">
                    {isEn ? "Role" : "Rôle"}
                  </p>
                  <p className="text-xs font-bold text-neutral-800 dark:text-neutral-200 mt-0.5">
                    {isEn
                      ? mobileSelectedProject.statsEn.role
                      : mobileSelectedProject.statsFr.role}
                  </p>
                </div>
              </div>

              {/* Challenge Block */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  {isEn ? "Goal & Challenge" : "Objectif & Défi"}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed bg-rose-500/5 dark:bg-rose-500/10 p-3.5 rounded-xl border border-rose-500/10">
                  {isEn
                    ? mobileSelectedProject.challengeEn
                    : mobileSelectedProject.challengeFr}
                </p>
              </div>

              {/* Solution Block */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-neutral-800 dark:text-neutral-300 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {isEn
                    ? "Implementation & Delivery"
                    : "Réalisation & Implémentation"}
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 leading-relaxed bg-emerald-500/5 dark:bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/10">
                  {isEn
                    ? mobileSelectedProject.solutionEn
                    : mobileSelectedProject.solutionFr}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-2 pt-1">
                <p className="text-[10px] text-neutral-400 uppercase font-mono">
                  {isEn ? "Technologies" : "Technologies utilisées"}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {mobileSelectedProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/60 dark:border-neutral-700/60 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMobileSelectedProject(null)}
                className="w-full py-3 rounded-xl bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-xs font-semibold hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors cursor-pointer"
              >
                {isEn ? "Close details" : "Fermer les détails"}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
