import React from "react";
import { Timeline } from "./timeline";
import learningJavaImage from "../../src/assets/images/learning-java.jpg";

export function TimelineDemo({ lang = "fr" }) {
  const isEn = lang === "en";

  const data = [
    {
      title: isEn ? "2025 to present" : "2025 à aujourd'hui",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            {isEn
              ? "Joining Webdrone, a company specializing in digital investigation, I began working on significantly more complex technical challenges. I develop business applications in Java (Quarkus) and React/Next.js, while taking part in architectural decisions, code reviews, and full-cycle development."
              : "En rejoignant Webdrone, entreprise spécialisée dans l’investigation numérique, j’ai commencé à travailler sur des problématiques techniques nettement plus complexes. Je développe des applications métier en Java (Quarkus) et React/Next.js, tout en participant aux choix d’architecture, aux revues de code et au cycle complet de développement."}
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8 leading-relaxed">
            {isEn
              ? "This experience also enabled me to integrate AI features with OpenAI APIs, work on web scraping, high-volume data ingestion, and DevOps topics with Docker, Jenkins, and Ansible. It is the experience that has contributed most to my technical growth."
              : "Cette expérience m’a également permis d’intégrer des fonctionnalités IA avec les API OpenAI, de travailler sur du scraping, l’ingestion de grands volumes de données et des sujets DevOps avec Docker, Jenkins et Ansible. C’est aujourd’hui l’expérience qui m’a le plus fait évoluer techniquement."}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Digital Investigation & Data Ingestion"
                referrerPolicy="no-referrer"
                className="w-full h-42 md:h-58 object-cover"
              />
              <div className="absolute inset-0 p-3 flex items-end"></div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80"
                alt="AI Integration & Automation"
                referrerPolicy="no-referrer"
                className="w-full h-42 md:h-58 object-cover"
              />
              <div className="absolute inset-0 p-3 flex items-end"></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 leading-relaxed">
            {isEn
              ? "Alongside my professional roles, I supported several freelance clients. I developed a mobile application using React Native, Node.js, and AWS, as well as a SaaS platform in Next.js, handling everything from concept to deployment."
              : "En parallèle de mes expériences professionnelles, j’ai accompagné plusieurs clients en freelance. J’ai développé une application mobile avec React Native, Node.js et AWS, ainsi qu’une plateforme SaaS en Next.js, en intervenant de la conception jusqu’au déploiement."}
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
            {isEn
              ? "This period taught me self-reliance, understanding client business requirements, and making sound architectural decisions across end-to-end projects."
              : "Cette période m’a appris à être autonome, à comprendre les besoins d’un client et à prendre des décisions techniques sur des projets complets."}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Freelance",
              "React Native",
              "Next.js SaaS",
              "Node.js & AWS",
              "Architecture Complete",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
                alt="React Native Mobile App"
                referrerPolicy="no-referrer"
                className="w-full h-42 md:h-58 object-cover"
              />
              <div className="absolute inset-0 p-3 flex items-end"></div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                alt="Next.js SaaS Platform"
                referrerPolicy="no-referrer"
                className="w-full h-42 md:h-58 object-cover"
              />
              <div className="absolute inset-0 p-3 flex items-end"></div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 leading-relaxed">
            {isEn
              ? "I continued my work-study program within a developer team on several Symfony projects. During this period, I also created this portfolio to showcase my journey and experiment with new technologies."
              : "J’ai poursuivi mon alternance au sein d’une équipe de développeurs sur plusieurs projets Symfony. C’est également durant cette période que j’ai créé ce portfolio afin de présenter mon parcours et continuer à expérimenter de nouvelles technologies."}
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
            {isEn
              ? "Outside of work, I devoted significant time to deepening my knowledge of Java, React, Node.js, and building personal projects to accelerate my skills."
              : "En dehors du travail, j’ai consacré beaucoup de temps à approfondir Java, React, Node.js et à développer différents projets personnels pour progresser plus rapidement."}
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Symfony",
              "Java",
              "React",
              "Portfolio",
              "Projets Personnels",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },

    {
      title: "2022",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4 leading-relaxed">
            {isEn
              ? "This year marked my first real Full Stack experiences. I contributed to building applications in React, Node.js, Symfony, and SvelteKit, while learning team collaboration, Agile methodologies, and server deployments."
              : "Cette année a marqué mes premières vraies expériences Full Stack. J’ai participé au développement d’applications en React, Node.js, Symfony et SvelteKit, tout en découvrant le travail en équipe, les méthodes Agile et le déploiement d’applications sur serveur."}
          </p>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
            {isEn
              ? "I also began gaining a deeper understanding of software architecture and best practices that extend far beyond simply writing code."
              : "J’ai également commencé à mieux comprendre l’architecture logicielle et les bonnes pratiques qui vont bien au‑delà du simple développement de fonctionnalités."}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Full Stack",
              "React & Node.js",
              "SvelteKit",
              "Agile & Teamwork",
              "Déploiement Serveur",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Full Stack Web Development"
                referrerPolicy="no-referrer"
                className="w-full h-42 md:h-58 object-cover"
              />
              <div className="absolute inset-0 p-3 flex items-end"></div>
            </div>

            <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Agile Team Collaboration"
                referrerPolicy="no-referrer"
                className="w-full h-42 md:h-58 object-cover"
              />
              <div className="absolute inset-0 p-3 flex items-end"></div>
            </div>
          </div>
        </div>
      ),
    },

    {
      title: "2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
            {isEn
              ? "My first work-study experience introduced me to web development in a corporate environment. I built WordPress sites, contributed to client projects, and learned the different project phases from design to delivery."
              : "Ma première alternance m’a permis de découvrir le développement web en entreprise. J’y ai réalisé des sites WordPress, participé à des projets clients et découvert les différentes étapes d’un projet, de la conception jusqu’à la livraison."}
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Première Alternance",
              "WordPress",
              "Projets Clients",
              "Conception à Livraison",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ),
    },

    {
      title: isEn ? "2020 and earlier" : "2020 et avant",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-6 leading-relaxed">
            {isEn
              ? "After working in other fields, I decided to transition into software development. I started by learning web fundamentals and programming before entering a work-study training program. During this time, I discovered Java, databases, software architecture, and web development."
              : "Après plusieurs expériences dans d’autres secteurs, j’ai décidé de me reconvertir dans le développement. J’ai commencé par apprendre les bases du web et de la programmation avant d’intégrer une formation en alternance. C’est à cette période que j’ai découvert Java, les bases de données, l’architecture logicielle et le développement web."}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {[
              "Reconversion Pro",
              "Bases du Web",
              "Découverte Java",
              "Bases de Données",
              "Architecture Logicielle",
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 text-xs font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-sm">
            <div className="relative overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md">
              <img
                src={learningJavaImage}
                alt="Software Development Fundamentals & Java Study"
                referrerPolicy="no-referrer"
                className="w-full h-42 md:h-58 object-cover"
              />
              <div className="absolute inset-0 p-3 flex items-end"></div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} lang={lang} />
    </div>
  );
}
