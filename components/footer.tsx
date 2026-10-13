"use client";

import { motion } from "framer-motion";
import { FOOTER } from "@/lib/constants";
import { DELAYS, fadeIn } from "@/lib/animations";

export function Footer() {
  return (
    <motion.footer
      variants={fadeIn}
      custom={DELAYS.footer}
      initial="hidden"
      animate="visible"
      className="mt-5 text-center font-body text-[11px] text-brand-cream/50"
    >
      {FOOTER.text}
    </motion.footer>
  );
}
