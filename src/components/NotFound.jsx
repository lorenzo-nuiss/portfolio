import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Radar,
  Terminal,
  ArrowLeft,
  Home,
  ShieldAlert,
  Search,
  RefreshCw,
  Radio,
  Sparkles,
  Sun,
  Moon,
  Briefcase,
} from "lucide-react";

export function NotFound({
  onGoHome,
  isDarkMode,
  toggleDarkMode,
  lang = "fr",
  setLang,
}) {
  const isEn = lang === "en";
  const [pathname, setPathname] = useState("/page-introuvable");
  const [scanning, setScanning] = useState(false);
  const [logs, setLogs] = useState([
    "[SYSTEM] Error 404: Requested endpoint not resolved.",
    "[OSINT_RADAR] Initiating grid sweep...",
    "[STATUS] 0 packets returned. Target lost in deep web space.",
  ]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(
        window.location.pathname !== "/"
          ? window.location.pathname
          : "/404-lost-route",
      );
    }
  }, []);

  const runRadarScan = () => {
    setScanning(true);
    setLogs((prev) => [
      ...prev,
      `[SCAN ${new Date().toLocaleTimeString()}] Sweeping spectrum on target ${pathname}...`,
    ]);

    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        `[SIGNAL FAIL] No satellite lock found. Redirect recommended.`,
      ]);
      setScanning(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 flex flex-col justify-between relative overflow-hidden font-sans selection:bg-indigo-500 selection:text-white">
      {/* Background Animated Tech Grid & Radar Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none animate-pulse" />

      {/* Top Bar Header */}
      <header className="relative z-20 max-w-7xl mx-auto w-full px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={onGoHome}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 text-xs font-mono text-neutral-300 hover:text-white transition-all cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-indigo-400" />
            <span>Lorenzo Nuissier</span>
          </button>
          <span className="px-2.5 py-1 rounded-md bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[11px] font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
            404_NOT_FOUND
          </span>
        </div>

        {/* Right Switchers */}
        <div className="flex items-center gap-3">
          {/* Lang toggle */}
          <div className="flex items-center p-1 bg-neutral-900/80 rounded-full border border-neutral-800">
            <button
              onClick={() => setLang && setLang("fr")}
              className={`px-3 py-1 text-xs font-mono font-semibold rounded-full transition-all cursor-pointer ${
                lang === "fr"
                  ? "bg-neutral-100 text-neutral-950"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang && setLang("en")}
              className={`px-3 py-1 text-xs font-mono font-semibold rounded-full transition-all cursor-pointer ${
                lang === "en"
                  ? "bg-neutral-100 text-neutral-950"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              EN
            </button>
          </div>

          {/* Theme switch */}
          {toggleDarkMode && (
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              title={isDarkMode ? "Light Mode" : "Dark Mode"}
            >
              {isDarkMode ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-300" />
              )}
            </button>
          )}
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-12 flex-1 flex flex-col justify-center items-center text-center">
        {/* Radar Drone Scan Visual */}
        <div className="relative mb-8 group">
          {/* Concentric Radar Rings */}
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md flex items-center justify-center relative shadow-2xl">
            <div className="absolute inset-2 rounded-full border border-neutral-800/80" />
            <div className="absolute inset-6 rounded-full border border-indigo-500/20" />
            <div className="absolute inset-10 rounded-full border border-indigo-500/30" />

            {/* Radar Sweeping Hand */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, transparent 270deg, rgba(99, 102, 241, 0.35) 360deg)",
              }}
            />

            {/* Center Icon */}
            <div className="relative z-10 w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 shadow-lg">
              <Radar
                className={`w-6 h-6 ${scanning ? "animate-spin text-emerald-400" : ""}`}
              />
            </div>

            {/* Glowing Blip */}
            <motion.div
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="absolute top-6 right-8 w-2.5 h-2.5 rounded-full bg-rose-500 shadow-[0_0_12px_#f43f5e]"
            />
          </div>

          {/* Big 404 Floating Badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700 text-[10px] font-mono tracking-widest text-neutral-400 uppercase shadow-md flex items-center gap-1.5">
            <ShieldAlert className="w-3 h-3 text-rose-400" />
            <span>ERR_LOCATION_404</span>
          </div>
        </div>

        {/* Big Code & Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-b from-white via-neutral-200 to-neutral-500 bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-2xl font-bold text-neutral-200 mt-2"
        >
          {isEn ? "Target Route Not Found" : "Route ou page introuvable"}
        </motion.p>

        <p className="text-xs md:text-sm text-neutral-400 max-w-lg mt-3 leading-relaxed">
          {isEn
            ? `The requested URL (${pathname}) does not exist on this server or has been relocated during cyberspace investigation.`
            : `L'URL demandée (${pathname}) n'existe pas ou a été déplacée lors de l'investigation numérique.`}
        </p>

        {/* Mini OSINT / Cyber Terminal */}
        <div className="w-full max-w-xl mt-8 rounded-2xl bg-neutral-900/90 border border-neutral-800 p-4 text-left shadow-2xl backdrop-blur-md">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-indigo-400" />
              <span>cyber_radar_drone.log</span>
            </div>
            <button
              onClick={runRadarScan}
              disabled={scanning}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 transition-colors text-[11px] cursor-pointer disabled:opacity-50"
            >
              <RefreshCw
                className={`w-3 h-3 ${scanning ? "animate-spin" : ""}`}
              />
              <span>{isEn ? "Rescan" : "Relancer le scan"}</span>
            </button>
          </div>

          <div className="pt-3 font-mono text-[11px] md:text-xs text-neutral-300 space-y-1.5 h-28 overflow-y-auto scrollbar-thin">
            {logs.map((log, idx) => (
              <p
                key={idx}
                className={
                  log.includes("FAIL")
                    ? "text-rose-400"
                    : log.includes("SCAN")
                      ? "text-amber-400"
                      : "text-emerald-400/90"
                }
              >
                {log}
              </p>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-8"
        >
          <button
            onClick={onGoHome}
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium flex items-center gap-2 shadow-lg shadow-indigo-600/25 transition-all cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>{isEn ? "Return to Portfolio" : "Retour au Portfolio"}</span>
          </button>

          <button
            onClick={() => {
              onGoHome();
              setTimeout(() => {
                const el = document.getElementById("projects-section");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 150);
            }}
            className="px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-200 hover:text-white text-sm font-medium flex items-center gap-2 transition-all cursor-pointer"
          >
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>{isEn ? "Explore Projects" : "Découvrir mes projets"}</span>
          </button>
        </motion.div>
      </main>

      {/* Footer info */}
      <footer className="relative z-20 max-w-7xl mx-auto w-full px-6 py-6 text-center text-xs font-mono text-neutral-500 border-t border-neutral-900">
        <span>Lorenzo Nuissier — Fullstack Developer</span>
      </footer>
    </div>
  );
}
