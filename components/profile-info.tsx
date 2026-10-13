"use client";

import { motion } from "framer-motion";
import { PROFILE } from "@/lib/constants";
import { DELAYS, fadeInUp } from "@/lib/animations";

export function ProfileInfo() {
  return (
    <motion.div
      variants={fadeInUp}
      custom={DELAYS.info}
      initial="hidden"
      animate="visible"
      className="mb-7 text-center"
    >
      <h1 className="mb-1.5 font-display text-[32px] font-light leading-tight tracking-[0.04em] text-brand-cream">
        {PROFILE.name}
      </h1>

      <p className="mb-3.5 font-body text-[11px] font-medium uppercase tracking-[0.22em] text-brand-gold">
        {PROFILE.subtitle}
      </p>

      <div aria-hidden="true" className="mx-auto mb-3.5 h-px w-10 bg-brand-gold/30" />

      <p className="font-display text-sm italic leading-relaxed text-brand-cream/70">
        {PROFILE.tagline}
      </p>
    </motion.div>
  );
}
