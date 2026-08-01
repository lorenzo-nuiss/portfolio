import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ShieldCheck,
  Mail,
  Copy,
  Check,
  Lock,
  ArrowRight,
  MapPin,
  Linkedin,
  Github,
} from "lucide-react";

// Obfuscated contact details (Base64) to prevent automated web scrapers
const ENCODED_EMAIL = "bnVpc3NpZXIubG9yZW56by43N0BnbWFpbC5jb20="; // nuissier.lorenzo.77@gmail.com

export function ContactModal({ isOpen, onClose, lang = "fr" }) {
  const [isHumanVerified, setIsHumanVerified] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const isEn = lang === "en";

  // Decoded email only when human verified
  const getEmail = () => {
    try {
      return atob(ENCODED_EMAIL);
    } catch {
      return "";
    }
  };

  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setSliderValue(val);
    if (val >= 95) {
      setIsHumanVerified(true);
      setSliderValue(100);
    }
  };

  const handleCopyEmail = () => {
    const email = getEmail();
    if (email) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setIsHumanVerified(false);
    setSliderValue(0);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/60 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative w-full max-w-md bg-white/90 dark:bg-neutral-900/90 backdrop-blur-2xl rounded-3xl border border-neutral-200/80 dark:border-neutral-800/80 p-6 sm:p-8 shadow-2xl z-10 text-neutral-900 dark:text-neutral-100"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-200/60 dark:border-neutral-800/60">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold">
                  {isEn ? "Contact me" : "Me contacter"}
                </h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {isEn
                    ? "Direct contact & verification"
                    : "Coordonnées directes & vérification"}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          {!isHumanVerified ? (
            /* Anti-Bot Challenge Step */
            <div className="space-y-6 py-2">
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-start gap-3">
                <Lock className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-800 dark:text-amber-300 leading-relaxed">
                  <p className="font-semibold">
                    {isEn
                      ? "Anti-Bot Protection Active"
                      : "Protection Anti-Bot active"}
                  </p>
                  <p className="mt-0.5 opacity-90">
                    {isEn
                      ? "To prevent automated web scraping, slide the cursor to the right to unlock contact details."
                      : "Afin d'éviter le spam automatisé, glissez le curseur vers la droite pour débloquer les informations de contact."}
                  </p>
                </div>
              </div>

              {/* Interactive Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center text-xs font-medium text-neutral-500 dark:text-neutral-400">
                  <span>
                    {isEn ? "Slide to verify" : "Glisser pour vérifier"}
                  </span>
                  <span className="font-mono">{sliderValue}%</span>
                </div>

                <div className="relative w-full h-12 bg-neutral-100 dark:bg-neutral-800 rounded-full p-1 border border-neutral-200 dark:border-neutral-700/80 overflow-hidden flex items-center">
                  {/* Progress Fill */}
                  <div
                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full transition-all duration-75"
                    style={{ width: `${sliderValue}%` }}
                  />

                  {/* Range Input Control */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={handleSliderChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
                  />

                  {/* Visual Slider Thumb Label */}
                  <div className="relative z-10 w-full flex items-center justify-between px-4 text-xs font-semibold pointer-events-none">
                    <span
                      className={`transition-opacity duration-200 ${sliderValue > 40 ? "text-white" : "text-neutral-500 dark:text-neutral-400"}`}
                    >
                      {sliderValue >= 95
                        ? isEn
                          ? "Verified!"
                          : "Vérifié !"
                        : isEn
                          ? "Slide cursor →"
                          : "Déplacer le curseur →"}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-200 ${sliderValue > 80 ? "translate-x-1 text-white" : "text-neutral-400"}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Verified Contact Details View */
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6 py-1"
            >
              {/* Verification Success Badge */}
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>
                  {isEn
                    ? "Human verified, details unlocked"
                    : "Humain vérifié, coordonnées débloquées"}
                </span>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800/80 space-y-3">
                <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider font-mono">
                  {isEn ? "Email Address" : "Adresse E-mail"}
                </p>
                <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                  <span className="text-sm font-semibold font-mono text-neutral-900 dark:text-neutral-100 select-all truncate">
                    {getEmail()}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer shrink-0"
                    title={isEn ? "Copy email" : "Copier l'e-mail"}
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-emerald-500" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${getEmail()}`}
                  className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
                >
                  <Mail className="w-4 h-4" />
                  {isEn ? "Send an email" : "Envoyer un e-mail"}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-800 dark:text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      {isEn ? "Copied!" : "Copié !"}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      {isEn ? "Copy address" : "Copier l'adresse"}
                    </>
                  )}
                </button>
              </div>

              {/* Reset Verification option */}
              <div className="text-center pt-1">
                <button
                  onClick={handleReset}
                  className="text-[11px] text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 underline cursor-pointer"
                >
                  {isEn
                    ? "Hide contact details again"
                    : "Masquer à nouveau les coordonnées"}
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
