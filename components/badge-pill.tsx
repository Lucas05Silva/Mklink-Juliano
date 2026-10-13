"use client";

import { motion } from "framer-motion";
import { BADGE_TEXT } from "@/lib/constants";
import { badgeFadeIn, DELAYS } from "@/lib/animations";

export function BadgePill() {
  return (
    <motion.div
      variants={badgeFadeIn}
      custom={DELAYS.badge}
      initial="hidden"
      animate="visible"
      className="mb-4 flex justify-center"
    >
      <span className="inline-block animate-pulse-badge rounded-full border-[0.5px] border-brand-gold/25 bg-brand-gold/12 px-4 py-1.5 font-body text-[11px] font-medium uppercase tracking-[0.08em] text-brand-gold">
        {BADGE_TEXT}
      </span>
    </motion.div>
  );
}
